import { DeliveryAuthProvider  } from "@/context/Auth2Context";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    
       <DeliveryAuthProvider>
        <Stack screenOptions={{
        headerShown: false}}/>
       </DeliveryAuthProvider>
  )
}
