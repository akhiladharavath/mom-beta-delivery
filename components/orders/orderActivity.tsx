import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const convertTimeToDate = (timeString) => {
  const now = new Date(); 
  const [time, modifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;

  const date = new Date(now);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

const formatTime = (dateObj) => {
  return dateObj.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const formatDate = (dateObj) => {
  return dateObj.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

const Activity = ({ createdAt }) => {
  const createdDate = convertTimeToDate(createdAt);

  const steps = [
    { title: 'Order Created', offsetMin: 0 },
    { title: 'Order Picked up', offsetMin: 2 },
    { title: 'Delivery Started', offsetMin: 3 },
    { title: 'Order Arrived', offsetMin: 10 },
  ];

  const Activity1 = steps.map(step => {
    const stepTime = new Date(createdDate.getTime() + step.offsetMin * 60000);
    return {
      title: step.title,
      time: `${formatTime(stepTime)}, ${formatDate(stepTime)}`
    };
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={Activity1}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Entypo name="circle" size={24} color="black" style={{ marginBottom: 20 }} />
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
  },
  item: {
    marginBottom: 20,
    padding: 12,
    marginLeft: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});

export default Activity;
