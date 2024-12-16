import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function IzinScreen() {
  const [reason, setReason] = useState('');
  const [date, setDate] = useState('');

  const submitForm = () => {
    if (!reason || !date) {
      alert('Mohon lengkapi semua data!');
      return;
    }
    alert(`Pengajuan izin untuk tanggal ${date} berhasil dikirim dengan alasan: ${reason}`);
    // Tambahkan logika untuk mengirim data ke backend jika diperlukan
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity 
        onPress={() => router.push('/(tabs)/homeabsensi')} 
        style={styles.backButton}
      >
        <Entypo name="chevron-left" size={24} color="white" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Formulir Izin</Text>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Tanggal Izin</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#A9A9A9"
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>Alasan Izin</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Masukkan alasan izin Anda"
          placeholderTextColor="#A9A9A9"
          multiline={true}
          numberOfLines={4}
          value={reason}
          onChangeText={setReason}
        />

        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text style={styles.submitButtonText}>Kirim Pengajuan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6AB1D7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 50,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    backgroundColor: '#F9F9F9',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
