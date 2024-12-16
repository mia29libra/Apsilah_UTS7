import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function DataSiswa() {
  const students = [
    { id: "1", name: "Arief Rahman", class: "11 B", dob: "2005-02-15" },
    { id: "2", name: "Budi Santoso", class: "11 B", dob: "2004-03-25" },
    { id: "3", name: "Dewi Lestari", class: "11 B", dob: "2004-07-10" },
    { id: "4", name: "Siti Nuraini", class: "11 B", dob: "2003-08-22" },
    { id: "5", name: "Andi Wirawan", class: "11 B", dob: "2002-12-18" },
    { id: "6", name: "Rina Kusuma", class: "11 B", dob: "2003-06-12" },
    { id: "7", name: "Joko Santoso", class: "11 B", dob: "2005-01-30" },
    { id: "8", name: "Nina Sari", class: "11 B", dob: "2004-04-05" },
    { id: "9", name: "Ali Akbar", class: "11 B", dob: "2003-09-15" },
    { id: "10", name: "Rina Kusumawati", class: "11 B", dob: "2003-10-10" },
    { id: "11", name: "Farah Jihan", class: "11 B", dob: "2002-05-23" },
    { id: "12", name: "Toni Wijaya", class: "11 B", dob: "2002-11-09" },
    { id: "13", name: "Eka Pratiwi", class: "11 B", dob: "2005-03-20" },
    { id: "14", name: "Beni Kurniawan", class: "11 B", dob: "2004-02-28" },
    { id: "15", name: "Indah Puspita", class: "11 B", dob: "2003-11-12" },
    { id: "16", name: "Rudi Hartono", class: "11 B", dob: "2003-05-25" },
    { id: "17", name: "Jasmin Hidayat", class: "11 B", dob: "2002-07-02" },
    { id: "18", name: "Fauzan Alif", class: "11 B", dob: "2002-06-17" },
    { id: "19", name: "Putri Dwi", class: "11 B", dob: "2005-08-13" },
    { id: "20", name: "Gita Wijayanti", class: "11 B", dob: "2004-09-30" },
    { id: "21", name: "Joni Prabowo", class: "11 B", dob: "2003-12-08" },
    { id: "22", name: "Mila Zulfikar", class: "11 B", dob: "2003-04-17" },
    { id: "23", name: "Dini Rahmawati", class: "11 B", dob: "2002-10-21" },
    { id: "24", name: "Roni Permana", class: "11 B", dob: "2002-03-10" },
    { id: "25", name: "Vina Juwita", class: "11 B", dob: "2005-11-02" },
    { id: "26", name: "Mulyadi Pratama", class: "11 B", dob: "2004-01-16" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)/profil')}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Data Siswa</Text>
      </View>

      {/* Tabel Siswa */}
      <ScrollView contentContainerStyle={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>No</Text>
            <Text style={styles.tableHeaderText}>Nama</Text>
            <Text style={styles.tableHeaderText}>Kelas</Text>
            <Text style={styles.tableHeaderText}>Tgl Lahir</Text>
          </View>

          <FlatList
            data={students}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={styles.tableRow}>
                <Text style={styles.tableText}>{index + 1}</Text>
                <Text style={styles.tableText}>{item.name}</Text>
                <Text style={styles.tableText}>{item.class}</Text>
                <Text style={styles.tableText}>{item.dob}</Text>
              </View>
            )}
          />
        </View>
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
  tableContainer: {
    padding: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#0057A0",
    paddingVertical: 10,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  tableHeaderText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    width: "25%",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableText: {
    fontSize: 14,
    color: "#000",
    width: "25%",
  },
});
