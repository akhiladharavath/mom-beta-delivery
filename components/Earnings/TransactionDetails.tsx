import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const payoutData = [
  {
    id: '1',
    label: 'Adarsh',
    text: 'Account holder name',
    image: require('../../assets/images/profl.png'),
  },
  {
    id: '2',
    label: '1234567891911',
    text: 'Bank Account Number',
    image: require('../../assets/images/bank.png'),
  },
  {
    id: '3',
    label: '987654321234',
    text: 'IFSC code',
    image: require('../../assets/images/IFSC.png'),
  },
  {
    id: '4',
    label: '-',
    text: 'Transferred on',
    image: require('../../assets/images/Transferd.png'),
  },
  {
    id: '5',
    label: 'Asset',
    text: 'UTR',
    image: require('../../assets/images/UTRNum.png'),
  },
];

export default function Transaction() {
  const renderItem = ({ item }: { item: typeof payoutData[0] }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={item.image} style={styles.icon} />
        <View style={styles.textWrapper}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.description}>{item.text}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction Details</Text>
      <FlatList
        data={payoutData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  textWrapper: {
    marginLeft: 12,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
});