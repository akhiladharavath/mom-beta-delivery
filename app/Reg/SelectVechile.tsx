import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {
  Text,
  Card,
  Title,
  RadioButton,
  Button,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import { router } from 'expo-router'; // Import router for navigation

// Define custom theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00bcd4',
    accent: '#00796b',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
  },
};

export default function SelectWorkDetails() {
  const [selectedShop, setSelectedShop] = useState('');
  const [workType, setWorkType] = useState('');
  const [step, setStep] = useState(1);

  const shops = [
    { id: '1', name: 'Corner Grocery', location: 'Sector 21' },
    { id: '2', name: 'FreshMart', location: 'Sector 34' },
    { id: '3', name: 'Daily Needs', location: 'Sector 18' },
  ];

  const handleShopSelect = (shopName: string) => {
    setSelectedShop(shopName);
    setTimeout(() => {
      setStep(2);
    }, 200);
  };

  const handleSubmit = () => {
    if (!workType) {
      Alert.alert('Incomplete', 'Please select your work type.');
      return;
    }

    // Navigate to Aadhaar page after submission
    router.push('/Reg/adhar');
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView contentContainerStyle={styles.container}>
        <Title style={styles.title}>Delivery Partner Registration</Title>

        {step === 1 && (
          <>
            <Text style={styles.sectionTitle}>Choose a Shop</Text>
            {shops.map((shop) => {
              const isSelected = selectedShop === shop.name;
              return (
                <Card
                  key={shop.id}
                  style={[styles.card, isSelected && styles.selectedCard]}
                  onPress={() => handleShopSelect(shop.name)}
                >
                  <Card.Content>
                    <Title style={[styles.cardTitle, isSelected && styles.selectedText]}>
                      {shop.name}
                    </Title>
                    <Text>{shop.location}</Text>
                  </Card.Content>
                </Card>
              );
            })}
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.sectionTitle}>Selected Shop: {selectedShop}</Text>

            <Text style={styles.sectionTitle}>Select Work Type</Text>
            <RadioButton.Group onValueChange={setWorkType} value={workType}>
              <View style={styles.radioItem}>
                <RadioButton value="Full-Time" />
                <Text>Full-Time</Text>
              </View>
              <View style={styles.radioItem}>
                <RadioButton value="Part-Time" />
                <Text>Part-Time</Text>
              </View>
            </RadioButton.Group>

            <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
              Continue
            </Button>
          </>
        )}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginVertical: 15,
    fontSize: 16,
  },
  card: {
    marginBottom: 12,
    elevation: 2,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedCard: {
    backgroundColor: '#e0f7fa',
    borderColor: '#00bcd4',
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 18,
  },
  selectedText: {
    color: '#00796b',
    fontWeight: 'bold',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  submitButton: {
    marginTop: 30,
  },
});
