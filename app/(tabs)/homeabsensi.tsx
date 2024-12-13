import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Selamat Pagi</Text>
          <Text style={styles.userName}>Miaaa</Text>
        </View>
        <FontAwesome name="user-circle" size={40} color="white" style={styles.profileIcon} />
      </View>

      {/* Date Section */}
      <TouchableOpacity style={styles.dateContainer}>
        <Text style={styles.dateText}>09 November 2024</Text>
        <Entypo name="chevron-right" size={20} color="white" style={styles.dateIcon} />
      </TouchableOpacity>

      {/* Icon Grid */}
      <View style={styles.iconGrid}>
        <IconButton icon="camera" label="Camera" />
        <IconButton icon="user" label="Profile" />
        <IconButton icon="calendar" label="Cuti" />
        <IconButton icon="book" label="Riwayat" />
        <IconButton icon="check" label="Hadir" />
        <IconButton icon="pencil" label="Izin" />
      </View>

      {/* Attendance Section */}
      <Text style={styles.attendanceText}>Absen Bulan November 2024</Text>
      <View style={styles.attendanceContainer}>
        <TouchableOpacity 
        onPress={() => {
          router.push('/absenmasuk')
        }}
        style={styles.attendanceButton}>
          <Text style={styles.attendanceButtonText}>Absen Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.attendanceButton}>
          <Text style={styles.attendanceButtonText}>Absen Pulang</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      
    </View>
  );
}

function IconButton({ icon, label }) {
  return (
    <TouchableOpacity 
    onPress={() => {
      router.push('/riwayat')
    }}
    style={styles.iconButton}>
      <FontAwesome name={icon} size={24} color="black" />
      <Text style={styles.iconLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6AB1D7',
    padding: 20,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'column',
  },
  greeting: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    color: 'white',
    fontSize: 16,
  },
  profileIcon: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFC107',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  dateIcon: {
    marginLeft: 10,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: '30%',
    backgroundColor: '#FFD54F',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  iconLabel: {
    marginTop: 5,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  attendanceText: {
    marginTop: 20,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  attendanceContainer: {
    marginTop: 10,
  },
  attendanceButton: {
    backgroundColor: '#1976D2',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  attendanceButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFD54F',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: 'blue',
    fontSize: 12,
    marginTop: 5,
  },
});
