import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import styles from "./localStyles";

interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function Local() {
  const [activities, setActivities] = useState<Activity[]>([
    { id: '1', name: 'Yoga Class', description: 'Join our morning yoga session.', image: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Cooking Workshop', description: 'Learn to cook Italian cuisine.', image: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Art Exhibition', description: 'Explore modern art.', image: 'https://via.placeholder.com/50' },
    { id: '4', name: 'Live Concert', description: 'Enjoy live music.', image: 'https://via.placeholder.com/50' },
  ]);

  const renderActivityItem = ({ item }: { item: Activity }) => (
    <TouchableOpacity style={styles.activityItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.activityInfo}>
        <Text style={styles.activityName}>{item.name}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Join</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nearby Activities</Text>
      
      <FlatList
        data={activities}
        renderItem={renderActivityItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}
