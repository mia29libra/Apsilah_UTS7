import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Absensi Online</Text>

      {/* Placeholder Circle (representing the image area) */}
      <View style={styles.circle}>
        <Text style={styles.circleText}>📚</Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton}>
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
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E1E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  circleText: {
    fontSize: 48,
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    width: '80%',
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
