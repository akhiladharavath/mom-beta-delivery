import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Pickup() {
  const handleBackPress = () => {
    console.log('Back pressed');
  };
  const handleMaps = () => {
    console.log('Maps pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpContainer}>
            <Image
              source={require('../../assets/images/447.png')}
              style={styles.helpIcon}
            />
            <Text style={styles.iconTitle}>Help</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>Deliver to</Text>

        <View style={styles.pinContainer}>
          <Image
            source={require('../../assets/images/442.png')}
            style={styles.pinIcon}
          />
        </View>

        <View style={styles.routeContainer}>
          <View style={styles.imagesRow}>
            <Image
              source={require('../../assets/images/443.png')}
              style={styles.routeImage}
            />
            <View style={styles.middleColumn}>
              <View style={styles.dottedLine} />
            </View>
            <Image
              source={require('../../assets/images/01.png')}
              style={styles.routeImage}
            />
          </View>

          <View style={styles.labelsRow}>
            <Text style={styles.routeText}>Madhapur Rd</Text>
            <View style={{ flex: 1 }} />
            <Text style={styles.routeText}>Customer</Text>
          </View>
        </View>

        <View style={styles.combinedCard}>
          <View style={styles.pickupTitleRow}>
            <Image
              source={require('../../assets/images/prof.png')}
              style={styles.orderIcon}
            />
            <Text style={styles.pickupTitle}>Deliver to</Text>
          </View>

          <View style={styles.infoRow}>
  <View style={styles.nameIdContainer}>
    <Text style={styles.Name}>Rushikesh Dattaray</Text>
    <Text style={styles.id}>20715072782 7153</Text>
  </View>

  <TouchableOpacity style={styles.mapsbutton} onPress={handleMaps}>
     <Image source={require('../../assets/images/448.png')} style={styles.mapsIcon} />
    <Text style={styles.mapsButtonText}>Maps</Text>
  </TouchableOpacity>
</View>

          <View style={styles.separator} />

          <Text style={styles.pharmacyAddress}>
            201/secondFloor{'\n'}
            Naveena's Enclave {'\n'}
            Naveena's Enclave SBI Officers {'\n'}
            Colony, Siddi Vinayak Nagar,{'\n'}
            Madhapur, Hyderabad,Telangana{'\n'}
            500081, India(2-58/1/171)
          </Text>

          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>
              Reached Customer location
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  backArrow: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  iconTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  pinContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pinIcon: {
    width: width * 0.9,
    height: width * 0.7,
    resizeMode: 'contain',
  },
  routeContainer: {
    marginBottom: 20,
  },
  imagesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  middleColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  dottedLine: {
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    width: '100%',
    marginTop: 2,
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingHorizontal: 2,
    alignItems: 'center',
  },
  routeText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
  combinedCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pickupTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  pickupTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  Name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  id: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 5,
  },
  pharmacyAddress: {
    fontSize: 14,
    color: '#333',
    marginBottom: 25,
  },
  mapsbutton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00897B',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  mapsButtonText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 6,
  },
  bottomButton: {
    backgroundColor: '#00A99D',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
},
mapsIcon: {
    width: 20,
    height: 15,
    marginBottom: 2,
    resizeMode: 'contain',
  },

nameIdContainer: {
  flex: 1,
  marginRight: 10,
},
});