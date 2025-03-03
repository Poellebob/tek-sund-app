import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
  <Tabs>
    <Tabs.Screen name="index" options={{ title: 'Home' }} />
    <Tabs.Screen name="friends" options={{ title: 'Friends' }} />
    <Tabs.Screen name="local" options={{ title: 'Local' }} />
    <Tabs.Screen name="memories" options={{ title: 'Memories' }} />
  </Tabs>
  );
}