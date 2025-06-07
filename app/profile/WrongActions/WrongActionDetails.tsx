import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function WrongActionDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <MaterialIcons name="arrow-back" size={24} color="#fff" style={styles.MaterialIcons} onPress={()=>router.back()} />
        <Text style={styles.headerTitle1}>Wrong Action History</Text>
        </View>
        <View style={styles.content}>
        <Image source={{uri:'https://i.postimg.cc/76TmQgJm/8e677967368f592099b1a2f4f81f9aa6c12e72db.png'}} style={{width:220 , height:220 , opacity:0.5 }} />
      <Text style={styles.text}>No wrong actions Done</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:18
    },
    content:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:250   
     },
    MaterialIcons: {
    marginLeft: -35,
    marginTop: 10,
    color:'#00a99d',
  },
  headerTitle1: {
    color: '#00a99d',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -25,
  },
  header:{
    marginTop:-300,
    marginLeft:-90,
  },
})