import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {

  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
const screenWidth = Dimensions.get("window").width;

const Orders = () => {
  const [selectedAction, setSelectedAction] = useState(null);
  return (
    <ScrollView style={{ backgroundColor: "#D0E8E6" , marginBottom:40 }}>
      
    <View style={styles.container}>
      <View style={styles.orders}>       
        <View style={styles.back}>
          <Text style={[styles.info, { height: 32, width: 40 }]}>All</Text>
          <Text style={[styles.info, { height: 32, width: 96 }]}>Earnings</Text>
          <Text style={[styles.info, { height: 32, width: 103 }]}>
            My Shifts
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.Today}>
          <Text style={{ marginLeft: 10 }}>Today</Text>
        </View>
      </View>
      <View style={styles.gen3}>
        <View>
          <Image
            source={require("@/assets/images/Orders/msg.png")}
            style={{ width: 30, height: 30, top: 15, left: 10 }}
          />
        </View>
        <Text style={styles.txt}>General</Text>
        <Text style={styles.text}>
          Order around 1.5kms away from you. What you want to do?
        </Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedAction === "ACCEPT" && { backgroundColor: "#00897BBA" },
            ]}
            onPress={() => {
              setSelectedAction("ACCEPT");
              router.push('/delivery/pickup')
              console.log("Accepted");
            }}
          >
            <Text style={styles.buttonText}>ACCEPT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              selectedAction === "Decline" && { backgroundColor: "#00897BBA" },
            ]}
            onPress={() => {
              setSelectedAction("Decline");
              console.log("Declined");
            }}
          >
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>

        <View  style={{flexDirection:"row", gap:5 , flex:1 , justifyContent:"flex-end" , margin:12}}>
          <Image
            source={require("@/assets/images/Orders/hands.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
        </View>
        <View style={{marginTop: 10}}>
        <View style={styles.Today}>
          <Text style={{ marginLeft: 10 }}>Order</Text>
        </View>
        </View>

        <View style={styles.gen4}>
          <View>
            <Image
              source={require("@/assets/images/Orders/msg.png")}
              style={{ width: 30, height: 30, top: 15, left: 10 }}
            />
          </View>
          <Text style={styles.txt}>General</Text>
          <Text style={styles.text}>
            You delivered order id #2545221 at Hebbala.
          </Text>
          <Text style={{ marginLeft: 50, fontSize: 16, marginRight: 60 }}>
            Your amount is credicted to your account.
          </Text>
          <Text style={styles.smallTxt}>View details</Text>
          <View  style={{flexDirection:"row", gap:5 , flex:1 , justifyContent:"flex-end"}}>
            <Image
              source={require("@/assets/images/Orders/ok.png")}
              style={{ width: 30, height: 30 , margin:12}}
            />
          </View>
        </View>
        <View style={styles.gen5}>

          <View>
            <Image
              source={require("@/assets/images/Orders/earnings.png")}
              style={{position:"absolute" ,width: 30, height: 30 }}
            />
          </View>
          <Text style={[styles.txt]}>Earnings</Text>
          <Text style={styles.text}>
            Get 30% Extra Earnings on every KM with Mom Pharma pay Incentives.
          </Text>
          <Text style={styles.smallTxt}>View details</Text>
          <View  style={{flexDirection:"row", gap:5 , flex:1 , justifyContent:"flex-end"}}>
            <Image
              source={require("@/assets/images/Orders/dollor.png")}
              style={{ width: 30, height: 30, top: -10, marginLeft: 300 }}
            />
          </View>
        </View>
      {/* </View> */}
    </View>
    </ScrollView>
  );
};
export default Orders;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D0E8E6",
    flex: 1,
  },
  orders: {
    backgroundColor: "#D0E8E6",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  sym: {
    marginRight: 5,
  },
  Today: {
    backgroundColor: "white",
    height: 56,
    width: '100%',
    color: "#797070",
    fontSize: 16,
    justifyContent: "center",
  },
  gen2: {
    backgroundColor: "white",
    width:screenWidth/1.5 ,
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
  back: {
    gap: 12,
    marginVertical:17,
    flexDirection: "row",
    fontSize: 12,
    marginTop: 10,
    justifyContent:"flex-start"
  },
  info: {
    color: "white",
    backgroundColor: "#008080",
    textAlign: "center",
    padding: 8,
    borderRadius: 50,
    fontWeight: "bold",
  },
  gen3: {
    width:"90%",
    marginHorizontal:14 , 
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    // width: 372,
  },
  gen4: {
    // height: 140,
    width:"90%",
    marginHorizontal:14 , 
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  gen5: {
    width:"90%",
    marginHorizontal:14 , 
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding:12

  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 5,
    marginLeft: 48,
    marginTop: 10,
    borderWidth: 0.5,
  },
  buttonText: {
    color:"black",
    fontWeight: "bold",
    textAlign: "center",
  },
});