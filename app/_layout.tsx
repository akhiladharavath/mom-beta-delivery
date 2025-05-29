import { DeliveryBoyAuthProvider  } from "@/context/authContext";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    
       <DeliveryBoyAuthProvider>
        <Stack screenOptions={{
        headerShown: false}}/>
       </DeliveryBoyAuthProvider>
  )
}
