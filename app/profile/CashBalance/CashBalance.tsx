import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { screenWidht } from '@/constants/ScreenConfig'
import { COLORS } from '@/constants/COLORS'

export default function CashBalance() {
  return (
    <>
    <View style={styles.cashBalanceContainer}>
      <Text>Cash Balance</Text>
      <Text style={styles.balance} >₹ 0</Text>
      <Text style={styles.limit}>Available Limit: 1,400</Text>
      <TouchableOpacity style={styles.depositeButton} >
        <Text>Deposite</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.imageContainer}>
        <Image source={{uri:"https://i.postimg.cc/2SNLBQSY/7ccde53a0912a8cd7bc989284fcc8b8c80d7ff27.png"}} width={220} height={220} />
        <Text style={styles.imageTextStyle}>No Pending Cash Orders</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    cashBalanceContainer:{
        backgroundColor:"white",
        width:screenWidht ,
        alignItems:"center",
        padding:20 ,
        marginVertical:8,
        gap:12,
        paddingBottom:80
    },
    balance:{
        fontSize:30 , 
        fontWeight:"bold",
        marginVertical:12
    },
    limit:{
        fontSize:12,
    },
    depositeButton:{
        backgroundColor:COLORS.gray ,
        padding:12 , 
        paddingHorizontal:20,
        borderRadius:24

    },
    imageContainer:{
        flex:1, 
        // justifyContent:"center",
        alignItems:"center"
    },
    imageTextStyle:{
        fontWeight:"bold",
        fontSize:20
    }
})