import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Benefits = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>Insurance</Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>1000 Coupon</Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>School bills</Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>Skills</Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>Mobile Insurance</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
  },
  headerBox: {
    height: 70,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    
  },
  itemBox: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Benefits;
