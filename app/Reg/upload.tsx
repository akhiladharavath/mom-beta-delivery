import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';

const documents = [
  { label: 'Aadhar Card', icon: require('./../assets/images/1.11.png') },
  { label: 'PAN Card', icon: require('./../assets/images/1.12.png') },
  { label: 'Driving License', initials: 'DL' },
  { label: 'Vehicle RC', initials: 'RC' },
  {label: 'Profile Picture(Selfie)'},
];

export default function UploadDocuments() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Upload Documents</Text>
      <Text style={styles.subtitle}>
        Please submit the below documents for verification & upload originals to avoid rejection.
      </Text>

      <Text style={styles.sectionTitle}>PENDING</Text>

      {documents.map((doc, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          {doc.icon ? (
            <Image source={doc.icon} style={styles.icon} />
          ) : (
            <View style={styles.initialIcon}>
              <Text style={styles.initialText}>{doc.initials}</Text>
            </View>
          )}
          <Text style={styles.docLabel}>{doc.label}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>COMPLETED</Text>

      <View style={styles.incentiveBox}>
        <Text style={styles.incentiveText}>
          Hurry! Complete the steps to earn <Text style={styles.boldText}>₹3,000 joining incentive</Text>
        </Text>
        <Image source={require('./../assets/images/1.13.png')} style={styles.coinIcon} />
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Documents</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
    marginTop: 16,
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  initialIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  initialText: {
    fontWeight: 'bold',
    color: '#444',
  },
  docLabel: {
    fontSize: 16,
    color: '#222',
  },
  incentiveBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    padding: 10,
    backgroundColor: '#FFF5E5',
    borderRadius: 10,
  },
  incentiveText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#7D3C98',
  },
  coinIcon: {
    width: 28,
    height: 28,
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#00A99D',
    // #7D3C98
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});