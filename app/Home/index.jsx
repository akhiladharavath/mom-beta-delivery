import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch, SafeAreaView, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [locationName, setLocationName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleSwitch = () => {
    const newState = !isOnline;
    setIsOnline(newState);
    if (newState) {
      setModalVisible(true);
    }
  };

  const hasPermissions = async ()=>{
    const {status} = await ImagePicker.requestCameraPermissionsAsync()
    if(!status) {
      alert("camera permission needed")
      return false 
    }
    return true ;
  }

  const handleCameraOpen = async ()=>{
    const persmission = await hasPermissions()
    if(!persmission) return ;
    
    const result = await ImagePicker.launchCameraAsync({
      preferredCameraType:"black",
      quality:1 ,
      allowsEditing:false
    })

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      console.log('Photo URI:', uri);
      // Handle the image (e.g., display or upload)
    }
    console.log(result)
  }

  const handleCancel = () => {
    setModalVisible(false);
    setIsOnline(false);
  };

  const getUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationName('Permission denied');
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = coords;

      const geoCode = await Location.reverseGeocodeAsync({ latitude, longitude });

      if (geoCode.length > 0) {
        const place = geoCode[0];
        const fullAddress = place.name ?? place.city ?? place.region ?? place.country ?? 'Unknown';
        setLocationName(fullAddress);
      }
    } catch (error) {
      console.error('Error getting location:', error);
      setLocationName('Location Error');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const getCurrentHour = new Date().getHours();
  let greet;
  if (getCurrentHour >= 5 && getCurrentHour < 12) {
    greet = "Good Morning,";
  } else if (getCurrentHour >= 12 && getCurrentHour < 18) {
    greet = "Good Afternoon,";
  } else {
    greet = "Good Evening,";
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 150, padding: 10 }}>
        <View style={styles.headerSection}>
          <View style={styles.leftSection}>
            <TouchableOpacity onPress={getUserLocation}>
              <View style={styles.row}>
                <FontAwesome6 name="location-dot" size={24} color="white" />
                <Text style={styles.locationText} numberOfLines={1} ellipsizeMode="tail">
                  {locationName || "Fetching Location..."}
                </Text>
                <Entypo style={{ marginTop: 2, marginLeft: 5 }} name="chevron-down" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle-outline" size={20} color="#00A99D" />
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.topSection}>
          <Text style={styles.greetText}>{greet}</Text>
          <Text style={styles.name}>Srinivas</Text>
          <View style={styles.personal}>
            <Text style={styles.personalText}>Stay safe on the road, and have a great day!</Text>
          </View>

          <View style={styles.onlineSwitchContainer}>
            <Text style={styles.onlineInfoText}>
              Go online on time and earn bonuses!
            </Text>
            <View style={styles.statusSwitch}>
              <Text style={[styles.statusText, { color: isOnline ? '#00A99D' : 'gray' }]}>
                {isOnline ? 'Online' : 'Offline'}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#00A99D" }}
                thumbColor="white"
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isOnline}
              />
            </View>
          </View>
        </View>

        <View style={styles.ShiftCard}>
          <Image source={require('../../assets/images/calendar.png')} style={styles.calendarImage} resizeMode="contain" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.shiftTitle}>Upcoming Shift</Text>
            <Text style={styles.shiftTime}>9:00 AM - 01:00 PM</Text>
            <TouchableOpacity>
              <Text style={styles.shiftButton}>Book Shift Now →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.banner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>
              Get Bonuses for Timely Deliveries & Customer Ratings!
            </Text>
            <TouchableOpacity>
              <Text style={styles.bannerButton}>Book Shift & Start Earning →</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/images/scooter.png')} style={styles.bannerImage} resizeMode="contain" />
        </View>

        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>My Progress - This Week</Text>
        </View>

        <View style={styles.earningsOrdersContainer}>
          <View style={styles.earningsCard}>
            <Text style={styles.earningsTitle}>Earnings</Text>
            <Text style={styles.earningsValue}>₹5,200</Text>
          </View>
          <View style={styles.ordersCard}>
            <Text style={styles.earningsTitle}>Orders</Text>
            <Text style={styles.earningsValue}>24</Text>
          </View>
        </View>

        <View style={styles.loginHoursCard}>
          <Text style={styles.loginTitle}>Login Hours</Text>
          <Text style={styles.loginValue}>18h 30m</Text>
          <Text style={styles.loginCaption}>Take a break and have a chai ☕</Text>
        </View>
      </ScrollView>

      {/* Camera Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Use your camera to go online!</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleCameraOpen}>
                <Text style={styles.modalButtonText}>Open Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={handleCancel}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00A99D",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 18,
    marginBottom: 10,
    marginHorizontal: 0,
    top: 0,
    right: 1
  },
  leftSection: {
    flex: 1,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "white",
    fontSize: 20,
    marginLeft: 3,
    textAlign: "left",
    maxWidth: 180,
  },
  helpButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  helpText: {
    marginLeft: 5,
    color: "#00A99D",
    fontWeight: "bold",
    fontSize: 16,
  },
  topSection: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  greetText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#00A99D',
    marginBottom: 10,
  },
  personal: {
    marginTop: 13,
  },
  personalText: {
    fontSize: 18,
    color: '#555',
    top: -15
  },
  onlineSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  onlineInfoText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    fontWeight: '600',
    marginRight: 10,
    top: -10
  },
  statusSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    top: -10
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  ShiftCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00A99D',
    padding: 15,
    borderRadius: 18,
    marginBottom: 10,
  },
  calendarImage: {
    width: 45,
    height: 45,
  },
  shiftTitle: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  shiftTime: {
    fontSize: 16,
    color: 'black',
    marginTop: 4,
  },
  shiftButton: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#00A99D',
    padding: 15,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  bannerButton: {
    marginTop: 9,
    color: 'white',
    fontWeight: 'bold',
  },
  bannerImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  sectionTitle: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  earningsOrdersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  earningsCard: {
    backgroundColor: '#00A99D',
    padding: 20,
    borderRadius: 12,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  ordersCard: {
    backgroundColor: '#00A99D',
    padding: 20,
    borderRadius: 12,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  earningsTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  earningsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  loginHoursCard: {
    backgroundColor: '#00A99D',
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  loginValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  loginCaption: {
    marginTop: 5,
    color: 'white',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#00A99D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#767577',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});