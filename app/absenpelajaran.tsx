import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function AbsensiPelajaran({ navigation }) {
  // Initial schedule data
  const initialScheduleData = {
    Senin: [
      { id: "1", subject: "Matematika", time: "08:00 - 09:30", isPresent: false },
      { id: "2", subject: "Bahasa Indonesia", time: "10:00 - 11:30", isPresent: false },
      { id: "3", subject: "Agama", time: "12:30 - 14:00", isPresent: false },
      { id: "4", subject: "IPS", time: "14:30 - 16:00", isPresent: false },
    ],
    Selasa: [
      { id: "5", subject: "Fisika", time: "08:00 - 09:30", isPresent: false },
      { id: "6", subject: "Kimia", time: "10:00 - 11:30", isPresent: false },
      { id: "7", subject: "Sejarah", time: "12:30 - 14:00", isPresent: false },
      { id: "8", subject: "PKN", time: "14:30 - 16:00", isPresent: false },
    ],
    Rabu: [
      { id: "9", subject: "Ekonomi", time: "08:00 - 09:30", isPresent: false },
      { id: "10", subject: "Bahasa Indonesia", time: "10:00 - 11:30", isPresent: false },
      { id: "11", subject: "Biologi", time: "12:30 - 14:00", isPresent: false },
      { id: "12", subject: "Komputer", time: "14:30 - 16:00", isPresent: false },
    ],
    Kamis: [
      { id: "13", subject: "Bahasa Inggris", time: "08:00 - 09:30", isPresent: false },
      { id: "14", subject: "Olahraga", time: "10:00 - 11:30", isPresent: false },
      { id: "15", subject: "Agama", time: "12:30 - 14:00", isPresent: false },
      { id: "16", subject: "Seni Budaya", time: "14:30 - 16:00", isPresent: false },
    ],
    Jumat: [
      { id: "17", subject: "PKN", time: "08:00 - 09:30", isPresent: false },
      { id: "18", subject: "Bahasa Madura", time: "10:00 - 11:30", isPresent: false },
    ],
  };

  // State for active day and schedule data
  const [activeDay, setActiveDay] = useState("Senin");
  const [scheduleData, setScheduleData] = useState(initialScheduleData);

  // Function to change the active day
  const changeDay = (day) => {
    setActiveDay(day);
  };

  // Function to mark attendance and trigger re-render
  const markAttendance = (id) => {
    const updatedSchedule = { ...scheduleData };
    updatedSchedule[activeDay] = updatedSchedule[activeDay].map((item) =>
      item.id === id ? { ...item, isPresent: !item.isPresent } : item
    );
    setScheduleData(updatedSchedule); // Update state to re-render
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate("/(tabs)/profil")}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Absensi Pelajaran</Text>
      </View>

      {/* Day Selector */}
      <View style={styles.daySelector}>
        {Object.keys(scheduleData).map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              activeDay === day && { backgroundColor: "#0057A0" },
            ]}
            onPress={() => changeDay(day)}
          >
            <Text
              style={[styles.dayText, activeDay === day && { color: "#fff" }]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Schedule List */}
      <FlatList
        data={scheduleData[activeDay]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.attendanceButton,
                item.isPresent && { backgroundColor: "#4CAF50" },
              ]}
              onPress={() => markAttendance(item.id)}
            >
              <Icon
                name={item.isPresent ? "check" : "circle"} // Show check when present
                size={20}
                color={item.isPresent ? "#1976D2" : "#000"} // Blue when checked
              />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.scheduleList}
      />
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
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    elevation: 3,
  },
  dayButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#d3d3d3",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  scheduleList: {
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subject: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  time: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  attendanceButton: {
    backgroundColor: "#d3d3d3",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});
