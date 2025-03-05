import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

interface Friend {
  id: string;
  name: string;
  status: string;
  avatar: string;
}

export default function Friend() {
  const [friends, setFriends] = useState<Friend[]>([
    { id: '1', name: 'Alex Smith', status: 'Online', avatar: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Jamie Johnson', status: 'Offline', avatar: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Taylor Brown', status: 'Working out', avatar: 'https://via.placeholder.com/50' },
    { id: '4', name: 'Casey Davis', status: 'Online', avatar: 'https://via.placeholder.com/50' },
  ]);

  const renderFriendItem = ({ item }: { item: Friend }) => (
    <TouchableOpacity style={styles.friendItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={[
          styles.statusText, 
          { color: item.status === 'Online' ? '#4CAF50' : '#757575' }
        ]}>
          {item.status}
        </Text>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Message</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Friends</Text>
      
      <TouchableOpacity style={styles.addFriendButton}>
        <Text style={styles.addFriendText}>+ Add New Friend</Text>
      </TouchableOpacity>
      
      <FlatList
        data={friends}
        renderItem={renderFriendItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 16,
    },
    text: {
        color: '#000'
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#00b',
    },
    list: {
        width: '100%',
    },
    friendItem: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    friendInfo: {
        flex: 1,
        marginLeft: 12,
    },
    friendName: {
        fontSize: 16,
        fontWeight: '500',
    },
    statusText: {
        fontSize: 14,
        marginTop: 4,
    },
    actionButton: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    actionButtonText: {
        color: '#fff',
        fontWeight: '500',
    },
    addFriendButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    addFriendText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});