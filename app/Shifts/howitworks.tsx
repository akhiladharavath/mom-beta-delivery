import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Data = [
  {
    step: "1. Login to Your Delivery Partner App",
    description: "Open the app and log in to your account to get started. You’ll be able to see available delivery slots for your preferred shifts."
  },
  {
    step: "2. View Available Shifts",
    description: "Browse through available shift slots in your area. You can see the time frames, delivery zones, and expected workload for each shift."
  },
  {
    step: "3. Book Your Slot",
    description: "Select a shift that fits your schedule and tap to book. You can book shifts in advance or choose from available slots on the same day, depending on your preference."
  },
  {
    step: "4. Start Your Shift",
    description: "Arrive at the start time of your shift. Once on shift, you’ll be automatically notified of available deliveries, and you can start accepting orders as they come in."
  },
  {
    step: "5. Cancel Shift",
    description: "If your plans change, you can cancel or modify your booked shift with notice. If you’re unable to complete a shift, make sure to notify the system in advance to help with rescheduling."
  }
];

const HowItWorks = () => {
  return (

    <ScrollView style={styles.container}>
      <Text style={styles.title}>I will Guide You Through the Process</Text>

      {Data.map((item, index) => (
        <View style={styles.card}>
        <View key={index} style={styles.data}>
          <Text style={styles.stepTitle}>{item.step}</Text>
          <Text>{item.description}</Text>
        </View>
        </View>
        

      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98e3df',
    paddingTop: 20,

  },
  card:{
    borderRadius:100,
    height:10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  data: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#e6f0ef',
    borderRadius: 20,
    
  },
  text: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});

export default HowItWorks;