import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import styles from "../Styles";

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