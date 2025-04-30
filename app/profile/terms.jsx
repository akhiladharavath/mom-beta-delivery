import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const TermsAndConditionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Terms & Conditions for Delivery Partners</Text>
        <Text style={styles.date}>Effective Date: 01/05/2025</Text>

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

        <Text style={styles.footer}>
          By continuing to use the platform, you agree to these Terms and Conditions.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7fdfd',
    },
    contentContainer: {
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: '#00a99d',
      marginBottom: 10,
    },
    date: {
      fontSize: 14,
      color: '#777',
      marginBottom: 20,
    },
    heading: {
      fontSize: 16,
      fontWeight: '700',
      color: '#333',
      marginTop: 15,
      marginBottom: 5,
    },
    paragraph: {
      fontSize: 14,
      color: '#444',
      lineHeight: 22,
    },
    footer: {
      fontSize: 14,
      fontWeight: '600',
      color: '#000',
      textAlign: 'center',
      marginTop: 25,
      marginBottom: 30,
    },
  });
  
export default TermsAndConditionsScreen;
