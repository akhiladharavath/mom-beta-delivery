import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import RateCard from './Ratecardscreen';
const RateCardScreen = () => {
  const handleCheckNow = () => {
    console.log('Check Now pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rate Card</Text>
        <Text style={styles.subtitle}>Earn more with Zepto Incentives</Text>
        <View style={styles.iconContainer}>sss
          <Text style={styles.icon}>₹</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.card}  onPress={()=>router.push('./Ratecardscreen')}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Base Rate Card</Text>
          <Text style={styles.cardSubtitle}>Check your base rate card</Text>
        </View>
        <Text style={styles.checkNow}>Check Now ›</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    padding: 16,
  },
  header: {
    backgroundColor: 'pink',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ddd',
    marginTop: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#ff9800',
    borderRadius: 25,
    padding: 10,
  },
  icon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#9FE2BF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
   
    
  },
  cardContent: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#777',
  },
  checkNow: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
});

export default RateCardScreen;