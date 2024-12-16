import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import { router } from 'expo-router';

export default function CutiScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({
    '2025-01-15': { selected: true, marked: true, dotColor: 'red', customStyles: { container: { backgroundColor: '#FFD54F' }, text: { color: 'black' } }, note: 'Cuti' },
    '2025-02-20': { selected: true, marked: true, dotColor: 'red', customStyles: { container: { backgroundColor: '#FFD54F' }, text: { color: 'black' } }, note: 'Cuti' },
    '2025-05-10': { selected: true, marked: true, dotColor: 'red', customStyles: { container: { backgroundColor: '#FFD54F' }, text: { color: 'black' } }, note: 'Cuti' },
    // Anda bisa menambahkan lebih banyak tanggal cuti di sini
  });

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleBack = () => {
    router.push('/(tabs)/homeabsensi'); // Navigasi kembali ke halaman Home
  };

  // Fungsi untuk mendapatkan keterangan dari tanggal yang dipilih
  const getDateNote = (date) => {
    return markedDates[date]?.note || ''; // Mengambil note (misalnya 'Cuti') jika ada
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <FontAwesome name="chevron-left" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>KALENDER 2025</Text>

      {/* Calendar for 2025 */}
      <Calendar
        style={styles.calendar}
        current={'2025-01-01'}
        minDate={'2025-01-01'}
        maxDate={'2025-12-31'}
        onDayPress={handleDateSelect}
        monthFormat={'yyyy MM'}
        hideExtraDays={true}
        markedDates={markedDates} // Tanggal-tanggal yang sudah diberi keterangan "Cuti"
      />

      {/* Selected Date */}
      {selectedDate ? (
        <View style={styles.dateContainer}>
          <Text style={styles.selectedDate}>Tanggal yang dipilih: {selectedDate}</Text>
          {/* Tampilkan keterangan jika tanggal yang dipilih ada keterangan */}
          {getDateNote(selectedDate) ? (
            <Text style={styles.noteText}>Keterangan: {getDateNote(selectedDate)}</Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', // Mengganti background dengan warna biru langit
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  calendar: {
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  dateContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFD54F',
    borderRadius: 10,
  },
  selectedDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  noteText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});
