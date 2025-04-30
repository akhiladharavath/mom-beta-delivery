import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const SlotHistoryPage = () => {
  const [expandedStat, setExpandedStat] = useState("Completed");

  const userData = {
    userId: '12345',  
    week: 'Week 18 (28 Apr - 04 May)',
    stats: {
      Completed: 2,
      Failed: 2,
      NoShows: 0,
      Cancelled: 2,
    },
    details: {
      Completed: [
        { date: '28 Apr', time: '10:00 AM'

         },
        { date: '30 Apr', time: '2:00 PM' },
      ],
      Failed: [
        { date: '29 Apr', reason: 'No internet' },
        { date: '01 May', reason: 'User unavailable' },
      ],
      Cancelled: [
        { date: '29 Apr', reason: 'No internet' },
        { date: '01 May', reason: 'User unavailable' },
      ],
    },
  };

  const toggleExpand = (key) => {
    if(expandedStat!==key){
      setExpandedStat(key);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Slot History</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.help}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* User Info 
      <View style={styles.row}>
        <Text style={styles.userId}>User ID: {userData.userId}</Text>
      </View>
*/}
      <View style={styles.row}>
        <Text style={styles.week}>{userData.week}</Text>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.link}>Change</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        {Object.entries(userData.stats).map(([key, value]) => (
          <TouchableOpacity
            key={key}
            style={[styles.statBox, styles.shadow]}
            onPress={() => toggleExpand(key)}
          >
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statLabel}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {expandedStat && (
        <View style={styles.detailsBox}>
          <Text style={styles.detailsTitle}>{expandedStat} Details</Text>
          {userData.details[expandedStat]?.map((item, index) => (
            <View key={index} style={styles.detailItem}>
              <Text style={styles.detailDate}>{item.date}</Text>
              {item.time && <Text style={styles.detailTime}>Time: {item.time}</Text>}
              {item.reason && <Text style={styles.detailReason}>Reason: {item.reason}</Text>}
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  
  help: {
    color: '#fff',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  userId: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  week: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  linkButton: {
    padding: 6,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
  },
  link: {
    color: '#007BFF',
    fontSize: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  
  detailsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  detailItem: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#07c5ed',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  detailDate: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  detailTime: {
    fontSize: 16,
    fontWeight: '500',
    color: '#777',
  },
  detailReason: {
    fontSize: 16,
    fontWeight: '500',
    color: '#d9534f', 
  },
});

export default SlotHistoryPage;