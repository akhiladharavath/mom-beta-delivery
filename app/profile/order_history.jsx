import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const OrderHistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          //source={require('../assets/no-orders.png')} image
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>No Orders Yet</Text>
        <Text style={styles.subtitle}>
          You haven't accepted or completed any delivery orders yet.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  //image: {
    //width: 150,
    //height: 150,
    //marginBottom: 30,
    //tintColor: '#ccc', 
 // },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#00a99d',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
