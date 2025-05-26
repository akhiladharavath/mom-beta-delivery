import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const earningsData = [
  { date: 'Sun, 11 May', orders: 77, amount: 3977.7 },
  { date: 'Sat, 1 May', orders: 7, amount: 9977.7 },
  { date: 'Sun, 11 May', orders: 77, amount: 3675.7 },
  { date: 'Sun, 11 May', orders: 77, amount: 3977.7 },
  { date: 'Sun, 11 May', orders: 77, amount: 3977.7 },
];

const WeekEarnings = () => {
  const handleHelp = () => console.log('Help pressed');
  const handleWeekDropdown = () => console.log('Week dropdown pressed');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <View style={ styles.head}> */}
        <Text style={styles.headerText}>Week 19</Text>
        <Text style={styles.dateRange}>05 May – 11 May</Text>
        </View>
        {/* <TouchableOpacity onPress={handleWeekDropdown}>
          <Text style={styles.dropdownIcon}>▼</Text>
        </TouchableOpacity> */}
      {/* </View> */}

      <View style={styles.earningsCard}>
        <Text style={styles.earnedText}>You’ve earned</Text>
        <Text style={styles.amount}>₹11,641</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Orders Completed</Text>
            <Text style={styles.value}>260</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Daily Average</Text>
            <Text style={styles.value}>₹1,777</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/Earnings/earning.png')}
          style={styles.earnImage}
        />
      </View>

      <Text style={styles.earningsTitle}>Earnings</Text>

      <FlatList
        data={earningsData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.earningItem}>
            <View>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.orders}>{item.orders} Orders</Text>
            </View>
            <Text style={styles.amountText}>₹{item.amount.toFixed(1)}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default WeekEarnings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E8E6',
    padding: 16,
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    // flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },

  dateRange: {
    fontSize: 14,
    color: '#666',
  },
  dropdownIcon: {
    fontSize: 18,
    color: '#666',
  },
  earningsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
    position: 'relative',
  },
  earnedText: {
    fontSize: 16,
    color: '#565656',
  },
  amount: {
    color: '#BF2424',
    fontSize: 48,
    marginVertical: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  summaryItem: {
    alignItems: 'center',

  },
  label: {
    fontSize: 14,
    color: '#565656',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  earnImage: {
    width: 79,
    height: 79,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  earningsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    color: '#565656',
  },
  earningItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#565656',
  },
  orders: {
    // color: '#666',
    marginTop: 4,
    color:'#4E4E4E',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#424242',
  },
});