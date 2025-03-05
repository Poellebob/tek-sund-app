import React from 'react';
import { ScrollView, Image } from 'react-native';
import styles from '../Styles';

const randomImages = [
  'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltce80954b8a793ce1/66707e9a8a3929cbd9124f15/surprise-party-hero.jpg',
  'https://imgproxy.lokalavisen.dk/JaHMEO-3BOhbrmG65fbePwrXMqh4hAwmefboXKbsd_Y/size:1920/aHR0cHM6Ly9iaWxsZWRlci5sb2thbGF2aXNlbi5kay9waWN0dXJlcy9pbWFnZS8xNjMxMzE1Ny9pMmJlYXYvQUxURVJOQVRFUy9tYXN0ZXItMTZfOS9tb2VzZ2FhcmQtc3RyYW5kLWZhbWlsaWVuLTEwLWpwZw',
  'https://fanatik.dk/wp-content/uploads/2020/03/Fodboldkamp-paa-stadion.jpg',
  'https://www.feriebyenscamping.dk/wp-content/uploads/2024/06/Camping-paa-Feriebyens-Camping-i-Roedvig.jpg',
  'https://aalborg-streetfood.dk/wp-content/uploads/2023/10/Jazz-event-scaled.jpg',
  'https://i0.wp.com/turisme.nu/wp-content/uploads/2024/06/Arrangement-i-Ribers-Gaard-Svendborg-foto-Mads-Bordinggaard-svendborg-event.jpg?fit=1920%2C1080&ssl=1',
  'https://videnskab.dk/wp-content/uploads/2023/09/gruppe-af-venner-sidder-paa-en-restaurant-og-drikker-vin-folk-smiler-og-griner.jpg.webp',
  'https://www.ulf.dk/wp-content/uploads/2024/04/bowling-billede.jpg'
];

export default function Memories() {
  return (
    <ScrollView contentContainerStyle={styles.memoriesContainer}>
        {randomImages.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.memoryImage} />
        ))}
    </ScrollView>
  );
}