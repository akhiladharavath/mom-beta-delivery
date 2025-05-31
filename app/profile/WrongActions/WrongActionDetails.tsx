import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function WrongActionDetails() {
  return (
    <View style={styles.container}>
        <Image source={{uri:'https://i.postimg.cc/76TmQgJm/8e677967368f592099b1a2f4f81f9aa6c12e72db.png'}} style={{width:220 , height:220 , opacity:0.5 }} />
      <Text style={styles.text}>No wrong actions Done</Text>
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
    }
})