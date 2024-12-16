import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity 
        onPress={() => router.push('/(tabs)/homeabsensi')} 
        style={styles.backButton}
      >
        <Entypo name="chevron-left" size={24} color="white" />
      </TouchableOpacity>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Siswa</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Ganti URL dengan foto siswa
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Nama Siswa: Ismiatlkrmh</Text>
          <Text style={styles.profileClass}>Kelas: Teknik Informatika</Text>
          <Text style={styles.profileID}>ID Siswa: 2021020100003</Text>
        </View>
      </View>

      {/* Attendance Information */}
      <View style={styles.attendanceSection}>
        <Text style={styles.attendanceTitle}>Ringkasan Kehadiran</Text>
        <View style={styles.attendanceSummary}>
          <View style={styles.attendanceBox}>
            <Text style={styles.attendanceNumber}>25</Text>
            <Text style={styles.attendanceLabel}>Hadir</Text>
          </View>
          <View style={styles.attendanceBox}>
            <Text style={styles.attendanceNumber}>2</Text>
            <Text style={styles.attendanceLabel}>Izin</Text>
          </View>
          <View style={styles.attendanceBox}>
            <Text style={styles.attendanceNumber}>1</Text>
            <Text style={styles.attendanceLabel}>Sakit</Text>
          </View>
          <View style={styles.attendanceBox}>
            <Text style={styles.attendanceNumber}>0</Text>
            <Text style={styles.attendanceLabel}>Alpha</Text>
          </View>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="edit" size={24} color="#1976D2" />
          <Text style={styles.menuText}>Edit Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="calendar-today" size={24} color="#1976D2" />
          <Text style={styles.menuText}>Jadwal Pelajaran</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="logout" size={24} color="#1976D2" />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  backButton: {
    backgroundColor: '#6AB1D7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileClass: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  profileID: {
    fontSize: 14,
    color: 'gray',
  },
  attendanceSection: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  attendanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  attendanceSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attendanceBox: {
    alignItems: 'center',
  },
  attendanceNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  attendanceLabel: {
    fontSize: 14,
    color: 'gray',
  },
  menuContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
