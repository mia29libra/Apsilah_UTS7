import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* Title (Absensi Online) */}
      <Text style={styles.title}>Absensi Online</Text>

      {/* Icon for Absensi (not circle) */}
      <View style={styles.iconContainer}>
        <FontAwesome name="book" size={100} color="#1976D2" />
      </View>

      {/* Login Button with icon */}
      <TouchableOpacity 
        onPress={() => {
          router.push('/login');
        }}
        style={styles.loginButton}
      >
        <MaterialIcons name="login" size={30} color="white" />
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Button with icon */}
      <TouchableOpacity style={styles.signupButton}>
        <MaterialIcons name="person-add" size={30} color="white" />
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFC107',
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    top: 50, // Menempatkan teks di atas
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:100,
  },
  loginButton: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop:150,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  signupButton: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#FFC107',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
