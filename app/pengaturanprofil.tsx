import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function PengaturanProfil() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)/profil')}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pengaturan Profil</Text>
      </View>

      {/* Form Input */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nama Lengkap</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nama lengkap"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nomor Telepon</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nomor telepon"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Simpan Perubahan</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0057A0",
    padding: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  formContainer: {
    padding: 20,
    flexGrow: 1,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#0057A0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
