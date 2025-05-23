// app/lib/otp.tsx
import { Alert, Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OTP_KEY = 'generatedOTP';

const setItem = async (key: string, value: string) => {
  if (Platform.OS === 'web') {
    await AsyncStorage.setItem(key, value);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
};
const getItem = async (key: string) => {
  return Platform.OS === 'web'
    ? await AsyncStorage.getItem(key)
    : await SecureStore.getItemAsync(key);
};

export const sendSmsOtp = async (phone: string): Promise<void> => {
  const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  await setItem(OTP_KEY, generatedOTP);
  Alert.alert(`OTP for ${phone}: ${generatedOTP}`);
};

export const verifyOtp = async (inputOtp: string): Promise<boolean> => {
  const storedOtp = await getItem(OTP_KEY);
  return inputOtp === storedOtp;
};
