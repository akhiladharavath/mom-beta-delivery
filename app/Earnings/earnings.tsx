import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { router } from 'expo-router';


const earnings = () => {


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      
        <Text style={styles.headerTitle}>Earnings</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>
        This week 20 Dec 2024
        </Text>
        
        <Image source={require('../assets/images/earnings.png')} style={styles.ernimg}/>
        <TouchableOpacity>
          <Text style={styles.registerLink} onPress={()=>router.push('../Weekly Earnings')}>See My Earning History →</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card1}>
        <Text style={styles.cardText}>
          Rate Card
        </Text>
        <Text>
            Earn more with mom pharmacy Incentives
        </Text>
        <Image source={require('../assets/images/icon.png')} style={styles.ernimg}/>
        <TouchableOpacity>
          <Text style={styles.registerLink} onPress={()=>router.push('../Rate Card')}>Check My rate Card →</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card2}>
        <Text style={styles.cardText}>
          Payouts
        </Text>
        
        <Text style={styles.cardText}>Get paid every weekendds</Text>

        <Image source={require('../assets/images/icon.png')} style={styles.ernimg}/>
        <TouchableOpacity>
          <Text style={styles.registerLink} onPress={()=>router.push('../Payouts History')}>Check Payouts History →</Text>
        </TouchableOpacity>
      </View>
    



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#e7f6ed',
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
    height:150
  },
  card1: {
    backgroundColor: '#e7f6ed',
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
    height:150
  },
  card2: {
    backgroundColor: '#e7f6ed',
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
    height:150,
    marginBottom:-30,
  },
  ernimg:
  {
    height:80,
    width:80,
    marginHorizontal:230,
    borderRadius:10

  },
  cardText: {
    fontSize: 14,
    color: '#333',
    marginBottom:'auto',
  },
  registerLink: {
    color: '#00a97f',
    fontWeight: '500',
    
  },



  
});

export default earnings;