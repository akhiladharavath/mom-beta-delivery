import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const TermsAndConditionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerRow}>
        <MaterialIcons name="arrow-back" size={24} color="#00A99D" style={styles.MaterialIcons} onPress={()=>router.back()} />
        <Text style={styles.title}>Welcome Guide for Delivery Partners</Text>
        </View>

        <Text style={styles.heading}>1. Eligibility</Text>
        <Text style={styles.paragraph}>
          • Must be at least 18 years old{'\n'}
          • Hold a valid Driving License and registered vehicle{'\n'}
          • Provide Aadhaar and PAN Card{'\n'}
          • No criminal background
        </Text>

        <Text style={styles.heading}>2. Responsibilities</Text>
        <Text style={styles.paragraph}>
          • Handle all medical goods with care and maintain hygiene{'\n'}
          • Ensure patient confidentiality{'\n'}
          • Deliver only to adults matching the prescription details
        </Text>

        <Text style={styles.heading}>3. Delivery of Prescription Medicines</Text>
        <Text style={styles.paragraph}>
          • Schedule H/H1 drugs must only be delivered after verifying a valid prescription{'\n'}
          • Never open, consume, or tamper with medicines{'\n'}
          • Report incorrect or mismatched orders to the company
        </Text>

        <Text style={styles.heading}>4. Safety & Conduct</Text>
        <Text style={styles.paragraph}>
          • Follow all traffic and road safety rules{'\n'}
          • Maintain hygiene and wear company uniform/ID if provided{'\n'}
          • Do not harass or misbehave with customers
        </Text>

        <Text style={styles.heading}>5. Data Privacy</Text>
        <Text style={styles.paragraph}>
          • Keep all prescription and personal data confidential{'\n'}
          • Misuse or sharing of customer data is strictly prohibited
        </Text>

        <Text style={styles.heading}>6. Compensation</Text>
        <Text style={styles.paragraph}>
          • You will be paid per delivery{'\n'}
          • Bonuses and incentives may be awarded based on performance
        </Text>

        <Text style={styles.heading}>7. Termination</Text>
        <Text style={styles.paragraph}>
          • Services may be suspended or terminated for misconduct, legal violations, or repeated complaints
        </Text>

        <Text style={styles.heading}>8. Disclaimer</Text>
        <Text style={styles.paragraph}>
          • You are an independent contractor, not an employee{'\n'}
          • The company is not responsible for any accidents or third-party disputes unless due to its negligence
        </Text>

        <Text style={styles.heading}>9. Governing Law</Text>
        <Text style={styles.paragraph}>
          • This agreement is governed by the laws of India{'\n'}
          • Disputes will be handled by courts in your operating state
        </Text>

        <Text style={styles.heading}>10. Amendments</Text>
        <Text style={styles.paragraph}>
          • Terms may change. Continued use implies acceptance of updated terms
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7f6',
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  MaterialIcons: {
    marginTop: 0,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00a99d',

  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#00897b',
    marginTop: 12,
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    backgroundColor: '#f9fefd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 2,
    elevation: 1,
    shadowColor: '#00A99D',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 1,
  },
  footer: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00a99d',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    letterSpacing: 0.2,
  },
});
  
export default TermsAndConditionsScreen;
