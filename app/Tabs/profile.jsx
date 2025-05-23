import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import ProfileItem from '../profile/ProfileItems';
import * as ImagePicker from 'expo-image-picker';

const options = [
  { 
    title: 'Ways to Earn', 
    icon: <Image source={require('@/assets/images/Profile/money-flow.png')} style={{ height: 30, width: 30}} />,
 
  },
  { 
    title: 'Refer & Earn',
    icon: <Image source={require('@/assets/images/Profile/refer.png')} style={{ height: 30, width: 25}} />,

   },
  { 
    title: 'Wrong Action', 
    icon: <Image source={require('@/assets/images/Profile/wrong.png')} style={{ height: 30, width: 25}} />,
 
  },
  {
     title: 'Partner Club', 
     icon: <Image source={require('@/assets/images/Profile/membership.png')} style={{ height: 30, width: 25}} />,

  },
  { 
    title: 'Help & Support',
    icon: <Image source={require('@/assets/images/Profile/help.png')} style={{ height: 30, width: 25}} />,

  },
  {
     title: 'Store', 
     icon: <Image source={require('@/assets/images/Profile/store.png')} style={{ height: 30, width: 25}} />,

  },
  {
     title: 'Reusable Bags', 
     icon: <Image source={require('@/assets/images/Profile/bag.png')} style={{ height: 30, width: 25}} />,

 },
  { 
    title: 'Message Center', 
    icon: <Image source={require('@/assets/images/Profile/email.png')} style={{ height: 30, width: 25}} />,
 
  },
  {
     title: 'Settings', 
     icon: <Image source={require('@/assets/images/Profile/settings.png')} style={{ height: 30, width: 25}} />,
 
  },
  { 
    title: 'Logout',
    icon: <Image source={require('@/assets/images/Profile/logout.png')} style={{ height: 30, width: 25}} />,

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

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.header}>

       <View >
      <Image
       source={imageUri ? {uri: imageUri } : require('../../assets/images/Profile/profile.jpg')}
       style={styles.profileImage}
      />
    </View>
    <TouchableOpacity  onPress={openCamera}>
    <Image source={require('../../assets/images/Profile/camera.png')} style={styles.cam}></Image>
    </TouchableOpacity>

    <View style={styles.nameContainer}>
     <Text style={styles.name}>Adarsh</Text>
     <Text style={styles.phone}>7671812449</Text>
   </View>
    </View>
       
       <View style={styles.optionsContainer}>
        {options.map((item, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <View style={styles.iconWrapper}>
            {item.icon}
            </View>
           <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
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
    borderRadius:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    margin: 15,
  },
  cam:
  {
    height:40,
    width:40,
    borderRadius:30,
    textAlign:'center',
    paddingEnd:2,
    marginHorizontal:-25,
    marginTop:50,
    backgroundColor:'#7DF9FF'
    



  },
  nameContainer: {
    marginTop: 20,
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
  container: { 
    flex: 1,
     backgroundColor: '#fff'
   },

  profileHeader: {
    backgroundColor: '#35a79c',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    padding: 90,
  },
  iconWrapper:{
    padding:12 ,
    paddingHorizontal:14, 
    backgroundColor:"#D9D9D9",
    borderRadius:40
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
    alignItems:"center"
   },
optionText: { 
    fontSize: 16,
     fontWeight: '500', 
     color: '#333' ,
    //  marginTop: -20,
    //  marginLeft: 50,
     padding:15,
  },
  authButtons: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});