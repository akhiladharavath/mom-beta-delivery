import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const payoutData = [
  {
    id: '1',
    label: 'Order Earnings',
    amount: '₹5,714',
    icon: <Ionicons name="lock-closed" size={24} color="#666" />,
  },
  {
    id: '2',
    label: 'Surge',
    amount: '₹5,714',
    icon: <MaterialCommunityIcons name="flash" size={24} color="#666" />,
  },
  {
    id: '3',
    label: 'Total Deductions',
    amount: '- ₹717',
    icon: <MaterialCommunityIcons name="block-helper" size={24} color="red" />,
    isDeduction: true,
  },
  {
    id: '4',
    label: 'Asset',
    amount: '₹500',
    icon: <Ionicons name="lock-closed" size={24} color="#666" />,
  },
  {
    id: '5',
    label: 'Asset',
    amount: '₹500',
    icon: <MaterialCommunityIcons name="file-document-outline" size={24} color="#666" />,
  },
];

export default function PayoutBreakdown() {
  const renderItem = ({ item }: { item: typeof payoutData[0] }) => (
    <View style={styles.card}>
      {item.icon}
      <Text style={styles.label}>{item.label}</Text>
      <Text style={[styles.amount, item.isDeduction && styles.deduction]}>
        {item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payout Breakdown</Text>
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
    padding: 6,
    borderRadius: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    
  },
  label: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  deduction: {
    color: 'red',
  },
});