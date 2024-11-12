import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Di sini tambahkan logika login yang Anda inginkan
    if (username && password) {
      Alert.alert("Login Success", `Username: ${username}\nPassword: ${password}`);
    } else {
      Alert.alert("Error", "Please enter both username and password.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Silahkan masukkan username dan password</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
        <Ionicons name="log-in" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  promptText: {
    marginBottom: 20,
    fontSize: 16,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    marginRight: 8,
  },
});
