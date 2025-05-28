import { router, useLocalSearchParams } from 'expo-router';
import RateCard from '@/components/Earnings/RateCard';
import EarningsHistory from '@/components/Earnings/EarningsHistory';
import PayoutHistory from '@/components/Earnings/PayoutsHistory';

import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');
const paddingHorizontal = width * 0.05;

const EarningsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* <Text style={styles.heading}>Earnings</Text> */}
                <View style={styles.section}>
                    <EarningsHistory />
                </View>
                
                <View style={styles.section}>
                    <PayoutHistory />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal,
        paddingVertical: 10,
    },
    section: {
        marginBottom: 30, 
    },
});

export default EarningsScreen;
