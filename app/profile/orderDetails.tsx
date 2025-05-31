import React from "react";
import { Text, View, StyleSheet, SectionList, SafeAreaView, TouchableOpacity, Button, FlatList } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

import Activity from "@/components/orders/orderActivity";
import { router } from "expo-router";
export const data = [
  {
    
    data: [

      { Time: '10:20 am', order_id: '#1234' , RTS:"On-time RTS" },
    ]
  }
];
export default function OrderHistoryScreen() {
  return (
    <SafeAreaView style={styles.screen}>
        <View>
            <View style={{flexDirection:'row', gap:10,backgroundColor:'white',height:50}}>
            <Ionicons name="chevron-back" size={24} color="black" onPress={()=>router.back()} />
            <Text style={{fontSize:20}}>Order Details</Text>
            </View>
        </View>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.order_id}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.timeBox}>
            
            <View style={styles.dataContainer}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.time}>{item.Time}</Text>
              <Text style={{marginLeft:12, backgroundColor:'#00897B33',borderRadius:20,padding:2}}>{item.RTS}</Text>
              </View>
              <Text style={styles.orderDetails}>Order: {item.order_id}</Text>
              <View style={styles.CODcontainer}>
              <Text style={styles.COD}>COD</Text>
              <Text style={styles.RTO}>RTO</Text>
              </View>
            </View>
            <View>
            </View>
          </View>
        )}
      />
      <Text style={{padding:20, fontWeight:'700', color:'#676767',fontSize:16,justifyContent:'center'}}>Order Activity</Text>
      <Activity/>
      <View style={{height:43,borderRadius:20,borderWidth:1,borderColor:"red",marginBottom:50, backgroundColor:'white',marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row',gap:'10'}}>
      <Entypo name="help-with-circle" size={24} color="red" />
      <Text style={{justifyContent:'center',textAlign:'center',paddingVertical:6}}>
      
      Help?</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#D0E8E6',
    paddingHorizontal: 10,
  },
  btn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    color: '#676767'
  },
  dataContainer: {
    paddingLeft: 8,
  },
  timeBox: {
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 8,
  },
  time: {
    fontSize: 14,
    color: '#676767',
    fontWeight: '700',
  },
  orderDetails: {
    fontWeight: '400',
    fontSize: 14,
    color: '#676767',
  },
  CODcontainer:{
    flexDirection:'row',
    gap:8,
  },
  COD: {
    fontWeight:700,
    marginTop: 7,
    width: 40,
    height: 25,
    backgroundColor: '#8C8D8D33',
    borderRadius: 27,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
  },
  RTO: {
    fontWeight:700,
    color:'red',
    marginTop: 7,
    width: 40,
    height: 25,
    backgroundColor: '#00897B33',
    borderRadius: 27,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    marginLeft:3
  },
});
