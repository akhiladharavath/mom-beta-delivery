import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

const vehicleOptions = ['Bike', 'Electric bike', "I don't own a vehicle"];

export default function VehicleSelectionScreen() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('Bike');
  const [showStoreOptions, setShowStoreOptions] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Progress Indicator */}
      {/* <View style={styles.progressBar}>
        <View style={[styles.progressStep, styles.activeStep]} />
        <View style={styles.progressStep} />
        <View style={styles.progressStep} />
      </View> */}

      {/* Select Vehicle */}
      {/* <Text style={styles.heading}>Select Vehicle</Text> */}
      {/* <Text style={styles.subheading}>
        <Text style={styles.boldText}>License</Text> &{' '}
        <Text style={styles.boldText}>RC</Text> documents required for Bike
      </Text> */}

      <View style={styles.optionGroup}>
        {vehicleOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedVehicle === option && styles.selectedOption,
            ]}
            onPress={() => setSelectedVehicle(option)}
          >
            <View
              style={[
                styles.radioCircle,
                selectedVehicle === option && styles.radioSelected,
              ]}
            />
            <Text
              style={[
                styles.optionText,
                selectedVehicle === option && styles.optionTextSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Select Store Toggle */}
      {/* <TouchableOpacity
        style={styles.toggleRow}
        onPress={() => setShowStoreOptions(!showStoreOptions)}
      >
        <Text style={styles.heading}>Select Store</Text>
        <Text style={styles.toggleIcon}>{showStoreOptions ? '▲' : '▼'}</Text>
      </TouchableOpacity> */}

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={()=>router.push('/Reg/SelectVechile')}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  progressBar: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 16,
  },
  progressStep: {
    height: 5,
    width: 40,
    backgroundColor: '#e0cfff',
    marginHorizontal: 2,
    borderRadius: 3,
  },
  activeStep: {
    backgroundColor: '#00A99D',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  subheading: {
    color: '#555',
    marginBottom: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  optionGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
  },
  selectedOption: {
    backgroundColor: '#f2e7fb',
    borderColor: '#00A99D',
  },
  radioCircle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#00A99D',
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: '#00A99D',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  optionTextSelected: {
    color: '#9b59b6',
    fontWeight: 'bold',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  toggleIcon: {
    fontSize: 18,
  },
  continueButton: {
    backgroundColor: '#00A99D',
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'center', 
            marginTop:50,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});