import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Menggunakan FontAwesome
import { router } from 'expo-router';

export default function PengumumanScreen() {
  // Daftar pengumuman
  const pengumumanData = [
    {
      id: '1',
      judul: 'Libur Akhir Tahun',
      tanggal: '2025-12-20',
      deskripsi: 'Sekolah akan libur mulai tanggal 20 Desember hingga 2 Januari.',
    },
    {
      id: '2',
      judul: 'Ujian Tengah Semester',
      tanggal: '2025-10-15',
      deskripsi: 'Ujian tengah semester dimulai pada 15 Oktober 2025.',
    },
    {
      id: '3',
      judul: 'Pendaftaran Cuti',
      tanggal: '2025-08-01',
      deskripsi: 'Pendaftaran cuti untuk guru dan staf dimulai pada 1 Agustus 2025.',
    },
  ];

  // Navigasi kembali ke halaman utama
  const handleBack = () => {
    router.push('/(tabs)/homeabsensi'); // Navigasi kembali ke halaman Home
  };

  // Render item pengumuman
  const renderPengumuman = ({ item }) => (
    <TouchableOpacity style={styles.pengumumanCard} onPress={() => console.log('Detail pengumuman', item.id)}>
      <Text style={styles.judul}>{item.judul}</Text>
      <Text style={styles.tanggal}>{item.tanggal}</Text>
      <Text style={styles.deskripsi}>{item.deskripsi}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Tombol Kembali dengan ikon < */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <FontAwesome name="chevron-left" size={30} color="white" /> {/* Ikon panah kiri */}
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Pengumuman Sekolah</Text>

      {/* Daftar Pengumuman */}
      <FlatList
        data={pengumumanData}
        renderItem={renderPengumuman}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Menambahkan background putih
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  backButton: {
    marginBottom: 20,
    backgroundColor: 'skyblue', // Warna biru langit pada tombol kembali
    padding: 10,
    borderRadius: 50,
    elevation: 3, // Efek bayangan agar tombol lebih terlihat
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black', // Mengubah teks menjadi hitam untuk kontras yang lebih baik
  },
  list: {
    flex: 1,
  },
  pengumumanCard: {
    backgroundColor: 'white', // Background putih pada kartu pengumuman
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  judul: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tanggal: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  deskripsi: {
    fontSize: 14,
    color: '#555',
  },
});
