import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Dimensions, Alert } from 'react-native';
import ProfileItem from '../profile/ProfileItems';
import * as ImagePicker from 'expo-image-picker';
import userDeliveryAuth from "@/context/authContext";
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {COLORS} from '@/constants/COLORS'

const options = [
  {
    title: 'Refer & Earn',
    icon: <Image source={require('@/assets/images/Profile/refer.png')} style={{ height: 30, width: 25 }} />,
    Link:"/profile/refer&earn"

  },
  {
    title: 'Wrong Action',
    icon: <Image source={require('@/assets/images/Profile/wrong.png')} style={{ height: 30, width: 25 }} />,
    Link: '/profile/WrongActions/WrongActions',

  },
  {
    title: 'Cash Balance',
    icon: <Ionicons name='cash-outline' size={24}/>,
    Link: '/profile/CashBalance/'

  },
  {
    title: 'Help & Support',
    icon: <Image source={require('@/assets/images/Profile/help.png')} style={{ height: 30, width: 25 }} />,
    Link:'/profile/momhelp'

  },
  {
    title: 'Store',
    icon: <Image source={require('@/assets/images/Profile/store.png')} style={{ height: 30, width: 25 }} />,
    Link:'/profile/mystorelocation'
  },
  // {
  //   title: 'Message Center',
  //   icon: <Image source={require('@/assets/images/Profile/email.png')} style={{ height: 30, width: 25 }} />,
  //   Link:'/profile/'
  // },
  {
    title: 'Terms and Condition',
    icon: <AntDesign name='form' size={24}/>,
    Link:'/profile/terms'

  },
  {
    title: 'Settings',
    icon: <Image source={require('@/assets/images/Profile/settings.png')} style={{ height: 30, width: 25 }} />,
    Link:'/profile/settings'
  },
  {
    title: 'Order History',
    icon: <SimpleLineIcons name="social-dropbox" size={24} color="black" style={{ height: 30, width: 25 }} />,
    Link:'/profile/ordershistory'
  },

];

export default function MyProfile() {

  const [imageUri, setImageUri] = useState(

  );

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert('Permission Denied', 'Camera permission is required to take a photo.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const { logout } = userDeliveryAuth()

  function handleLogout() {
    Alert.alert('Are you sure?', 'Come back soom we will miss you!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => logout() },
    ]);
  }

  const { deliveryBoyDetails } = userDeliveryAuth()


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.box}>
        <View style={styles.header}>

          <View >
            <Image
              source={imageUri ? { uri: imageUri } : require('../../assets/images/Profile/profile.jpg')}
              style={styles.profileImage}
            />
          </View>
          <TouchableOpacity onPress={openCamera}>
            <Image source={require('../../assets/images/Profile/camera.png')} style={styles.cam}></Image>
          </TouchableOpacity>

          <View style={styles.nameContainer}>
            <Text style={styles.name}>{deliveryBoyDetails ? deliveryBoyDetails.name : "Login"}</Text>
            <Text style={styles.phone}>{deliveryBoyDetails ? deliveryBoyDetails.mobileNumber : ""}</Text>
            <View style={styles.detailsBox}>
              <TouchableOpacity style={styles.details} onPress={() => { router.push('/profile/details') }}>
                <Text style={styles.detailstext}>View Details  </Text>
                <AntDesign name="arrowright" size={20} color="#00a99d" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
</View>
        <View style={styles.optionsContainer}>
          {options.map((item, index) => (
            <TouchableOpacity key={index} style={styles.option} onPress={()=>{router.push(item.Link)}}>
              <View style={styles.iconWrapper}>
                {item.icon}
              </View>
              <Text style={styles.optionText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={handleLogout} style={{ flexDirection: "row", width: "90%", justifyContent: "center", margin: 'auto', padding: 10, marginTop: 12, backgroundColor: "#35a79c", marginBottom: 40, borderRadius: 12 }}>
            <Text style={styles.logoutBtnText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 50,
    backgroundColor: '#008080CC',
    // borderBottomEndRadius: 20,
    // borderBottomStartRadius: 20,\
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height:180,
    width:'100%',
  },
  box:{
    padding:10
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    margin: 15,
  },
  logoutBtnText:{
    color:"white"
  },
  cam:
  {
    height: 40,
    width: 40,
    borderRadius: 30,
    textAlign: 'center',
    paddingEnd: 2,
    marginHorizontal: -25,
    marginTop: 50,
    backgroundColor: '#7DF9FF'




  },
  nameContainer: {
    marginTop: 50,
    marginHorizontal: 50
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  phone: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  detailsBox:{
  marginTop:29,
  
    
  },
  details: {
    
    height: 40,
    width: 160,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    
    backgroundColor: "#fff",
    flexDirection:'row',
     alignItems: 'center',
     justifyContent:'center'

  },
  detailstext:{
  fontSize:19,
  fontWeight:500,
  color:'#00a99d'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 30
  },

  profileHeader: {
    backgroundColor: '#35a79c',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    padding: 90,
  },
  iconWrapper: {
    padding: 12,
    paddingHorizontal: 14,
    backgroundColor: COLORS.secondary,
    borderRadius: 40
  },
  profileImageWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  cameraIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 0,
    right: -10,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileItems: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,

  },
  option: {
    flexDirection: 'row',
    padding: 10,
    alignItems: "center"
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    //  marginTop: -20,
    //  marginLeft: 50,
    padding: 15,
  },
  authButtons: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});