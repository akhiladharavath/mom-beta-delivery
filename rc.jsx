import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';

export default function AadhaarScreen() {
    const [rc, setRc] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Camera access is required to take a photo.');
            }
        })();
    }, []);

    const handleOpenCamera = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    };

    const handleContinue = () => {
        if (rc.length !== 10) {
            Alert.alert('Invalid RC', 'Please enter a valid 10-digit RC number.');
            return;
        }

        if (!image) {
            Alert.alert('Missing Photo', 'Please capture a photo before continuing.');
            return;
        }
        router.push('../profile/profile'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter RC Number</Text>
            <TextInput
                style={styles.input}
                keyboardType="alphanumeric"
                maxLength={10}
                placeholder="Enter 10-digit Registration number"
                value={rc}
                onChangeText={setRc}
            />

            <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
                <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>

            {image && (
                <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
            )}

            <TouchableOpacity style={[styles.button, { backgroundColor: '#00a99d' }]} onPress={handleContinue}>
                <Text style={[styles.buttonText, { color: 'white' }]}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        padding: 15,
        backgroundColor: '#eee',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
});
