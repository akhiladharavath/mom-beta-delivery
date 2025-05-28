import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PayoutHistoryScreen = ({ }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payouts History</Text>
        <TouchableOpacity>
          <Icon name="help-circle-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.weekContainer}>
        <View style={styles.weekTextWrapper}>
          <Text style={styles.weekText}>Week xx</Text>
          <View style={styles.thisWeekBadge}>
            <Text style={styles.thisWeekText}>This Week</Text>
          </View>
        </View>
        <Text style={styles.dateText}>day month - day month</Text>
        <Icon name="chevron-down" size={20} color="#555" />
      </View>

      <View style={styles.content}>
        <Image
          source={require('../../assets/images/Earnings/payout.png')} 
        />
        <Text style={styles.infoText}>
          Payout for this week will be{'\n'}credited by next Wednesday
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check Earnings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayoutHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E5F4F3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  weekTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weekText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  thisWeekBadge: {
    backgroundColor: '#CFF4F2',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  thisWeekText: {
    fontSize: 12,
    color: '#087F7F',
  },
  dateText: {
    color: '#555',
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    height:600,
    justifyContent:"center",

  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#087F7F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});