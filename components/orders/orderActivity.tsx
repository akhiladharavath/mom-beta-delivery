import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
export const Activity1 = [
    {
        title: 'Order Created',
        time: '10am, 12 May 2025'
    },
    {
        title: 'Order Pickup',
        time: '01:12am, 12 May 2025'
    },
    {
        title: 'Delivery Started',
        time: '01:13am, 13 May 2025'
    }
];

const Activity = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={Activity1}
                keyExtractor={item => item.title}
                renderItem={({ item }) => (
                    
                    <View style={{flexDirection:"row" ,alignItems:'center'}}>
                        <Entypo name="circle" size={24} color="black" style={{marginBottom:20}} />
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'white',
        padding: 16,
        height:'55%',
    },
    item: {
        marginBottom: 20,
        padding: 12,
        marginLeft:8,
        borderRadius: 8,

        
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 14,
        color: '#666',
    }
});

export default Activity;
