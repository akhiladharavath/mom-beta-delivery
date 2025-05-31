import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function BackNavigation() {
  return (
    <TouchableOpacity onPress={()=>router.back()} style={{marginRight:7}}>
        <AntDesign name='left' size={24} />
    </TouchableOpacity>
  )
}