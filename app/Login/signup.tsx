import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState();
  const [reg, setReg]= useState([]);
  

  const navigation = useNavigation();

  const handleCreateAccount = async(regId) => {
   
      const details = {
        name:name,
        age:age,
        phoneNumber:mobileNumber,
        email:email
        
      }
      try {
        const response = await fetch(`http://localhost:3000/delivery/add-delivery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        });
  
        const result = await response.json();
        console.log(result)
        router.push({
          pathname:"../home",
          params:regId
        })
         if (result.success) {
                        Alert.alert('Success', 'successfully registered');
                        setReg(prevreg => prevreg.filter(reg => reg._id !== regId));
                    } else {
                        Alert.alert('Error', result.message || 'Failed to update order status');
                    }
   
    }catch(error){console.log(error)}

  };

  


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ width: '100%' }}>
        <Text style={styles.pagetext}>Register Now!</Text>
      </View>

      <Image
        source={require('../../assets/images/momlogo.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.welcomeText}>Welcome to MOM Pharmacy</Text>
      </View>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="age"
        value={age}
        onChangeText={setAge}
        style={styles.input}
        keyboardType="phone-pad"
      />


     

      <TouchableOpacity onPress={()=>{handleCreateAccount(reg._id)}} style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#ffffff',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00bfa6',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 15,
  },
  backButtonText: {
    color: '#00bfa6',
    fontSize: 16,
  },
  pagetext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});