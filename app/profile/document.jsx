import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const DocumentsScreen = () => {
  const [documents, setDocuments] = useState({
    aadhaar: { uri: null, idNumber: '', verified: false },
    license: { uri: null, idNumber: '', verified: false },
    pan: { uri: null, idNumber: '', verified: false },
  });

  const pickImage = async (type) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setDocuments((prev) => ({
        ...prev,
        [type]: { ...prev[type], uri, verified: false },
      }));
    }
  };

  const handleIdChange = (type, value) => {
    setDocuments((prev) => ({
      ...prev,
      [type]: { ...prev[type], idNumber: value },
    }));
  };

  const renderDocument = (label, key, placeholder) => (
    <View style={styles.card}>
      <Text style={styles.docLabel}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={documents[key].idNumber}
        onChangeText={(text) => handleIdChange(key, text)}
        keyboardType="default"
      />

      {documents[key].uri ? (
        <Image source={{ uri: documents[key].uri }} style={styles.docImage} />
      ) : (
        <Text style={styles.placeholder}>No document uploaded</Text>
      )}

      <TouchableOpacity style={styles.uploadBtn} onPress={() => pickImage(key)}>
        <Ionicons name="cloud-upload-outline" size={18} color="#fff" />
        <Text style={styles.uploadText}>Upload</Text>
      </TouchableOpacity>

      <Text style={documents[key].verified ? styles.verified : styles.notVerified}>
        {documents[key].verified ? 'Verified' : 'Pending Verification'}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Document Verification</Text>
        {renderDocument('Aadhaar Card', 'aadhaar', 'Enter Aadhaar Number')}
        {renderDocument('Driving Licence', 'license', 'Enter Licence Number')}
        {renderDocument('PAN Card', 'pan', 'Enter PAN Number')}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f7f7',
    },
    scrollContainer: {
      padding: 20,
      alignItems: 'center',
    },
    header: {
      fontSize: 22,
      fontWeight: '700',
      color: '#00a99d',
      marginBottom: 20,
    },
    card: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      elevation: 2,
    },
    docLabel: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 10,
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      marginBottom: 10,
    },
    docImage: {
      width: '100%',
      height: 180,
      borderRadius: 8,
      marginBottom: 10,
    },
    placeholder: {
      fontSize: 14,
      color: '#888',
      marginBottom: 10,
      fontStyle: 'italic',
    },
    uploadBtn: {
      flexDirection: 'row',
      backgroundColor: '#00a99d',
      padding: 10,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    uploadText: {
      color: '#fff',
      marginLeft: 8,
      fontWeight: '600',
    },
    verified: {
      color: '#4caf50',
      fontWeight: '600',
      textAlign: 'center',
    },
    notVerified: {
      color: '#ff9800',
      fontWeight: '600',
      textAlign: 'center',
    },
  });
  

export default DocumentsScreen;
