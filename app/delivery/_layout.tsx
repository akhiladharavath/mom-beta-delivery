import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import Help from '@/components/help/Help'
import { COLORS } from '@/constants/COLORS'
import { MaterialIcons } from '@expo/vector-icons'

export default function _layout() {
  return (
    <>
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: COLORS.secondary
      },
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen 
        name='pickup' 
        options={{
          title: 'Pickup',
          headerRight: () => <Help/>,
          gestureEnabled:false,
        }} 
      />
      <Stack.Screen 
        name='deliver' 
        options={{
          title: 'Delivery',
          headerRight: () => <Help/>,
          headerLeft: () => null,
        }} 
      />
      <Stack.Screen 
        name='order' 
        options={{
          title: 'Order',
          headerRight: () => <Help/>,
        }} 
      />
    </Stack>
    </>
  )
}