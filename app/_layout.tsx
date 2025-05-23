import { DeliveryAuthProvider  } from "@/context/Auth2Context";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    
       <DeliveryAuthProvider>
        <Stack screenOptions={{
        headerShown: false}}/>
       </DeliveryAuthProvider>
  )
}
