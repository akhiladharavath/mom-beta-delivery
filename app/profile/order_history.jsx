import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph, Chip, Text, Divider } from 'react-native-paper';

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return '#4CAF50';
    case 'Pending':
      return '#FF9800';
    default:
      return '#9E9E9E'; 
  }
};

const OrderDetailsScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const deliveryId = '6819b30120851289c77d81f0';
    const fetchOrders = async () => {
      try {
        const response = await fetch(`https://mom-beta-server1.onrender.com/api/delivery/${deliveryId}`);
        const data = await response.json();
        console.log(data)
        if (data.success) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const renderMedicineItem = (medicine, index) => (
    <View key={index} style={styles.medicineItem}>
      <Text style={styles.medicineName}>{medicine.name}</Text>
      <Text style={styles.medicineInfo}>
        Qty: {medicine.quantity} | Price: ₹{medicine.price}
      </Text>
    </View>
  );

  const renderOrderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.rowBetween}>
          <Title style={styles.orderId}>Order ID: {item._id}</Title>
          <Chip style={[styles.chip, { backgroundColor: getStatusColor(item.status) }]} textStyle={styles.chipText}>
            {item.status}
          </Chip>
        </View>
        <Paragraph style={styles.address}>Address: {item.address}</Paragraph>
        <Divider style={{ marginVertical: 10 }} />
        <Text style={styles.medicineTitle}>Medicines:</Text>
        {item.medicines.map(renderMedicineItem)}
        <Text style={styles.orderTime}>
          Ordered on: {new Date(item.createdAt).toLocaleString()}
        </Text>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Loading orders...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#333',
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: 'white',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  chip: {
    height: 30,
    justifyContent: 'center',
  },
  chipText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 6,
  },
  medicineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  medicineItem: {
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 8,
  },
  medicineName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  medicineInfo: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  orderTime: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 10,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderDetailsScreen;
