import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const students = [
  { id: '1', name: 'John Doe', class: 'XII IPA 1' },
  { id: '2', name: 'Jane Smith', class: 'XII IPA 2' },
  { id: '3', name: 'Alice Johnson', class: 'XII IPS 1' },
  { id: '4', name: 'Bob Brown', class: 'XII IPA 3' },
  { id: '5', name: 'Charlie Green', class: 'XII IPS 2' },
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
});
