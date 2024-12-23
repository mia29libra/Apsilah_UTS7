import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const data = [
  { id: '1', date: '10 Desember 2024', status: 'Hadir' },
  { id: '2', date: '09 Desember 2024', status: 'Izin' },
  { id: '3', date: '08 Desember 2024', status: 'Alpha' },
  { id: '4', date: '07 Desember 2024', status: 'Hadir' },
  { id: '5', date: '06 Desember 2024', status: 'Hadir' },
  { id: '6', date: '05 Desember 2024', status: 'Hadir' },
  { id: '7', date: '04 Desember 2024', status: 'Hadir' },
  { id: '8', date: '03 Desember 2024', status: 'Hadir' },
  { id: '9', date: '02 Desember 2024', status: 'Hadir' },
  { id: '10', date: '01 Desember 2024', status: 'Hadir' },
];

export default function RiwayatScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemDate}>{item.date}</Text>
      <Text style={styles.itemStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          router.back()
        }}>
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Riwayat</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Riwayat List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6AB1D7',
    padding: 15,
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemDate: {
    fontSize: 16,
    color: '#333',
  },
  itemStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6AB1D7',
  },
});
