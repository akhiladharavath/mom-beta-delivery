import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';
export default function Help() {
  return (
    <View style={{ flexDirection:'row',alignContent:'flex-end' ,padding: 10 , gap: 10 ,marginLeft:170,}}>
        <Image source={require('../../assets/images/help11.png')} style={styles.img}
       />
      <Text onPress={()=>{router.push('/profile/momhelp')}} style={styles.header}>Help</Text>
  </View>
  );
};
const styles = StyleSheet.create({
 header: {
  fontSize: 20,
  color: "#000",
  marginLeft:-5,
  marginTop:5,
 },
 img:{
  height:30,
  marginLeft:-10,
 },
})