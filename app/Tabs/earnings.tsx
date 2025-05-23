import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const EarningsScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.dateText}>This Week 20 Dec 2024</Text>
        <Text style={styles.amount}>₹0</Text>
        <Text style={styles.subAmount}>Last Week ₹0</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>See Earnings History </Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.cardDark}>
        <View style={styles.rowSpaceBetween}>
          <Text style={styles.title}>Rate Card</Text>
          
        </View>
        <Text style={styles.subtitle}>Earn more with mompharmacy Incentives</Text>
        <TouchableOpacity>
          <Text style={styles.linkTextLight}>Check My Rate Card </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardWhite}>
        <Text style={styles.title}>Payouts</Text>
        <Text style={styles.subtitleLight}>Get paid every Weekends</Text>
        <TouchableOpacity>
          <Text style={styles.linkTextColored}>Check Payouts History </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EarningsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  card: {
    backgroundColor: '#007D7B',
    borderRadius: 15,
    padding: 18,
    marginBottom: 12,
    position: 'relative',
  },
  cardDark: {
    backgroundColor: '#333',
    borderRadius: 15,
    padding: 18,
    marginBottom: 12,
  },
  cardWhite: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 18,
    borderWidth: 1,
    borderColor: '#00A99D',
    marginBottom: 12,
    position: 'relative',
  },
  dateText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 5,
  },
  subAmount: {
    color: 'white',
    fontSize: 16,
  },
  linkText: {
    color: 'white',
    marginTop: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  linkTextLight: {
    color: '#ccc',
    marginTop: 12,
    fontSize: 15,
  },
  linkTextColored: {
    color: '#00A99D',
    marginTop: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  subtitleLight: {
    color: '#777',
    fontSize: 14,
    marginTop: 4,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rupeeIcon: {
    width: 24,
    height: 24,
    tintColor: 'gold',
  },
  iconTopRight: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 40,
    height: 40,
  },
  iconRight: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 40,
    height: 40,
  },
});