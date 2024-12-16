import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Menggunakan Entypo untuk tombol kembali
import { router } from 'expo-router'; // Pastikan Expo Router diaktifkan

export default function AbsenPulang() {
  const [timeIn, setTimeIn] = useState(''); // Menyimpan waktu masuk
  const [timeOut, setTimeOut] = useState(''); // Menyimpan waktu pulang

  const handleAbsenPulang = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTimeOut(currentTime); // Set waktu pulang dengan waktu saat ini
  };

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
      <Text style={styles.title}>Absensi Pulang</Text>

      {/* Form Absen Pulang */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Waktu Masuk:</Text>
        <Text style={styles.timeText}>{timeIn || 'Belum Absen Masuk'}</Text>

        <Text style={styles.label}>Waktu Pulang:</Text>
        <Text style={styles.timeText}>{timeOut || 'Belum Absen Pulang'}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAbsenPulang}>
          <Text style={styles.buttonText}>Absen Pulang</Text>
        </TouchableOpacity>
      </View>
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
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Shadow untuk Android
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  timeText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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
