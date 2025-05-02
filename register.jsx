import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {router} from 'expo-router';

const MomPharmacyDelivery = () => {
  const handleStepPress = (step) => {
    router.push(step);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/1.1-removebg-preview.png')}
          style={styles.topImage}
          resizeMode="cover"
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Welcome to MOM Pharmacy Delivery!</Text>
          <View style={styles.earningBox}>
            <Text style={styles.earningText}>Start Earning in 10 Min!</Text>
          </View>
        </View>
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>
          "Delivering medicines with MOM Pharmacy has changed my life.now I earn up to 30,000 monthly!"
        </Text>
        <Text style={styles.authorText}>- Rahul, Mumbai</Text>
      </View>
      <Text style={styles.stepTitle}>COMPLETE IN 3 EASY STEPS</Text>

      <TouchableOpacity style={styles.stepCard} onPress={() => handleStepPress('/Reg/Personaldetails')} >
        <View style={styles.stepRow}>
          <MaterialIcons name="person" size={24} color="#666" style={styles.stepIcon} />
          <View>
            <Text style={styles.stepHeading}>Personal Details</Text>
            <Text style={styles.stepSubText}>Phone, City & Referral Code</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.stepCard} onPress={() => handleStepPress('/Reg/vachile')}>
        <View style={styles.stepRow}>
          <MaterialIcons name="work" size={24} color="#666" style={styles.stepIcon} />
          <View>
            <Text style={styles.stepHeading}>Work Details</Text>
            <Text style={styles.stepSubText}>Preferred Area, Shift Timing & Vehicle Info</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.stepCard} onPress={() => handleStepPress('/Reg/adhar')}>
        <View style={styles.stepRow}>
          <MaterialIcons name="assignment" size={24} color="#666" style={styles.stepIcon} />
          <View>
            <Text style={styles.stepHeading} onPress={()=>router.push('./upload')}>Documents</Text>
            <Text style={styles.stepSubText}>Aadhar, PAN, Driving License & Selfie</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpText}>Need Help?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding:20,
    height:850
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  topImage: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00A99D',
  },
  earningBox: {
    backgroundColor: '#00A99D',
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  earningText: {
    color: '#008b8',
    fontWeight: '700',
  },
  quoteContainer: {
    backgroundColor: '#00A99D',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#008b8',

  },
  authorText: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#f0f8ff',
   },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'#000000',
    
  },
  stepCard: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepIcon: {
    marginRight: 10,
  },
  stepHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00A99D',
  },
  stepSubText: {
    fontSize: 14,
    marginTop: 2,
    color: '#555',
  },
  helpButton: {
    marginTop: 15,
  },
  helpText: {
    color: '#7E57C2',
    textDecorationLine: 'underline',
  },
  continueButton: {
    backgroundColor: '#008b8b',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  continueText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MomPharmacyDelivery;