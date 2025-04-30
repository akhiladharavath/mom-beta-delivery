import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard, Alert, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InviteScreen = () => {
  const inviteCode = 'MOM123';

  const copyToClipboard = () => {
    Clipboard.setString(inviteCode);
    Alert.alert('Copied', 'Invite code copied to clipboard');
  };

  const shareInvite = async () => {
    try {
      await Share.share({
        message: `Join Our  Delivery Team and get ₹100! Use my invite code: ${inviteCode}`,
      });
    } catch (error) {
      Alert.alert('Error', 'Could not share invite link');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Invite Friends & Earn</Text>

      <View style={styles.rewardsContainer}>
        <View style={styles.rewardBox}>
          <Text style={styles.rewardTitle}>You Get</Text>
          <Text style={styles.rewardAmount}>₹100 Wallet Credit</Text>
          <Text style={styles.rewardDesc}>On your friend's first consultation</Text>
        </View>
        <View style={styles.rewardBox}>
          <Text style={styles.rewardTitle}>Friend Gets</Text>
          <Text style={styles.rewardAmount}>₹100 Wallet Credit</Text>
          <Text style={styles.rewardDesc}>When they sign up</Text>
        </View>
      </View>

      <View style={styles.inviteCodeContainer}>
        <Text style={styles.inviteText}>Invite Code</Text>
        <View style={styles.codeBox}>
          <Text style={styles.code}>{inviteCode}</Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <Ionicons name="copy-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.shareButton} onPress={shareInvite}>
        <Ionicons name="share-social-outline" size={20} color="#fff" />
        <Text style={styles.shareText}>Share Invite Link</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InviteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2d8d8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00a99d',
  },
  rewardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    elevation: 2,
  },
  rewardBox: {
    alignItems: 'center',
    flex: 1,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  rewardAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  rewardDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  inviteCodeContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  inviteText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  codeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  code: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  shareButton: {
    flexDirection: 'row',
    backgroundColor: '#00a99d',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});
