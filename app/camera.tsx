import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/Entypo";
import { router } from "expo-router";  // Jika Anda menggunakan Expo Router

const { width, height } = Dimensions.get("window");

export default function CameraPage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    // Minta izin akses kamera
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");

      // Minta izin lokasi
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      if (locationStatus === "granted") {
        const locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData.coords);
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Meminta izin akses kamera dan lokasi...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Izinkan akses kamera dan lokasi untuk melanjutkan.</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Header dengan tombol kembali */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate("/(tabs)/homeabsensi")}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Absensi Kamera</Text>
      </View>

      {/* Tampilan kamera dengan bingkai */}
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.cameraFrame}>
            <Text style={styles.cameraText}>Arahkan Kamera untuk Absensi</Text>
          </View>
        </Camera>
      </View>

      {/* Lokasi GPS */}
      {location && (
        <View style={styles.locationInfo}>
          <Text style={styles.locationText}>
            Lokasi: {location.latitude.toFixed(2)}, {location.longitude.toFixed(2)}
          </Text>
        </View>
      )}

      {/* Tombol untuk mengambil foto absensi */}
      <TouchableOpacity style={styles.captureButton} onPress={() => alert("Absensi berhasil!")}>
        <Text style={styles.captureText}>Ambil Foto</Text>
      </TouchableOpacity>
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
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "relative",
  },
  camera: {
    width: width - 40,
    height: height / 2,
    borderRadius: 10,
    overflow: "hidden",
  },
  cameraFrame: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 4,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  locationInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#333",
  },
  captureButton: {
    backgroundColor: "#0057A0",
    padding: 15,
    margin: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  captureText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
