import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const wp = (percentage: string) => (width * parseFloat(percentage)) / 100;
const hp = (percentage: string) => (height * parseFloat(percentage)) / 100;

const initialAddresses = [
  {
    id: '1',
    title: 'Store 1',
    details: 'Akshya Nagar 1st Block 1st Cross, Ramamurthy nagar, Bangalore–560016',
  },
  {
    id: '2',
    title: 'Store 2',
    details: 'Sahithya, 18-63, beside HP petrol bunk, Yadav Nagar, Malkajgiri, Secunderabad',
  },
  {
    id: '3',
    title: 'Store 3',
    details: 'Rohith Raj, 14-52, beside HP petrol bunk, Yadav Nagar, Malkajgiri, Secunderabad',
  },
  {
    id: '4',
    title: 'Store 4',
    details: 'Sahithya, 18-63, beside HP petrol bunk, Yadav Nagar, Malkajgiri, Secunderabad',
  },
  {
    id: '5',
    title: 'Store 5',
    details: 'Akshya Nagar 1st Block 1st Cross, Ramamurthy nagar, Bangalore–560016',
  },
];

export default function AddressBook() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [primaryId, setPrimaryId] = useState<string>(initialAddresses[0].id);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [isPrimaryModalVisible, setIsPrimaryModalVisible] = useState(false);

  const handleSetPrimary = () => {
    if (selectedAddress) {
      const updatedList = addresses.filter(addr => addr.id !== selectedAddress.id);
      setAddresses([selectedAddress, ...updatedList]);
      setPrimaryId(selectedAddress.id);
    }
    setIsPrimaryModalVisible(false);
  };

  const primaryAddress = addresses.find(addr => addr.id === primaryId);
  const otherAddresses = addresses.filter(addr => addr.id !== primaryId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: hp('10%') }}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={30} color="#000" />
        <Text style={styles.headerText}>My Store Location</Text>
      </View>

      <Text style={styles.subHeader}>My Current Store Location</Text>
      {primaryAddress && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: '#e0f2f1',
              borderColor: '#00a99d',
              borderWidth: 1,
            },
          ]}
        >
          <View style={styles.radioRow}>
         
            <Text style={styles.cardTitle}>{primaryAddress.title}</Text>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color="#444"
              style={{ marginLeft: 'auto' }}
              onPress={() => {
                setSelectedAddress(primaryAddress);
                setIsPrimaryModalVisible(true);
              }}
            />
          </View>
          <Text style={styles.cardText}>{primaryAddress.details}</Text>
        </View>
      )}

      {otherAddresses.length > 0 && (
        <>
          <Text style={[styles.subHeader, { marginTop: 30 }]}>
            Other Stores in Your Location
          </Text>
          {otherAddresses.map(item => (
            <View key={item.id} style={styles.card}>
              <View style={styles.radioRow}>
              
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Entypo
                  name="dots-three-vertical"
                  size={20}
                  color="#444"
                  style={{ marginLeft: 'auto' }}
                  onPress={() => {
                    setSelectedAddress(item);
                    setIsPrimaryModalVisible(true);
                  }}
                />
              </View>
              <Text style={styles.cardText}>{item.details}</Text>
            </View>
          ))}
        </>
      )}

      <Modal visible={isPrimaryModalVisible} transparent animationType="fade" onRequestClose={() => setIsPrimaryModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Set as primary address</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={handleSetPrimary}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.button} onPress={() => setIsPrimaryModalVisible(false)}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
    padding: 8
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 10,
    color: '#000',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'column',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginLeft: -2,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 800,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: wp('5%'),
    alignItems: 'center',
  },
  modalText: {
    fontSize: 10,
    fontWeight: '600',
    marginBottom: -100,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00796b',
  },
  divider: {
    width: 1,
    backgroundColor: '#ccc',
  },
});