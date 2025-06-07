import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const PayoutHistoryScreen = ({ }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.container1}>
        <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Icon name="arrow-back" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Payouts History</Text>
            <TouchableOpacity onPress={() => router.push('/profile/momhelp')}>
              <Icon name="help-circle-outline" size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => { router.push('/Earnings/weekearnings') }}>
            <View style={styles.weekContainer}>
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.weekTextWrapper}>
                  <Text style={styles.weekText}>Week 01</Text>
                  <View style={styles.thisWeekBadge}>
                    <Text style={styles.thisWeekText}>This Week</Text>
                  </View>
                </View>

                <View style={styles.weekContent}>
                  <Text style={styles.dateText}>day month - day month</Text>
                </View>
              </View>
              {/* <TouchableOpacity onPress={() => { router.push('./payoutweekly') }}> */}
              <Icon name="chevron-down" size={20} color="#555" />
            </View>
          </TouchableOpacity>

          <View style={styles.content}>
            <Image style={{ width: 100, height: 100, marginBottom: 20 }}
              source={require('../../assets/images/Earnings/payout.png')}
            />
            <Text style={styles.infoText}>
              Your weekly earnings will be processed and{'\n'}transferred to your account by next Wednesday
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => { router.push('./weekearnings') }}>
              <Text style={styles.buttonText}>Check Earnings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView >
    </>
  );
};

export default PayoutHistoryScreen;

const styles = StyleSheet.create({
  container1: { flex: 1, backgroundColor: '#E5F4F3' },
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
  weekContent: {
    marginTop: 4,
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
    borderRadius: 18,
    height: 600,
    justifyContent: "center",

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
    backgroundColor: '#00A99D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});