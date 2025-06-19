import { useOrders } from '@/context/orderContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  
  Linking,
} from 'react-native';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');

export default function Pickup() {


  const { acceptedOrderDetails } = useOrders()
  const [currentLocation, setCurrentLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  const customerLocation = {
    latitude: acceptedOrderDetails?.address_id.currentLocation?.latitude,
    longitude: acceptedOrderDetails?.address_id.currentLocation?.longitude,
  };



  const handleMaps = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission Denied', 'Location permission is required to open maps.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const originCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setCurrentLocation(originCoords);

      await fetchDistance(originCoords);

      const url = `https://www.google.com/maps/dir/?api=1&origin=${originCoords.latitude},${originCoords.longitude}&destination=${customerLocation.latitude},${customerLocation.longitude}&travelmode=driving`;
      Linking.openURL(url);
    } catch (error) {
      console.error('Error opening maps:', error);
      console.log('Error', 'Unable to open maps.');
    }
  };

  const fetchDistance = async (originCoords) => {
    try {
      if (!originCoords || !originCoords.latitude || !originCoords.longitude) {
        console.error('Invalid origin coordinates:', originCoords);
        console.log('Error', 'Invalid origin coordinates.');
        return;
      }

      const apiKey = '';
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${originCoords.latitude},${originCoords.longitude}&destination=${customerLocation.latitude},${customerLocation.longitude}&key=${apiKey}`;

      const response = await fetch(url);
      const res = await response.json();

      if (res.status !== 'OK' || !res.routes?.length || !res.routes[0].legs?.length) {
        console.error('No routes found', res);
        console.log('Error', res.error_message || 'No valid routes found. Check your API key or coordinates.');
        return;
      }

      const distanceText = res.routes[0].legs[0].distance.text;
      setDistance(distanceText);
      console.log('Distance:', distanceText);
    } catch (error) {
      console.error('Error fetching distance:', error);
      console.log('Error', 'Could not calculate distance.');
    }
  };


  return (
    <View style={styles.viewcontainer}>
      <Text style={styles.headerTitle}>Customer Location</Text>
      <Text style={styles.tag}>#Earn more stars by on-time delivery</Text>
      <View style={styles.pinContainer}>
        <Image
          source={require('../../assets/images/Orders/holdingmed1.jpeg')}
          style={styles.pinIcon}
        />
      </View>

      <View style={styles.routeContainer}>
        <View style={styles.imagesRow}>
          <Image source={require('../../assets/images/scooty.jpeg')} style={styles.routeImage} />
          <View style={styles.middleColumn}>
            <Text style={styles.reachTime}>Reaching in 10 minutes</Text>
            <View style={styles.dottedLine} />
          </View>
          <Image source={require('../../assets/images/deliverhome.jpeg')} style={styles.routeImage} />
        </View>

        <View style={styles.labelsRow}>
          <Text style={styles.routeText}>Heal Porter</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.routeText}>Madhapur</Text>
        </View>
      </View>

      <View style={styles.combinedCard}>
        <View style={styles.pickupTitleRow}>
          <Image
            source={require('../../assets/images/prof1.jpeg')}
            style={styles.orderIcon}
          />
          <Text style={styles.pickupTitle}>Deliver to</Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.nameIdContainer}>
            <Text style={styles.Name}>{acceptedOrderDetails?.user_id?.name}</Text>
            <Text style={styles.id}>{acceptedOrderDetails?.user_id?.mobileNo}</Text>
          </View>

          <TouchableOpacity style={styles.mapsbutton} onPress={handleMaps}>
            <Image source={require('../../assets/images/Orders/location1.png')} style={styles.mapsIcon} />
            <Text style={styles.mapsButtonText}>Maps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <Text style={styles.pharmacyAddress}>

          {acceptedOrderDetails?.address_id.street},
          {acceptedOrderDetails?.address_id.city},
          {acceptedOrderDetails?.address_id.state},
          {acceptedOrderDetails?.address_id.pincode}
        </Text>

        <TouchableOpacity style={styles.bottomButton} onPress={() => { router.push('./order') }}>
          <Text style={styles.bottomButtonText}>
            Reached Customer location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  viewcontainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 30,
  },
   reachTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00A99D',
    marginBottom: 4,
    textAlign: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    textAlign: 'center',
    color: "grey",
    bottom: 10,
  },
  backButton: {
    padding: 5,
  },
  backArrow: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  iconTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: "#00A99D"
  },
  pinContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pinIcon: {
    width: 300,
    height: 225,
    // resizeMode: 'contain',
    borderRadius: 20,
  },
  routeContainer: {
    marginBottom: 30,
  },
  imagesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  middleColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  dottedLine: {
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    width: '100%',
    marginTop: 2,
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingHorizontal: 2,
  },
  routeText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
   combinedCard: {
    backgroundColor: '#D5ECE9',
    borderRadius: 10,
    padding: 5,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pickupTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  pickupTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  Name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  id: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  pharmacyAddress: {
    fontSize: 14,
    color: '#333',
    marginBottom: 25,
  },
  mapsbutton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A99D',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  mapsButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: 'white',
  },
  bottomButton: {
    backgroundColor: '#00A99D',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 0,
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  mapsIcon: {
    width: 20,
    height: 20,
    marginBottom: 2,
    resizeMode: 'contain',
  },

  nameIdContainer: {
    flex: 1,
    marginRight: 10,
  },
});