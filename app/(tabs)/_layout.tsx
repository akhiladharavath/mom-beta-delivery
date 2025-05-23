import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, Ionicons } from '@expo/vector-icons'

export default function _layout() {
    return (
        <Tabs screenOptions={{ tabBarInactiveTintColor: "white", tabBarActiveTintColor:"white", tabBarLabelStyle: { fontSize: 12 }, tabBarStyle: { backgroundColor:"#008080" ,  position: "absolute", bottom: 0, left: 0, right: 0, height: 60 }, tabBarIconStyle: { marginBottom: 5 } }} >
            <Tabs.Screen name="home" options={{ title: 'Home', tabBarIcon: () => <Ionicons name='home-outline' size={24} color={"white"} /> }} />
            <Tabs.Screen name='Earning' options={{ title: 'Earning', tabBarIcon: () => <Ionicons name="bag-add-outline" size={24} color={"white"} /> }} />
            {/* <Tabs.Screen name="settings" options={{ title: 'Settings' }} /> */}
            <Tabs.Screen name='WorkShifts' options={{ title: 'Work Shifts', tabBarIcon: () => <AntDesign name='clockcircle' size={24} color={"white"} /> }} />
            <Tabs.Screen name='Orders' options={{ title: 'Orders', tabBarIcon: () => <AntDesign name='carryout' size={24} color={"white"} /> , headerStyle:{backgroundColor:"#D0E8E6"} }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => <AntDesign name='profile' size={24} color={"white"} /> }} />
        </Tabs>
    )
}