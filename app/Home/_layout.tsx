import { Stack, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabsLayout() {
  return (
   
<Tabs screenOptions={{ headerShown: false }}>
<Tabs.Screen name="index" options={{
  tabBarLabel: 'home',
  tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
}} />
<Tabs.Screen name="order" options={{
  tabBarLabel: 'Order',
  tabBarIcon: ({ color }) => <Entypo name="menu" size={24} color={color} />
}} />
<Tabs.Screen name="shift" options={{
  tabBarLabel: 'Shift',
  tabBarIcon: ({ color }) => <FontAwesome name="calendar-plus-o" size={24} color={color} />
}} />
<Tabs.Screen name="earnings" options={{
  tabBarLabel: 'Earnings',
  tabBarIcon: ({ color }) => <FontAwesome6 name="money-bill-trend-up" size={24} color={color} />
}} />
<Tabs.Screen name="profile" options={{
  tabBarLabel: 'Profile',
  tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
}} />
</Tabs>
  );
}

