import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView , Dimensions } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';


export default function App() {

  function getLast8Weeks() {
        const weeks = [];

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Find Monday of this week
        const day = today.getDay();
        const diffToMonday = day === 0 ? -6 : 1 - day;
        const thisMonday = new Date(today);
        thisMonday.setDate(today.getDate() + diffToMonday);

        // Loop 8 times for 8 weeks
        for (let i = 0; i < 8; i++) {
            const startOfWeek = new Date(thisMonday);
            startOfWeek.setDate(thisMonday.getDate() - i * 7);

            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            endOfWeek.setHours(23, 59, 59, 999);

            weeks.push({
                id:i+1 , 
                label:`Last Week ${i+1}`,
                start: new Date(startOfWeek).toISOString().split("T")[0],
                end: new Date(endOfWeek).toISOString().split("T")[0],
            });
        }

        return weeks;
    }

    const weeksArray = getLast8Weeks()

  const [selectedWeek, setSelectedWeek] = useState(1);
  const [WeekDetails , setWeekDetails] = useState({
    startingDate:weeksArray[0].start , 
    endingDate:weeksArray[0].end
  })

  console.log(WeekDetails)
  

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.weekItem} onPress={() =>{ setSelectedWeek(item.id) 
      setWeekDetails({startingDate:item.start , endingDate:item.end})
    }}>
      <View>
        <Text style={styles.weekLabel}>{item.label}</Text>
        <View style={styles.dateBadgeContainer}>
          <Text style={styles.dateRange}>{item.start}</Text>
          {/* {item.current && <Text style={styles.thisWeekBadge}>This Week</Text>} */}
        </View>
      </View>
      <View style={styles.radioCircle}>
        {selectedWeek === item.id && <View style={styles.selectedRb} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Week</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.selectBox}>
        <View style={styles.selectHeader}>
          {/* <Text style={styles.selectHeaderText}>Select Week</Text> */}
        </View>

        <FlatList
          data={weeksArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 80 }}
        />

        <View style={styles.selectButtonContainer}>
          <TouchableOpacity style={styles.selectButton} onPress={()=>router.push({pathname:"/Earnings/dayearnings" , params:{start:WeekDetails.startingDate , end:WeekDetails.endingDate}})}>
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    padding: 4,
  },
  selectBox: { flex: 1, padding: 15, backgroundColor: '#fff' },
  selectHeader: {
    // marginTop: 0,
    // marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectHeaderText: { fontSize: 18, fontWeight: '600', marginLeft: 10 },
  weekItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1,
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