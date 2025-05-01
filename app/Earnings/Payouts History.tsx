import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router'

const PayoutHistoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payouts History</Text>

      <View style={styles.weekContainer}>
        <Text style={styles.weekTitle}>Week 18</Text>
        <Text style={styles.weekLabel}>This Week</Text>
        <Text style={styles.dateRange}>28 Apr - 04 May</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/icon.png')} 
          style={styles.image}
        />
      </View>

      <Text style={styles.infoText}>
        Payout for this week will be credited by next Wednesday
      </Text>

      <TouchableOpacity style={styles.button}
      onPress={()=> router.push('/Weekly Earnings')}
      
      >
        <Text style={styles.buttonText}>Check Earnings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  weekContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  weekTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekLabel: {
    fontSize: 14,
    backgroundColor: '#E3D4F6',
    color: '#6A1B9A',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 4,
  },
  dateRange: {
    fontSize: 14,
    color: '#555',
  },
  imageContainer: {
    marginVertical: 30,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#E91E63',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PayoutHistoryScreen;