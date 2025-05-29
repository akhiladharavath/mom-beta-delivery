import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

const OrderContext = createContext();

const token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZWxpdmVyeUJveUlkIjoiNjgzNTU2ZTc2NjA1M2VjYTg5ZTBlZTQwIiwiaWF0IjoxNzQ4NDIyMTkxfQ.lQkEEDttODY8-xL8OI_vao3TMFi2K1j-YeuVwAOKacg';



export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [acceptingOrderId, setAcceptingOrderId] = useState(null);
  const [error, setError] = useState(null);
  const [acceptedOrderDetails, setAcceptedOrderDetails] = useState(null)
  const [rejectedOrderIds, setRejectedOrderIds]= useState([])

  const fetchOrders = async () => {
    setLoadingOrders(true);
    setError(null);
    try {
      const response = await fetch('http://192.168.1.100:3000/api/allorders', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch orders');

      const data = await response.json();
      setOrders(data.orders || []);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoadingOrders(false);
    }
  };

  const acceptOrder = async (orderId, onSuccess) => {
    setAcceptingOrderId(orderId);
    setError(null);
    try {
      const response = await fetch(`http://192.168.1.100:3000/api/orders/${orderId}/accept`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to accept order');

      const acceptedOrder = orders.find(o => o._id === orderId);
      setAcceptedOrderDetails(acceptedOrder); 

      Alert.alert('Success', data.message);
      if (onSuccess) onSuccess();
      fetchOrders(); 
    } catch (err) {
      Alert.alert('Error', err.message);
    } finally {
      setAcceptingOrderId(null);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const rejectOrder = (orderId)=>{
    setRejectedOrderIds((prev => [...prev, orderId]));
    Alert.alert("Delined", "you declined the order")
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        loadingOrders,
        acceptingOrderId,
        error,
        fetchOrders,
        acceptOrder,
        acceptedOrderDetails, 
        rejectedOrderIds,
        rejectOrder

      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
