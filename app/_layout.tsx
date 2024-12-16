import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="tanggal" />
      <Stack.Screen name="camera" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="cuti" />
      <Stack.Screen name="riwayat" />
      <Stack.Screen name="pengumuman" />
      <Stack.Screen name="absenmasuk" />
      <Stack.Screen name="absenpulang" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="jadwal" />
      <Stack.Screen name="absenpelajaran" />
      <Stack.Screen name="gurupengajar" />
      <Stack.Screen name="pengaturanprofil" />
      <Stack.Screen name="datasiswa" />
    </Stack>
  );
}
