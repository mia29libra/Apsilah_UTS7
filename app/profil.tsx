import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import ikon

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileIcon}>
          <Icon name="account-circle" size={70} color="#fff" />
        </View>
        <Text style={styles.profileName}>Ismiatul Karomah</Text>
      </View>

      {/* Menu Section */}
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.card}>
          <Icon name="calendar-clock" size={50} color="#FFA000" />
          <Text style={styles.cardText}>Jadwal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="calendar-check" size={50} color="#FFA000" />
          <Text style={styles.cardText}>Absen Pelajaran</Text>
        </TouchableOpacity>
      </View>

      {/* Links */}
      <View style={styles.links}>
        <TouchableOpacity style={styles.linkButton}>
          <Icon name="account-tie" size={25} color="#000" style={styles.linkIcon} />
          <Text style={styles.linkText}>Guru Pengajar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Icon name="cog" size={25} color="#000" style={styles.linkIcon} />
          <Text style={styles.linkText}>Pengaturan Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Icon name="database" size={25} color="#000" style={styles.linkIcon} />
          <Text style={styles.linkText}>Data Siswa</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>KELUAR</Text>
      </TouchableOpacity>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="home" size={25} color="#000" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="account" size={25} color="#000" />
          <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#0057A0",
    padding: 20,
    alignItems: "center",
  },
  profileIcon: {
    marginBottom: 10,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#fff8e1",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    width: "40%",
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    marginTop: 10,
  },
  links: {
    paddingHorizontal: 20,
  },
  linkButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
  },
  linkIcon: {
    marginRight: 10,
  },
  linkText: {
    fontSize: 16,
    color: "#000",
  },
  logoutButton: {
    backgroundColor: "#d3e3fc",
    margin: 20,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  logoutText: {
    fontSize: 16,
    color: "#0057A0",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFCA28",
    padding: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#000",
    marginTop: 5,
  },
});
