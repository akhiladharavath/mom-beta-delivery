import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useOrders } from '../../context/orderContext';
import { useLocation } from '@/context/locatonContext';

const screenWidth = Dimensions.get('window').width;

const DeliveryDashboard = () => {
  const {
    orders,
    loadingOrders,
    acceptingOrderId,
    error,
    acceptOrder,
    rejectedOrderIds,
    rejectOrder,
    acceptedOrderDetails, 
  } = useOrders();

  const{locationCoords} = useLocation()

  const getDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Earth radius in KM

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d.toFixed(2); // distance in KM
};





  const confirmedOrders = orders
    .filter(o => o.status === 'confirmed' && !o.deliveryboy_id && !rejectedOrderIds.includes(o._id))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 2);

  const handleAccept = (id) => {
    acceptOrder(id, () => {
      router.push('/delivery/pickup');
    });
  };



  const renderItem = ({ item }) => {
    if (item.status !== 'confirmed' || item.deliveryboy_id) return null;
    
const customerLocation = item.address_id?.currentLocation;
// console.log('Customer Location:', customerLocation);
//   console.log('Delivery Boy Location:', locationCoords);

  const distance = customerLocation && locationCoords
    ? getDistance(
        locationCoords.latitude,
        locationCoords.longitude,
        customerLocation.latitude,
        customerLocation.longitude
      )
    : null;

    return (
      <View style={styles.orderCard}>
        <Text style={styles.orderText}>Order ID: {item._id}</Text>
       <Text style={styles.orderText}>Total: ${item.total_amount}</Text>
       
      {distance && (
        <Text style={styles.orderText}>Distance: {distance} km</Text>
      )}
        <View style={styles.btns}>
                    <TouchableOpacity
            style={[
              styles.button,
              acceptingOrderId === item._id && styles.acceptButtonDisabled
            ]}
            onPress={() => handleAccept(item._id)}
            disabled={acceptingOrderId === item._id}
          >
            <Text style={styles.textBtn}>
              {acceptingOrderId === item._id ? 'Accepting...' : 'Accept Order'}
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.button}
            onPress={() => rejectOrder(item._id)}
          >
            <Text style={styles.textBtn}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };



  return (
    <ScrollView style={{ backgroundColor: "#D0E8E6", marginBottom: 40 }}>
      <View style={styles.container}>
        <View style={styles.orders}>
          <View style={styles.back}>
            <Text style={[styles.info, { height: 32, width: 40 }]}>All</Text>
            <Text style={[styles.info, { height: 32, width: 96 }]}>Earnings</Text>
            <Text style={[styles.info, { height: 32, width: 103 }]}>My Shifts</Text>
          </View>
        </View>

        <View style={styles.Today}>
          <Text style={{ marginLeft: 10 }}>Today</Text>
        </View>

        {loadingOrders && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.errorText}>{error}</Text>}
        {!loadingOrders && confirmedOrders.length === 0 && (
          <Text style={styles.noOrdersText}>No available orders at the moment.</Text>
        )}
        <FlatList
          data={confirmedOrders}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        <View style={styles.Today}>
          <Text style={{ marginLeft: 10 }}>Order</Text>
        </View>

        <View style={styles.gen4}>
          <Image
            source={require("@/assets/images/Orders/msg.png")}
            style={{ width: 30, height: 30, top: 15, left: 10 }}
          />
          <Text style={styles.txt}>General</Text>
          <Text style={styles.text}>
            You delivered order id #2545221 at Hebbala.
          </Text>
          <Text style={{ marginLeft: 50, fontSize: 16, marginRight: 60 }}>
            Your amount is credited to your account.
          </Text>
          <Text style={styles.smallTxt}>View details</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Image
              source={require("@/assets/images/Orders/ok.png")}
              style={{ width: 30, height: 30, margin: 12 }}
            />
          </View>
        </View>

        <View style={styles.gen5}>
          <Image
            source={require("@/assets/images/Orders/earnings.png")}
            style={{ position: "absolute", width: 30, height: 30 }}
          />
          <Text style={styles.txt}>Earnings</Text>
          <Text style={styles.text}>
            Get 30% Extra Earnings on every KM with Mom Pharma pay Incentives.
          </Text>
          <Text style={styles.smallTxt}>View details</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Image
              source={require("@/assets/images/Orders/dollor.png")}
              style={{ width: 30, height: 30, top: -10, marginLeft: 300 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DeliveryDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D0E8E6",
    flex: 1,
    padding: 10,
  },
  orders: {
    backgroundColor: "#D0E8E6",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  back: {
    gap: 12,
    marginVertical: 17,
    flexDirection: "row",
    fontSize: 12,
    marginTop: 10,
    justifyContent: "flex-start"
  },
  info: {
    color: "white",
    backgroundColor: "#008080",
    textAlign: "center",
    padding: 8,
    borderRadius: 50,
    fontWeight: "bold",
  },
  Today: {
    backgroundColor: "white",
    height: 56,
    width: '100%',
    justifyContent: "center",
  },
  gen4: {
    width: "90%",
    marginHorizontal: 14,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  gen5: {
    width: "90%",
    marginHorizontal: 14,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
  },
  txt: {
    color: "#868686",
    fontSize: 12,
    height: 50,
    width: 50,
    marginLeft: 50,
  },
  text: {
    color: "#000000",
    fontSize: 16,
    marginLeft: 50,
    marginTop: -30,
  },
  smallTxt: {
    color: "red",
    left: 50,
    marginTop: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderCard: {
    padding: 15,
    marginHorizontal:20,
    marginVertical:10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2
  },
  orderText: {
    marginBottom: 5,
    fontSize: 16
  },
  errorText: {
    color: 'red',
    marginBottom: 10
  },
  noOrdersText: {
    fontSize: 16,
    fontStyle: 'italic'
  }
  ,
  btns: {
    flexDirection: 'row',
    gap: 60,
    justifyContent:'center',
    padding:5

  },
  button: {
    backgroundColor: '#00808088',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25

  },
  textBtn:{
    color:'white'
  }
});
