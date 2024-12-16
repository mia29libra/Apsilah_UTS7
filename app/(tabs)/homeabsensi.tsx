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
          <Text style={styles.userName}>Ismiatul Karomah</Text>
        </View>
        <FontAwesome name="user-circle" size={40} color="white" style={styles.profileIcon} />
      </View>

      {/* Date Section with TouchableOpacity */}
      <TouchableOpacity 
        style={styles.dateContainer}
        onPress={() => router.push('/tanggal')}  // Navigasi ke halaman datepicker
      >
        <Text style={styles.dateText}>14/Desember/2024</Text>
        <Entypo name="chevron-right" size={20} color="white" style={styles.dateIcon} />
      </TouchableOpacity>

      {/* Icon Grid (Navigation) */}
      <View style={styles.iconGrid}>
        <TouchableOpacity 
          onPress={() => router.push('/camera')} 
          style={styles.iconButton}
        >
          <FontAwesome name="camera" size={24} color="black" />
          <Text style={styles.iconLabel}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/profile')} 
          style={styles.iconButton}
        >
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.iconLabel}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/cuti')} 
          style={styles.iconButton}
        >
          <FontAwesome name="calendar" size={24} color="black" />
          <Text style={styles.iconLabel}>Cuti</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/riwayat')} 
          style={styles.iconButton}
        >
          <FontAwesome name="book" size={24} color="black" />
          <Text style={styles.iconLabel}>Riwayat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/pengumuman')} 
          style={styles.iconButton}
        >
          <FontAwesome name="bell" size={24} color="black" />
          <Text style={styles.iconLabel}>Pengumuman</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/izin')} 
          style={styles.iconButton}
        >
          <FontAwesome name="pencil" size={24} color="black" />
          <Text style={styles.iconLabel}>Izin</Text>
        </TouchableOpacity>
      </View>

      {/* Attendance Section - Absen Masuk and Absen Pulang Buttons */}
      <View style={styles.attendanceContainer}>
        <TouchableOpacity 
          onPress={() => router.push('/absenmasuk')} 
          style={styles.attendanceButton}
        >
          <Text style={styles.attendanceButtonText}>Absen Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => router.push('/absenpulang')} 
          style={styles.attendanceButton}
        >
          <Text style={styles.attendanceButtonText}>Absen Pulang</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    backgroundColor: '#00509D',  // Darker blue for header
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
    backgroundColor: '#6AB1D7',  // Light blue for date section
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
    backgroundColor: '#FFD54F',  // Soft yellow for icon buttons
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
  attendanceContainer: {
    marginTop: 20, // Give space between icons and attendance buttons
  },
  attendanceButton: {
    backgroundColor: '#1976D2',  // Consistent blue for attendance buttons
    borderRadius: 10,
    padding: 10,
    marginVertical: 10, // Add vertical margin between the buttons
  },
  attendanceButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
