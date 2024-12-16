import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Ikon untuk header
import { Entypo } from "@expo/vector-icons"; // Ikon untuk tombol kembali
import { router } from "expo-router"; // Navigasi dengan router

export default function JadwalScreen() {
  // Daftar jadwal
  const jadwalData = [
    {
      id: "1",
      waktu: "08:00 - 09:00",
      mataPelajaran: "Matematika",
      guru: "Bapak Joko",
    },
    {
      id: "2",
      waktu: "09:00 - 10:00",
      mataPelajaran: "Bahasa Indonesia",
      guru: "Ibu Siti",
    },
    {
      id: "3",
      waktu: "10:00 - 11:00",
      mataPelajaran: "Fisika",
      guru: "Bapak Agus",
    },
    {
      id: "4",
      waktu: "11:00 - 12:00",
      mataPelajaran: "Kimia",
      guru: "Ibu Ani",
    },
  ];

  // Fungsi untuk kembali ke halaman profil
  const handleBack = () => {
    router.push("/(tabs)/profil"); // Navigasi kembali ke halaman profil
  };

  return (
    <View style={styles.container}>
      {/* Header dengan tombol kembali */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Entypo name="chevron-left" size={30} color="#fff" /> {/* Ikon kembali */}
        </TouchableOpacity>
        <Icon name="calendar-month" size={70} color="#fff" />
        <Text style={styles.headerText}>Jadwal Pelajaran</Text>
      </View>

      {/* Scrollable Jadwal */}
      <ScrollView style={styles.jadwalContainer}>
        {jadwalData.map((item) => (
          <View key={item.id} style={styles.jadwalCard}>
            <Text style={styles.jadwalWaktu}>{item.waktu}</Text>
            <Text style={styles.jadwalMataPelajaran}>{item.mataPelajaran}</Text>
            <Text style={styles.jadwalGuru}>{item.guru}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Kembali ke menu utama */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#0057A0",
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 30,
    padding: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  jadwalContainer: {
    padding: 20,
  },
  jadwalCard: {
    backgroundColor: "#fff8e1",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  jadwalWaktu: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  jadwalMataPelajaran: {
    fontSize: 16,
    color: "#4CAF50",
    marginTop: 5,
  },
  jadwalGuru: {
    fontSize: 14,
    color: "#2196F3",
    marginTop: 5,
  },
  backButton: {
    backgroundColor: "#0057A0",
    padding: 15,
    margin: 20,
    alignItems: "center",
    borderRadius: 10,
    elevation: 3,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
