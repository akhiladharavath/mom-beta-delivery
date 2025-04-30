// EarningsScreen.js (React Native only - no Firebase)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Dummy local data simulating earnings
const mockEarningsData = [
  {
    orderId: 'ORD001',
    amount: 45.75,
    distance: 3.5,
    tip: 10,
    date: '2025-04-30T10:20:30Z',
  },
  {
    orderId: 'ORD002',
    amount: 38.5,
    distance: 2.8,
    tip: 5,
    date: '2025-04-30T12:40:10Z',
  },
];

const EarningsScreen = () => {
  const [earnings, setEarnings] = useState([]);
  const [totalToday, setTotalToday] = useState(0);

  useEffect(() => {
    const todayDate = new Date().toISOString().split('T')[0];

    const todayOrders = mockEarningsData.filter((item) => {
      const orderDate = item.date.split('T')[0];
      return orderDate === todayDate;
    });

    const total = todayOrders.reduce((sum, order) => sum + order.amount, 0);

    setEarnings(todayOrders);
    setTotalToday(total.toFixed(2));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Order ID: {item.orderId}</Text>
      <Text style={styles.amountText}>₹{item.amount}</Text>
      <Text style={styles.cardDetail}>Distance: {item.distance} km</Text>
      <Text style={styles.cardDetail}>Tip: ₹{item.tip || 0}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Earnings</Text>
      <Text style={styles.total}>₹{totalToday}</Text>
      <FlatList
        data={earnings}
        keyExtractor={(item) => item.orderId}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf1f8',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 6,
  },
  total: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2e7d32',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#37474f',
    marginBottom: 8,
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 8,
  },
  cardDetail: {
    fontSize: 14,
    color: '#607d8b',
    marginBottom: 4,
  },
});

export default EarningsScreen;
