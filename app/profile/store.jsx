
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Button, Linking, Platform } from 'react-native';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

//{ Utility function to calculate distance}
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Earth radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2); 
};

const staticStores = [
  { id: '1', name: 'MOM PHARMACY-division-1', address: ' Tanda, Ayyappa Society, Chanda Naik Nagar, Madhapur, Hyderabad, Telangana 500081', latitude: 12.9716, longitude: 77.5946 },
  { id: '2', name: 'MOM PHARMACY-division-2', address: 'Plot No: 2-56/9/C/1, Thanda, Khanmet, Hi-Tech City, Ayyappa Society, Chanda Naik Nagar, Madhapur, Telangana 500081', latitude: 12.9352, longitude: 77.6140 },
  { id: '3', name: 'MOM PHARMACY-division-3', address: 'Thanda, Khanmet, Hi-Tech City, Ayyappa Society, Chanda Naik Nagar, Madhapur, Telangana 500081', latitude: 17.4398, longitude:78.3915 },
];

const StoreScreen = ({ navigation }) => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLocationAndDistance = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Location permission denied');
      setStores(staticStores.map(s => ({ ...s, distance: 'N/A' })));
      setLoading(false);
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const userLat = location.coords.latitude;
    const userLon = location.coords.longitude;

    const withDistance = staticStores.map(store => {
      const dist = getDistanceFromLatLonInKm(userLat, userLon, store.latitude, store.longitude);
      return { ...store, distance: `${dist} km` };
    });

    setStores(withDistance);
    setLoading(false);
  };

  useEffect(() => {
    fetchLocationAndDistance();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const handleNavigate = (store) => {
    const url = Platform.select({
      ios: `http://maps.apple.com/?daddr=${store.latitude},${store.longitude}`,
      android: `google.navigation:q=${store.latitude},${store.longitude}`,
    });
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleNavigate(item)}>
            <View style={styles.cardInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.distance}>Distance: {item.distance}</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={28} color="#888" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  cardInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  distance: {
    fontSize: 12,
    color: '#fe7e0f',
    marginTop: 4,
  },
});

export default StoreScreen;
