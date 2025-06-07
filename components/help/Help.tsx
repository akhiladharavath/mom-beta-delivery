import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Help() {
  return (
    <TouchableOpacity onPress={()=>console.log("pressed on hlep")} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 , gap: 4 }}>
        {/* <Ionicons name='help-circle' size={24} color={Colors.primary}/>
         */}
         <Image source={require("@/assets/images/447.png")} style={{marginHorizontal:4}} width={20} height={20} />
      <Text>Help</Text>
    </TouchableOpacity>
  )
}