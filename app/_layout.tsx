import { DeliveryAuthProvider  } from "@/context/Auth2Context";
import { LocationProvider } from "@/context/locatonContext";
import { OrderProvider } from "@/context/orderContext";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    
       <DeliveryAuthProvider>
        <LocationProvider>
        <OrderProvider>
        <Stack screenOptions={{
        headerShown: false}}/>
        </OrderProvider>
        </LocationProvider>
       </DeliveryAuthProvider>
  )
}
