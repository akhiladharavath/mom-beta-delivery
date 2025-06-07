import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Linking,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const HelpSupportScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const faqData = [
    {
      question: 'How do I accept or reject a delivery order?',
      answer:
        'Once a new job appears, you will see Accept and Reject buttons. Tap "Accept" to start the delivery or "Reject" if you are unavailable.',
    },
    {
      question: 'Why am I not receiving new orders?',
      answer:
        'Ensure your app status is set to "Online". Also, check your internet connection and location permissions.',
    },
    {
      question: 'How can I view my earnings?',
      answer:
        'Go to Profile > Wallet to view your daily, weekly, and monthly earnings.',
    },
    {
      question: 'When will I get paid?',
      answer:
        'Payments are processed weekly. You will receive your payout every Monday to your registered bank account.',
    },
    {
      question: 'How do I update my bank details?',
      answer:
        'Go to Profile > Payment Settings and tap "Edit" to update your bank account or UPI information.',
    },
    {
      question: 'What should I do if I can’t find the customer’s location?',
      answer:
        'Use the in-app map and contact the customer via call or message. If still unclear, mark it as an issue and notify support.',
    },
    {
      question: 'I forgot my login password. What should I do?',
      answer:
        'Tap on "Forgot Password" on the login screen and follow the instructions to reset it via your registered phone number.',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/917702068334?text=Hello,%20I%20need%20help%20as%20a%20delivery%20partner.');
  };

  const callSupport = () => {
    Linking.openURL('tel:7702068334');
  };

  const startChatBot = () => {
    router.push('/comingsoon/momai');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
      <MaterialIcons name="arrow-back" size={24} color="#00A99D" style={styles.MaterialIcons} onPress={()=>router.back()} />
      <Text style={styles.header}>Help & Support</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {faqData.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.questionRow}>
              <Text style={styles.questionText}>{item.question}</Text>
              <Ionicons
                name={expandedIndex === index ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#333"
              />
            </TouchableOpacity>
            {expandedIndex === index && (
              <Text style={styles.answerText}>{item.answer}</Text>
            )}
          </View>
        ))}

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => setShowModal(true)}
        >
          <Ionicons name="call-outline" size={20} color="#fff" />
          <Text style={styles.contactText}>Contact Partner Support</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Support</Text>

            <TouchableOpacity style={styles.modalButton} onPress={openWhatsApp}>
              <Ionicons name="logo-whatsapp" size={20} color="#25D366" />
              <Text style={styles.modalText}>WhatsApp Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={callSupport}>
              <Ionicons name="call" size={20} color="#4CAF50" />
              <Text style={styles.modalText}>Call Toll-Free: mom-helpline</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={startChatBot}>
              <Ionicons name="chatbubble-ellipses-outline" size={20} color="#2196F3" />
              <Text style={styles.modalText}>Chat with Bot</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
              <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HelpSupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef7f6',
    padding: 20,
    marginHorizontal: 5,
  },
  top:{
    flexDirection:'row',
    marginVertical: 30,
  },

  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#00a99d',
    // marginBottom: 20,
    // marginVertical: 5,
    marginLeft : 20
  },
      MaterialIcons: {
      // marginLeft: -10,
      // marginTop: 10,
    },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    elevation: 3,
    // marginHorizontal: 12,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    paddingRight: 10,
  },
  answerText: {
    marginTop: 10,
    color: '#555',
    fontSize: 14,
    lineHeight: 20,
  },
  contactButton: {
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: '#00a99d',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 12,
  },
  contactText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 10,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  modalText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#00a99d',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
});