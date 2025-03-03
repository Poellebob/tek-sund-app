import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (<Stack>
    <Tabs.Screen name="index" options={{ title: 'Home' }} />
  </Stack>
  );
}