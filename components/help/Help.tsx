import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Help() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 , gap: 10 }}>
        <Image source={require('../../assets/images/help1.jpg')} size={15} color='black' />
      <Text>Help</Text>
    </View>
  )
}