import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function GuruPengajar({ navigation }) {
  const teacherData = {
    Senin: [
      { id: "1", subject: "Matematika", teacher: "Budi Santoso", biodata: "Pendidikan: S1 Matematika, Universitas Gajah Mada. Pengalaman: 10 tahun mengajar di SMA." },
      { id: "2", subject: "Bahasa Indonesia", teacher: "Dewi Lestari", biodata: "Pendidikan: S1 Sastra Indonesia, Universitas Indonesia. Pengalaman: 8 tahun mengajar." },
      { id: "3", subject: "IPA", teacher: "Agus Wijaya", biodata: "Pendidikan: S1 Pendidikan IPA, Universitas Negeri Yogyakarta. Pengalaman: 5 tahun mengajar." },
      { id: "4", subject: "IPS", teacher: "Rina Kusuma", biodata: "Pendidikan: S1 Geografi, Universitas Padjadjaran. Pengalaman: 7 tahun mengajar." },
    ],
    Selasa: [
      { id: "5", subject: "Fisika", teacher: "Siti Nuraini", biodata: "Pendidikan: S1 Fisika, ITB. Pengalaman: 6 tahun mengajar di berbagai sekolah." },
      { id: "6", subject: "Kimia", teacher: "Hendra Pratama", biodata: "Pendidikan: S1 Kimia, Universitas Airlangga. Pengalaman: 9 tahun mengajar." },
      { id: "7", subject: "Sejarah", teacher: "Nurul Aini", biodata: "Pendidikan: S1 Sejarah, Universitas Indonesia. Pengalaman: 10 tahun mengajar." },
      { id: "8", subject: "Geografi", teacher: "Andi Wirawan", biodata: "Pendidikan: S1 Geografi, Universitas Negeri Malang. Pengalaman: 4 tahun mengajar." },
    ],
    Rabu: [
      { id: "9", subject: "Biologi", teacher: "Siti Maulida", biodata: "Pendidikan: S1 Biologi, Universitas Negeri Yogyakarta. Pengalaman: 7 tahun mengajar." },
      { id: "10", subject: "Matematika", teacher: "Budi Santoso", biodata: "Pendidikan: S1 Matematika, Universitas Gajah Mada. Pengalaman: 10 tahun mengajar di SMA." },
      { id: "11", subject: "Bahasa Inggris", teacher: "Eka Wulandari", biodata: "Pendidikan: S1 Pendidikan Bahasa Inggris, Universitas Pendidikan Indonesia. Pengalaman: 5 tahun mengajar." },
      { id: "12", subject: "Kimia", teacher: "Hendra Pratama", biodata: "Pendidikan: S1 Kimia, Universitas Airlangga. Pengalaman: 9 tahun mengajar." },
    ],
    Kamis: [
      { id: "13", subject: "Matematika", teacher: "Budi Santoso", biodata: "Pendidikan: S1 Matematika, Universitas Gajah Mada. Pengalaman: 10 tahun mengajar di SMA." },
      { id: "14", subject: "Sejarah", teacher: "Nurul Aini", biodata: "Pendidikan: S1 Sejarah, Universitas Indonesia. Pengalaman: 10 tahun mengajar." },
      { id: "15", subject: "Geografi", teacher: "Andi Wirawan", biodata: "Pendidikan: S1 Geografi, Universitas Negeri Malang. Pengalaman: 4 tahun mengajar." },
      { id: "16", subject: "Fisika", teacher: "Siti Nuraini", biodata: "Pendidikan: S1 Fisika, ITB. Pengalaman: 6 tahun mengajar di berbagai sekolah." },
    ],
    Jumat: [
      { id: "17", subject: "Bahasa Indonesia", teacher: "Dewi Lestari", biodata: "Pendidikan: S1 Sastra Indonesia, Universitas Indonesia. Pengalaman: 8 tahun mengajar." },
      { id: "18", subject: "Kimia", teacher: "Hendra Pratama", biodata: "Pendidikan: S1 Kimia, Universitas Airlangga. Pengalaman: 9 tahun mengajar." },
    ],
    Sabtu: [
      { id: "19", subject: "Biologi", teacher: "Siti Maulida", biodata: "Pendidikan: S1 Biologi, Universitas Negeri Yogyakarta. Pengalaman: 7 tahun mengajar." },
      { id: "20", subject: "IPS", teacher: "Rina Kusuma", biodata: "Pendidikan: S1 Geografi, Universitas Padjadjaran. Pengalaman: 7 tahun mengajar." },
    ],
  };

  const [activeDay, setActiveDay] = useState("Senin");

  const changeDay = (day) => {
    setActiveDay(day);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate("/(tabs)/profil")}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Guru Pengajar</Text>
      </View>

      {/* Hari Selector (Horizontal ScrollView) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daySelector}>
        {Object.keys(teacherData).map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              activeDay === day && { backgroundColor: "#0057A0" },
            ]}
            onPress={() => changeDay(day)}
          >
            <Text
              style={[
                styles.dayText,
                activeDay === day && { color: "#fff" },
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Guru Pengajar */}
      <ScrollView contentContainerStyle={styles.teacherList}>
        {teacherData[activeDay].map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("BiodataGuru", { teacher: item.teacher, biodata: item.biodata })
            }
          >
            <View>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.teacher}>Guru: {item.teacher}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0057A0",
    padding: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  daySelector: {
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  dayButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#d3d3d3",
    marginHorizontal: 5,
  },
  dayText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  teacherList: {
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  subject: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  teacher: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
