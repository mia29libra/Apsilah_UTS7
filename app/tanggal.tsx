import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Tombol kembali menggunakan ikon Entypo
import DateTimePicker from '@react-native-community/datetimepicker'; // DateTimePicker untuk memilih tanggal
import { router } from 'expo-router'; // Untuk navigasi

export default function DatePickerScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Menyimpan tanggal yang dipilih
  const [showDatePicker, setShowDatePicker] = useState(false); // Menampilkan atau menyembunyikan DatePicker

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date); // Set tanggal yang dipilih
    }
    setShowDatePicker(false); // Menutup DatePicker setelah memilih tanggal
  };

  const openDatePicker = () => {
    setShowDatePicker(true); // Menampilkan DatePicker saat tombol pilih tanggal ditekan
  };

  // Fungsi untuk format tanggal menjadi "DD/Bulan/YYYY"
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Menambahkan leading zero jika hari < 10
    const monthNames = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const month = monthNames[date.getMonth()]; // Menyimpan nama bulan dalam Bahasa Indonesia
    const year = date.getFullYear(); // Tahun
    return `${day}/${month}/${year}`; // Format "DD/Bulan/YYYY"
  };

  return (
    <View style={styles.container}>
      {/* Tombol Kembali dengan Ikon "<" */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/(tabs)/homeabsensi')} // Navigasi kembali ke halaman HomeAbsensi
      >
        <Entypo name="chevron-left" size={35} color="white" />
      </TouchableOpacity>

      {/* Header dengan background gradient */}
      <View style={styles.header}>
        <Text style={styles.title}>Pilih Tanggal</Text>
      </View>

      {/* Menampilkan tanggal yang dipilih */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Tanggal yang dipilih:</Text>
        <Text style={styles.selectedDate}>
          {formatDate(selectedDate)} {/* Menampilkan tanggal dalam format custom */}
        </Text>
      </View>

      {/* Tombol untuk memilih tanggal */}
      <TouchableOpacity style={styles.button} onPress={openDatePicker}>
        <Text style={styles.buttonText}>Pilih Tanggal</Text>
      </TouchableOpacity>

      {/* Tampilkan DatePicker jika 'showDatePicker' true */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Background putih
    padding: 20,
  },
  header: {
    backgroundColor: '#1E88E5', // Warna biru lebih gelap untuk header
    borderRadius: 20,
    paddingVertical: 40,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Bayangan untuk efek kedalaman
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // Untuk Android, memberikan bayangan pada header
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF', // Teks putih untuk judul
    textAlign: 'center',
    letterSpacing: 1,
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000', // Teks hitam
  },
  selectedDate: {
    fontSize: 18,
    color: '#000000', // Teks hitam
    marginTop: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#FFC107', // Warna kuning cerah untuk tombol
    padding: 15,
    borderRadius: 15,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000', // Bayangan tombol
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // Memberikan bayangan pada tombol di Android
  },
  buttonText: {
    color: '#FFFFFF', // Teks putih untuk tombol
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Background semi-transparan untuk ikon kembali
    borderRadius: 50,
    padding: 12,
    elevation: 3, // Bayangan untuk efek 3D
  },
});
