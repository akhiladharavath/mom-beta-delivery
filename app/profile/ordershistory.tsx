import React from "react";
import { router } from 'expo-router';
import { Text, View, StyleSheet, SectionList, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export const data = [
  {
    title: '12th May',
    data: [

      { Time: '10:20 am', order_id: '#1234' , RTS:"On-time RTS" },
      { Time: '11:00 am', order_id: '#1235', RTS:"Delayed RTS"}
    ]
  },
  {
    title: '13th May',
    data: [
      { Time: '10:20 am', order_id: '#1236',RTS:"On-time RTS" },
      { Time: '11:15 am', order_id: '#1237',RTS:"On-time RTS" },
      { Time: '12:00 am', order_id: '#1238', RTS:"On-time RTS" }
    ]
  }
];
export default function OrderHistoryScreen() {
  return (
    
        
    <SafeAreaView style={styles.screen}>
    <View>
            <View style={{flexDirection:'row', gap:10,backgroundColor:'white',height:50}}>
            <Ionicons name="chevron-back" size={24} color="black" onPress={()=>router.back()} />
            <Text style={{fontSize:20}}>Order History</Text>
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
            <View style={styles.btn}>
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
            <TouchableOpacity onPress={()=>router.push('./orderDetails')}>
            <Ionicons name="chevron-forward" size={30} color="#818181" />
            </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
    marginTop:8,
  },
  CODcontainer:{
    flexDirection:'row',
    gap:'10'

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
    
  },
});
