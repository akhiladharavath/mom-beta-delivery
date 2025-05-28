import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';

import { router } from 'expo-router';

const weeks = [
  { id: '21', label: 'Week 21', dateRange: '19 May - 25 May', current: true },
  { id: '20', label: 'Week 20', dateRange: '12 May - 18 May' },
  { id: '19', label: 'Week 19', dateRange: '05 May - 11 May' },
  { id: '18', label: 'Week 18', dateRange: '28 Apr - 04 May' },
  { id: '17', label: 'Week 17', dateRange: '21 Apr - 27 Apr' },
  { id: '16', label: 'Week 16', dateRange: '14 Apr - 20 Apr' },
  { id: '15', label: 'Week 15', dateRange: '07 Apr - 13 Apr' },
  { id: '14', label: 'Week 14', dateRange: '31 Mar - 06 Apr' },
];

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState('21');

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.weekItem} onPress={() => setSelectedWeek(item.id)}>
      <View>
        <Text style={styles.weekLabel}>{item.label}</Text>
        <View style={styles.dateBadgeContainer}>
          <Text style={styles.dateRange}>{item.dateRange}</Text>
          {item.current && <Text style={styles.thisWeekBadge}>This Week</Text>}
        </View>
      </View>
      <View style={styles.radioCircle}>
        {selectedWeek === item.id && <View style={styles.selectedRb} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.selectBox}>
        <View style={styles.selectHeader}>
          <Text style={styles.selectHeaderText}>Select Week</Text>
          
        </View>

        <FlatList
          data={weeks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 80 }}
        />

        <View style={styles.selectButtonContainer}>
          <TouchableOpacity style={styles.selectButton} onPress={()=>router.push('/Earnings/dayearnings')}>
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  selectBox: { flex: 1, padding: 15, backgroundColor: '#fff' },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectHeaderText: { fontSize: 18, fontWeight: '600' },
  weekItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  weekLabel: { fontSize: 16, fontWeight: '500' },
  dateRange: { fontSize: 12, color: '#888' },
  thisWeekBadge: {
    fontSize: 12,
    color: '#0a9396',
    backgroundColor: '#e0f7f1',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 6,
  },
  dateBadgeContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#0a9396',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0a9396',
  },
  selectButtonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    right: 15,
  },
  selectButton: {
    backgroundColor: '#0a9396',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});