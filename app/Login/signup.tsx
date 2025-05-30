import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet,
  Alert,
} from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { router, useRouter } from 'expo-router';
import userDeliveryAuth from '@/context/authContext';
import apiClient from '@/utils/apiClient';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [registerLoading , setRegisterLoading] = useState(false)
  const router = useRouter();

  const {extractToken} = userDeliveryAuth()

  async function signupUser() {
    const AuthToken = await extractToken();

    try {
      const options = {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${AuthToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          vehicleType,
          aadhaar,
          pan,
          drivingLicense
        })
      }
      setRegisterLoading(true)
    const response = await apiClient("delivery/register", options);
    setRegisterLoading(false)
      if (response) {
        await getdeliveryBoyDetails(AuthToken)
        console.log(response);
        router.replace('/')
      } else {
        router.replace("/Login/login");
      }
    } catch (e) {
      console.log("Error in signing up", e)
    }
  }

  const handleSignUp = () => {
    if (!name.trim()) return Alert.alert('Validation Error', 'Name is required');
    if (!vehicleType.trim()) return Alert.alert('Validation Error', 'Vehicle type is required');
    if (!aadhaar.trim()) return Alert.alert('Validation Error', 'Aadhaar number is required');
    if (!pan.trim()) return Alert.alert('Validation Error', 'PAN card number is required');
    if (!drivingLicense.trim()) return Alert.alert('Validation Error', 'Driving license is required');
 signupUser();
    router.push('/Tabs/home');
  };
 


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.header}>Sign Up</Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Vehicle Type</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter vehicle type"
                value={vehicleType}
                onChangeText={setVehicleType}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Aadhaar Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Aadhaar number"
                value={aadhaar}
                onChangeText={setAadhaar}
                keyboardType="numeric"
                maxLength={12}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>PAN Card Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter PAN card number"
                value={pan}
                onChangeText={setPan}
                maxLength={10}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Driving License</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter driving license number"
                value={drivingLicense}
                onChangeText={setDrivingLicense}
              />
            </View>

            <Button
              mode="contained"
              style={styles.signUpButton}
              contentStyle={styles.signUpButtonContent}
              onPress={handleSignUp}
              disabled={registerLoading}
            >
              {registerLoading?<ActivityIndicator />:<Text style={styles.signUpText}>Sign Up</Text>}
            </Button>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#007E71',
    marginBottom: 30,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
    paddingLeft: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#E8F1F0',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
  },
  signUpButton: {
    marginTop: 30,
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#007E71',
  },
  signUpButtonContent: {
    height: 50,
  },
  signUpText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



 

function getdeliveryBoyDetails(AuthToken: any) {
  throw new Error('Function not implemented.');
}

function ExtractParseToken() {
  throw new Error('Function not implemented.');
}