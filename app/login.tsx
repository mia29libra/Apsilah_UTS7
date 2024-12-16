import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Absensi Online</Text>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Login</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            placeholder="Email ..."
            placeholderTextColor="#c4c4c4"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="Password ..."
            placeholderTextColor="#c4c4c4"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => {
            router.replace('/(tabs)/homeabsensi');
          }}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Absensi Online Berbasis GPS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // White background for the whole container
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00509D',  // Blue color for the header
    marginBottom: 30,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',  // White background for the form container
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#00509D',  // Blue border for the form container
  },
  loginText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00509D',  // Blue text for login title
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#00509D',  // Blue color for input labels
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',  // White background for inputs
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#87CEEB',  // Light blue color for the login button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',  // White text on the blue button
  },
  footer: {
    fontSize: 12,
    color: '#00509D',  // Blue footer text
    marginTop: 30,
    textAlign: 'center',
  },
});
