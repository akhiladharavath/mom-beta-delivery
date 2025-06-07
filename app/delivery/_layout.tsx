import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Help from '@/components/help/Help'
import { COLORS } from '@/constants/COLORS'

export default function _layout() {
  return (
    <Stack screenOptions={{headerStyle:{
        backgroundColor:COLORS.secondary
    }}}>
        <Stack.Screen name='pickup' options={{
            title: 'Pickup',
            headerRight:()=><Help/>
        }} />
        <Stack.Screen name='deliver' options={{
            title: 'Delivery',
            headerRight:()=><Help/>
        }} />
        <Stack.Screen name='order' options={{
            title: 'Order',
            headerRight:()=><Help/>
        }} />
    </Stack>
  )
}