import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router'; // ✅ Correct import for navigation

const cities = [
  'Hyderabad',
  'Telangana',
  'Hitech City',
  'Madhapur',
  'Andra pradesh',
  'Uppal',
  'Yamnampet',
  'Ghatkesar',
  'Manikonda',
];

const SelectCityScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const renderCity = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.cityItem}
      onPress={() => setSelectedCity(item)}
    >
      <Text style={styles.cityText}>{item}</Text>
      <View
        style={[styles.radio, selectedCity === item && styles.radioSelected]}
      />
    </TouchableOpacity>
  );

  const handleContinue = () => {
    if (selectedCity) {
      // Optionally pass selectedCity via route params or global state
      router.push('/Reg/vachile'); // ✅ Navigate to vehicle selection
    } else {
      alert('Please select a city first.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select City</Text>
      <Text style={styles.subtitle}>
        Please select the city where you want to work
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search your city"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredCities}
        keyExtractor={(item) => item}
        renderItem={renderCity}
        style={styles.cityList}
      />

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SelectCityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginVertical: 8,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  cityList: {
    flex: 1,
    marginTop: 10,
  },
  cityItem: {
    padding: 16,
    backgroundColor: '#f2f7f5',
    borderRadius: 8,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 16,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  radioSelected: {
    borderColor: '#7C3AED',
    backgroundColor: '#7C3AED',
  },
  continueButton: {
    backgroundColor: '#7C3AED',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
