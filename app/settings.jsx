import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Add your logout logic here (clear tokens, etc.)
    Alert.alert('Logged Out', 'You have been successfully logged out.');
    navigation.replace('Login'); // Navigate back to login screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Other settings options can go here */}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7f7',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#00a99d',
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#00a99d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
