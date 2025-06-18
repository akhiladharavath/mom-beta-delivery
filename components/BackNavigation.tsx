import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function BackNavigation() {
  return (
    <TouchableOpacity onPress={()=>router.back()} style={{marginRight:7}}>
 <MaterialIcons name="arrow-back" size={24} color="#00a99d" />
    </TouchableOpacity>
  )
}