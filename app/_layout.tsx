
import { DeliveryBoyAuthProvider } from "@/context/authContext";

import { LocationProvider } from "@/context/locatonContext";
import { OrderProvider } from "@/context/orderContext";
import {StatusProvider} from '@/context/deliveryBoyStatusContext'
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
   
    <DeliveryBoyAuthProvider>
      <LocationProvider>
        <StatusProvider>
          <OrderProvider>
            <Stack screenOptions={{
              headerShown: false
            }}>
              <Stack />
            </Stack>
          </OrderProvider>
        </StatusProvider>
      </LocationProvider>
    </DeliveryBoyAuthProvider>
    

  )
}
