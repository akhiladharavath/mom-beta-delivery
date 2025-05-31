
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DeliveryBoyDetails({ icon, title, subtitle }) {
    return (
        <View style={styles.flexbox}>
            {icon}
            <View style={styles.rowbox}>
                <Text style={styles.rowheader}>{title}</Text>
                <Text style={styles.rowcontent}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flexbox: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    rowbox: {
        flexDirection: 'column'
    },
    rowheader: {
        fontSize: 19,
        fontWeight: '400',
        color: 'black'
    },
    rowcontent: {
        fontSize: 16,
        color: 'gray'
    }
});
