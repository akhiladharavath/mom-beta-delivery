import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WeeklyEarningsScreen = () => {
  const handleHelp = () => {
    console.log('Help pressed');
  };

  const handleWeekDropdown = () => {
    console.log('Week dropdown pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Weekly Earnings</Text>
        <TouchableOpacity onPress={handleHelp}>
          <Text style={styles.helpText}>? Help</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.weekCard} onPress={handleWeekDropdown}>
        <Text style={styles.weekLabel}>Week 18</Text>
        <Text style={styles.thisWeek}>This Week</Text>
        <Text style={styles.dateRange}>28 Apr - 04 May</Text>
      </TouchableOpacity>

      <View style={styles.noEarningsContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios/50/wallet--v1.png' }}
          style={styles.walletImage}
        />
        <Text style={styles.noEarningsTitle}>No Earnings as of now</Text>
        <Text style={styles.noEarningsDesc}>
          Once you start delivering orders, your earnings will show up here.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F91',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  helpText: {
    color: '#888',
    fontSize: 14,
  },
  weekCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  weekLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  thisWeek: {
    backgroundColor: '#d6c1f9',
    color: '#6a1b9a',
    paddingHorizontal: 8,
    borderRadius: 4,
    marginTop: 4,
    fontSize: 12,
  },
  dateRange: {
    marginTop: 4,
    color: '#666',
  },
  noEarningsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  noEarningsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  noEarningsDesc: {
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 30,
  },
});

export default WeeklyEarningsScreen;