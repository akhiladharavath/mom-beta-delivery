import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const RateCard = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Base Rate Card</Text>

      <View style={styles.card1}>
        <Text style={styles.title}>Base Pay</Text>
        <RateItem label="Forward Base Pay" value="₹1 per 0.1 km" />
        <RateItem label="Reverse Base Pay" value="₹0.5 per 0.1 km" />
        <RateItem label="Minimum Base Pay" value="₹15" />
        <RateItem label="Batched Order Pay" value="₹10 extra per order" />
        <RateItem label="RTO Order Deduction" value="- ₹5" isNegative />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Rain Surge</Text>
        <Text style={styles.value}>₹10 per order</Text>
      </View>
    </ScrollView>
  );
};

const RateItem = ({
  label,
  value,
  isNegative = false,
}: {
  label: string;
  value: string;
  isNegative?: boolean;
}) => (
  <View style={styles.item}>
    <Text style={styles.label}>
      {label}{' '}
      <MaterialIcons name="info-outline" size={14} color="#888" />
    </Text>
    <Text style={[styles.value, isNegative && styles.negative]}>
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card1: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#9FE2BF',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#9FE2BF',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
  },
  negative: {
    color: 'red',
  },
});

export default RateCard;