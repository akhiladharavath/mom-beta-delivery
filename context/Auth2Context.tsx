// context/DeliveryAuthContext.js
import React, { createContext, useEffect, useState, useCallback } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import { router } from 'expo-router';

export const DeliveryAuthContext = createContext(null);

export const DeliveryAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [deliveryUser, setDeliveryUser] = useState(null);

  const getUserDetails = useCallback(async (token) => {
    try {
      if (!token) return;

      const res = await fetch('http://192.168.159.31:3000/delivery/alldelivery', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setDeliveryUser(data.user);
      } else {
        console.error('Failed to fetch delivery user details');
      }
    } catch (err) {
      console.error('Error fetching delivery user:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync('user');
        const storedToken = await SecureStore.getItemAsync('token');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setIsLoggedIn(true);
          await getUserDetails(storedToken);
        }
      } catch (err) {
        console.error('Error checking delivery login:', err);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [getUserDetails]);

  const loginWithPhone = async (phoneNumber) => {
    try {
      const res = await fetch('http://192.168.159.31:3000/delivery/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || 'Login failed');

      await SecureStore.setItemAsync('user', JSON.stringify(result.data));
      await SecureStore.setItemAsync('token', result.data.token);
      setToken(result.data.token);
      setIsLoggedIn(true);

      await getUserDetails(result.data.token);
      router.replace({ pathname: './otp', params: { user: phoneNumber } });

    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Login Error', err.message || 'Failed to login');
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync('user');
      await SecureStore.deleteItemAsync('token');
      setToken(null);
      setIsLoggedIn(false);
      setDeliveryUser(null);
      router.replace('/Login/login');
    } catch (err) {
      console.error('Logout error:', err);
      Alert.alert('Error', 'Failed to logout');
    }
  };

  return (
    <DeliveryAuthContext.Provider
      value={{
        isLoggedIn,
        loading,
        token,
        deliveryUser,
        loginWithPhone,
        logout,
        getUserDetails,
      }}
    >
      {loading ? null : children}
    </DeliveryAuthContext.Provider>
  );
};
