import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { router } from 'expo-router';

const initialSlots = [
  { id: '1', time: '10:00 Am - 12:00 pm', status: 'Booked', break: '20 mins break' },
  { id: '2', time: '12:00 pm - 02:00 pm', status: 'Filling Fast', break: '20 mins break' },
  { id: '3', time: '02:00 pm - 04:00 pm', status: 'Available', break: '20 mins break' },
];

const StatusColors = {
  Booked: '#00a99d',
  'Filling Fast': '#ff0000',
  Available: '#16f973',
};

export default function ShiftsScreen() {
  const dates = ['Tue 29', 'Wed 30', 'Thu 01', 'Fri 02', 'Sat 03', 'Sun 04', 'Mon 05'];
  const filters = ['All', 'Available', 'Booked', 'Cancelled'];

  const [selectedDate, setSelectedDate] = useState('Tue 29');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [slotsData, setSlotsData] = useState(initialSlots);
  const [showModal, setShowModal] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [cancelSlotId, setCancelSlotId] = useState(null);

  const filteredSlots = slotsData.filter(
    (slot) => selectedFilter === 'All' || slot.status === selectedFilter
  );

  const confirmBooking = () => {
    const updated = slotsData.map((slot) =>
      slot.id === selectedSlotId ? { ...slot, status: 'Booked' } : slot
    );
    setSlotsData(updated);
    setSelectedSlotId(null);
    setShowModal(false);
  };

  const cancelBooking = () => {
    const updated = slotsData.map((slot) =>
      slot.id === cancelSlotId ? { ...slot, status: 'Cancelled' } : slot
    );
    setSlotsData(updated);
    setCancelSlotId(null);
    setCancelModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Shifts</Text>
      </View>

      <View style={styles.topRightRow}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('Shifts/howitworks')}
          activeOpacity={1}
        >
          <Text style={styles.cardText}>How it works</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('Shifts/history')}
          activeOpacity={1}
        >
          <Text style={styles.cardText}>History</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.DateScroll}>
        {dates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dateButton, selectedDate === date ? styles.selected : styles.unselected]}
            onPress={() => setSelectedDate(date)}
          >
            <Text
              style={selectedDate === date ? styles.selectedText : styles.unselectedText}
            >
              {date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filters}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.filterButton, selectedFilter === filter && styles.selected]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.selectedText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredSlots}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.shiftCard}>
            <View style={styles.header}>
              <Text style={styles.time}>{item.time}</Text>
              <Text
                style={[
                  styles.status,
                  { backgroundColor: StatusColors[item.status] || '#e5e7eb' },
                ]}
              >
                {item.status}
              </Text>
            </View>
            <Text style={styles.break}>{item.break}</Text>

            {item.status === 'Available' && (
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => {
                  setSelectedSlotId(item.id);
                }}
              >
                <Text style={{ color: '#000' }}>
                  {selectedSlotId === item.id ? 'Selected' : 'Select'}
                </Text>
              </TouchableOpacity>
            )}

            {item.status === 'Booked' && (
              <TouchableOpacity
                onPress={() => {
                  setCancelSlotId(item.id);
                  setCancelModalVisible(true);
                }}
                style={[styles.checkbox, { borderColor: 'red' }]}
              >
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      {selectedSlotId && (
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.proceedText}>Proceed</Text>
        </TouchableOpacity>
      )}

      {/* Confirm Booking Modal */}
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Confirm Booking</Text>
            <Text style={{ marginTop: 10 }}>Are you sure you want to book this slot?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={[styles.modalBtn, { backgroundColor: '#ccc' }]}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={confirmBooking}
                style={[styles.modalBtn, { backgroundColor: '#00a99d' }]}
              >
                <Text style={{ color: '#fff' }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Cancel Booking Modal */}
      <Modal visible={cancelModalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cancel Booking</Text>
            <Text style={{ marginTop: 10 }}>Are you sure you want to cancel this slot?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setCancelModalVisible(false)}
                style={[styles.modalBtn, { backgroundColor: '#ccc' }]}
              >
                <Text>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={cancelBooking}
                style={[styles.modalBtn, { backgroundColor: 'red' }]}
              >
                <Text style={{ color: '#fff' }}>Cancel Slot</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff'},
  headerRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12, marginTop: 20, marginHorizontal: 10
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  topRightRow: {
    flexDirection: 'row', justifyContent: 'flex-end',
    gap: 10, marginBottom: 12, marginRight: 16,
  },
  card: {
    backgroundColor: '#f0f0f0', borderRadius: 10,
    paddingVertical: 6, paddingHorizontal: 12,
  },
  cardText: { fontSize: 14, fontWeight: '600' },
  DateScroll: { marginVertical: 10 },
  dateButton: {
    paddingVertical: 6, paddingHorizontal: 12,
    borderRadius: 16, borderWidth: 1, marginLeft: 10,
  },
  selected: { backgroundColor: '#00a99d', borderColor: '#00a99d' },
  unselected: { backgroundColor: '#fff', borderColor: '#ccc' },
  selectedText: { color: '#fff', fontWeight: '600', fontSize: 13 },
  unselectedText: { color: '#666', fontSize: 13 },
  filters: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginBottom: 10, marginLeft: 10, marginRight: 20,
  },
  filterButton: {
    paddingVertical: 6, paddingHorizontal: 12,
    borderRadius: 20, backgroundColor: '#f0f0f0',
  },
  filterText: { color: '#555' },
  shiftCard: {
    borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
    padding: 12, marginBottom: 12, backgroundColor: '#f9fafb',
    marginHorizontal: 10
  },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
  },
  time: { fontSize: 16, fontWeight: 'bold' },
  status: {
    fontSize: 12, paddingHorizontal: 8, paddingVertical: 4,
    borderRadius: 12, color: '#111', overflow: 'hidden',
  },
  break: { marginTop: 6, color: '#555' },
  checkbox: {
    marginTop: 10, borderWidth: 1, padding: 8,
    borderColor: '#00a99d', borderRadius: 6, alignItems: 'center',
  },
  proceedButton: {
    backgroundColor: '#00a99d', padding: 12,
    margin: 12, borderRadius: 10, alignItems: 'center',
  },
  proceedText: { color: '#fff', fontWeight: 'bold' },
  modalContainer: {
    flex: 1, justifyContent: 'center',
    alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    width: 300, backgroundColor: '#fff',
    padding: 20, borderRadius: 10, alignItems: 'center',
  },
  modalButtons: {
    flexDirection: 'row', justifyContent: 'space-between',
    width: '100%', marginTop: 20,
  },
  modalBtn: {
    flex: 1, padding: 10, borderRadius: 6,
    alignItems: 'center', marginHorizontal: 5,
  },
}); 