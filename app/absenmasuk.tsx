import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Menggunakan Entypo untuk tombol kembali
import { router } from 'expo-router'; // Pastikan Expo Router diaktifkan

const students = [
  { id: '1', name: 'Ismiatul Karomah', class: '11 TI B' },
  { id: '2', name: 'Ulfatus Sarifah', class: '11 TI B' },
  { id: '3', name: 'Riska Amelia Putri', class: '11 TI B' },
  { id: '4', name: 'Wiam', class: '11 TI B' },
  { id: '6', name: 'Habibur Rohman', class: '11 TI B' },
  { id: '7', name: 'Rohman', class: '11 TI B' },
  { id: '8', name: 'Taufik Hidayat', class: '11 TI B' },
  { id: '9', name: 'Trie Yuniarsih', class: '11 TI B' },
  { id: '10', name: 'Putri Dwi Kharisma', class: '11 TI B' },
  { id: '11', name: 'Putri', class: '11 TI B' },
];

export default function AttendanceTable() {
  const [attendance, setAttendance] = useState({});

  const handleAttendance = (id) => {
    setAttendance((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderStudent = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.class}</Text>
      <TouchableOpacity
        style={[
          styles.attendanceButton,
          attendance[item.id] && styles.attendanceButtonChecked,
        ]}
        onPress={() => handleAttendance(item.id)}
      >
        <Text style={styles.attendanceButtonText}>
          {attendance[item.id] ? '✓' : 'Hadir'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tombol Kembali dengan Ikon "<" seperti di HP */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/(tabs)/homeabsensi')} // Navigate to Home screen
      >
        <Entypo name="chevron-left" size={30} color="white" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>Daftar Absensi</Text>

      {/* Tabel Header */}
      <View style={[styles.row, styles.headerRow]}>
        <Text style={[styles.cell, styles.headerCell]}>Nama Siswa</Text>
        <Text style={[styles.cell, styles.headerCell]}>Kelas</Text>
        <Text style={[styles.cell, styles.headerCell]}>Status</Text>
      </View>

      {/* Tabel Body */}
      <FlatList
        data={students}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id}
        style={styles.table}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  table: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  headerRow: {
    backgroundColor: '#6AB1D7',
    borderRadius: 5,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  headerCell: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  attendanceButton: {
    backgroundColor: '#FFD54F',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendanceButtonChecked: {
    backgroundColor: '#4CAF50',
  },
  attendanceButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: '#6AB1D7',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    zIndex: 10, // Memastikan tombol tetap di atas konten lainnya
  },
});
