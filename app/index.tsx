import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import { router } from "expo-router";
import React, { useEffect } from 'react';
import userDeliveryAuth from "@/context/authContext";
import LoadingScreen from "@/components/LoadingScreen";


export default function Index() {

  const { isLoggedIn, loading, deliveryBoyDetails, extractToken, getDeliveryBoyDetails } = userDeliveryAuth()

 

  useEffect(() => {
    const init = async () => {
      const token = await extractToken();
      if (token) {
        await getDeliveryBoyDetails(); // wait for this to finish
      } else {
        router.replace("/Login/login");
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (deliveryBoyDetails) {
      if (deliveryBoyDetails.isRegistered) {
        console.log("this is running")
        router.replace("/Tabs/home");
      } else {
        router.replace("/Login/signup");
      }
    }
  }, [deliveryBoyDetails]);


  if (loading) return <LoadingScreen />

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfa5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'white',
    top: 0,
    marginTop: -280,
    height: 500,
    width: '120%',
    borderBottomEndRadius: 100,
    borderBottomLeftRadius: 100
  },
  logo: {
    width: 180,
    height: 180,
    marginTop: 200
  },
  title: {
    fontSize: 24,
    color: '#00bfa5',
    marginTop: 10,
    fontWeight: 'bold',
    borderTopLeftRadius: 300,

  },
  tagline: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 100,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#00bfa5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  entryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  entryText: {
    color: '#00bfa5',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  loginText: {
    color: '#00bfa5',
    fontWeight: 'bold',
  },
})