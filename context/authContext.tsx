import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, useEffect, useState, useCallback } from "react";
import { Alert } from "react-native";
import apiClient from "@/utils/apiClient";


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
      console.log("this is from get details"  , authToken)
      const response = await apiClient(`delivery/deliveryboy`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response) {
        setDeliveryBoyDetails(response);
        setIsLoggedIn(true)
      } else {
        console.error('Failed to fetch delivery boy details:', response);
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
        // await AsyncStorage.removeItem("deliveryBoy")
        const storedToken = await AsyncStorage.getItem('deliveryBoy');
        if (storedToken) {
          const parsedToken = JSON.parse(storedToken);
          console.log("stored token" , parsedToken)
          setToken(parsedToken);
          getDeliveryBoyDetails(parsedToken);
          setIsLoggedIn(() => true);
        }
      } catch (error) {
        console.error('Error checking delivery boy:', error);
      } finally {
        setLoading(false);
      }
    };
    checkDeliveryBoy();
  }, [getDeliveryBoyDetails]);


  console.log("this is from auth delivery boy detais" , deliveryBoyDetails)

  const loginWithOtp = async (phoneNumber) => {
    try {
      setLoading(true);
      const response = await apiClient('delivery/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber: phoneNumber }),
      });

      if (response) {
        const data = response;
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
      const response = await apiClient('delivery/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, mobileNumber: phoneNumber }),
      });

      if (response) {
        const data = response
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

  async function extractToken() {
    const token = await AsyncStorage.getItem("deliveryBoy")
    const parsedToken = JSON.parse(token)
    return parsedToken
  }


  async function registerUser(authToken , data){
    try{
      const options = {
        method:"POST" ,
        headers:{
          "Authorization":`Bearer ${authToken}`,
          'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
      }
      const reponse = await apiClient("delivery/register" , options)
      if(reponse) return true 
      else return false 
    }catch(err){
      console.log("error in registering the delivery boy" , err)
      return false
    }
  }

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
        extractToken , 
        registerUser
      }}
    >
      {children}
    </DeliveryBoyAuthContext.Provider>
  );
};


export default function userDeliveryAuth() {
  const context = useContext(DeliveryBoyAuthContext)
  if (!context) throw new Error("Context not defined")
  return context
}
