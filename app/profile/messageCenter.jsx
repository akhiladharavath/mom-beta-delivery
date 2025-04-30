import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ComingSoonMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Message Center</Text>
      <Text style={styles.comingSoonText}>
        🚀 This feature will be coming soon — our master brains are working on it.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00a99d',
  },
  comingSoonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00a99d',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ComingSoonMessage;
