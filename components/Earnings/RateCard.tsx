import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';


const { width } = Dimensions.get('window');

const RateCard = () => (
  
    <LinearGradient
      colors={['#979797', '#313131']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Rate Card</Text>
          <Image
            source={require('../../assets/images/Earnings/coin.png')}
            style={styles.coinImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Earn more with mom pharma incentives</Text>
        </View>
      </View>

      <View style={{ marginTop: 50 }}>
        <Svg height="2" width={width * 0.95}>
          <Line x1="0" y1="1" x2={width * 0.95} y2="1" stroke="white" strokeWidth="2" />
        </Svg>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.register}>Check My Rate Card {'>'}</Text>
      </View>
    </LinearGradient>
  
);

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    height: 162,
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 10,
    right: 10,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: '#fff',
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 13,
    color: '#fff',
    marginTop: 5,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  register: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  coinImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
  },
});

export default RateCard;
