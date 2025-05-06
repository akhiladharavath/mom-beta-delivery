import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, useEffect, useState, useCallback } from "react";
import { Alert } from "react-native";

export const DeliveryBoyAuthContext = createContext(null);

export const DeliveryBoyAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [deliveryBoyDetails, setDeliveryBoyDetails] = useState(null);

  const getDeliveryBoyDetails = useCallback(async (authToken) => {
    try {
      if (!authToken) return;
      setLoading(true);

      const response = await fetch('https://mom-beta-server.onrender.com/api/delivery/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDeliveryBoyDetails(data.deliveryBoy);
      } else {
        console.error('Failed to fetch delivery boy details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching delivery boy details:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const checkDeliveryBoy = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('deliveryBoy');
        if (storedToken) {
          const parsedToken = JSON.parse(storedToken);
          setToken(parsedToken);
          setIsLoggedIn(true);
          getDeliveryBoyDetails(parsedToken);
        }
      } catch (error) {
        console.error('Error checking delivery boy:', error);
      } finally {
        setLoading(false);
      }
    };
    checkDeliveryBoy();
  }, [getDeliveryBoyDetails]);

  const loginWithOtp = async (phoneNumber) => {
    try {
      setLoading(true);
      const response = await fetch('https://mom-beta-server.onrender.com/api/delivery/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        router.replace({ pathname: '/Login/otp', params: { deliveryBoy: phoneNumber } });
        console.log('Login initiated:', data);
      } else {
        Alert.alert('Login failed!', 'Unable to login. Please try again.');
      }
    } catch (error) {
      console.error('Error during delivery boy login:', error);
      Alert.alert('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (otp, phoneNumber) => {
    try {
      setLoading(true);
      const response = await fetch('https://mom-beta-server.onrender.com/api/deliveryBoy/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, phoneNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        await AsyncStorage.setItem('deliveryBoy', JSON.stringify(data.token));
        setToken(data.token);
        setIsLoggedIn(true);
        getDeliveryBoyDetails(data.token);
        return true;
      } else {
        Alert.alert('Invalid OTP', 'Please try again.');
        return false;
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      Alert.alert('An error occurred during OTP verification.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('deliveryBoy');
      setToken(null);
      setIsLoggedIn(false);
      setDeliveryBoyDetails(null);
      router.replace('/Login/login');
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Logout failed. Try again.');
    }
  };

  return (
    <DeliveryBoyAuthContext.Provider
      value={{
        loginWithOtp,
        verifyOtp,
        logout,
        isLoggedIn,
        loading,
        deliveryBoyDetails,
        getDeliveryBoyDetails,
      }}
    >
      {children}
    </DeliveryBoyAuthContext.Provider>
  );
};
