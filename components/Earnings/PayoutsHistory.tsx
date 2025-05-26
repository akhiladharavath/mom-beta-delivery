import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Line } from 'react-native-svg';
import { router } from 'expo-router';
import PayoutHistoryScreen from '@/app/Earnings/payouthistory';
const { width } = Dimensions.get('window');

const PayoutHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Payouts</Text>
        <Image
          source={require('../../assets/images/Earnings/payout.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.subtitle}>Get paid every weekend</Text>

      <Svg height="2" width={width * 0.9} style={styles.divider}>
        <Line x1="0" y1="1" x2={width * 0.9} y2="1" stroke="grey" strokeWidth="2" />
      </Svg>
      <TouchableOpacity onPress={()=>router.push('/Earnings/payouthistory')}>
      <Text style={styles.historytxt}>Check Payouts History {'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PayoutHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: '#00A99D',
    borderWidth: 1,
    padding: 16,
    alignSelf: 'center',
    width: width * 0.95,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
    marginTop: 8,
  },
  historytxt: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#00A99D',
    marginTop: 12,
  },
  image: {
    width: 50,
    height: 50,
  },
  divider: {
    marginTop: 16,
    alignSelf: 'center',
  },
});
