
import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
//import MangeProfiles from './Profile/ManageProfiles';//
import ProfileItem from '../profile/ProfileItems';
import { Entypo, Feather, FontAwesome, FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
//import { AuthContext } from '@/context/authContext';

const profileItems = [
    {
        name: 'Way to Earn',
        mainIcon: <FontAwesome6 name="money-bill-trend-up" size={24} color="#00a99d" />,
        icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
        link: './earn',
      },
  {
    name: 'Refer and Earn',
    mainIcon: <FontAwesome6 name="gifts" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './refer',
  },
  {
    name: 'Mom Benefits',
    mainIcon: <Ionicons name="star-outline" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './benefits',
  },
  
  {
    
      name: 'Help And Support',
      mainIcon: <MaterialIcons name="support-agent" size={24} color="#00a99d" />,
      icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
      link: './Help',
  },
  {
    name: 'Store',
    mainIcon: <Entypo name="shop" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './store',
  },
  {
    name: 'Slot History',
    mainIcon: <FontAwesome name="calendar-check-o" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './slot',
  },
  {
    name: 'Order History',
    mainIcon: <Feather name="shopping-bag" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './order_history',
  },
  {
    name: 'Reusable Bag',
    mainIcon: <Ionicons name="bag" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './reusablebags',
  },
  {
    name: 'Message Center',
    mainIcon: <MaterialIcons name="message" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './messageCenter',
  },
  {
    name: 'Document',
    mainIcon: <Ionicons name="document-text-outline" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './document',
  },
  {
    name: 'Terms And Conditions',
    mainIcon:<MaterialCommunityIcons name="file-document-multiple" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './terms',

},
  {
    name: 'Settings',
    mainIcon: <Ionicons name="settings-outline" size={24} color="#00a99d" />,
    icon: <Ionicons name="arrow-forward" size={20} color="#ccc" />,
    link: './settings',
  },
 

];

const myProfile = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Image source={require('../../assets/images/profile.avif')} style={styles.profileImage} />
          <Text style={styles.name}></Text>
          <Text style={styles.phone}></Text>
        </View>

        {/* <MangeProfiles /> */}

        <FlatList
          data={profileItems}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ProfileItem
              title={item.name}
              mainIcon={item.mainIcon}
              icon={item.icon}
              link={item.link}
            />
          )}
          scrollEnabled={false}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#00a99d',
            padding: 10,
            borderRadius: 5,
            margin: 20,
            alignItems: 'center',
          }}
          onPress={() => logout()}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default myProfile;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#00a99d',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  phone: {
    fontSize: 15,
    color: 'white',
  },
});