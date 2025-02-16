import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Platform, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as Device from 'expo-device';


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setIsIOS(Platform.OS === 'ios');
  }, []);

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, isIOS && styles.iosSafeArea]}>
      <View style={styles.container}>
        <Text style={[styles.title, isIOS && styles.iosTitle]}>SnowEase</Text>
        
        <TextInput
          style={[styles.input, isIOS && styles.iosInput]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, isIOS && styles.iosInput]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        <TouchableOpacity style={[styles.button, isIOS && styles.iosButton]} onPress={handleLogin}>
          <Text style={[styles.buttonText, isIOS && styles.iosButtonText]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.signupTextContainer, isIOS && styles.iosSignupTextContainer]} onPress={() => Alert.alert('Sign up functionality')}>
          <Text style={[styles.signupText, isIOS && styles.iosSignupText]}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>

        {/* Adding 'How We Work' Section */}
        <View style={[styles.howWeWorkContainer, isIOS && styles.iosHowWeWorkContainer]}>
          <Text style={[styles.howWeWorkTitle, isIOS && styles.iosHowWeWorkTitle]}>How We Work</Text>
          <View style={[styles.howWeWorkItem, isIOS && styles.iosHowWeWorkItem]}>
            <FontAwesome name="check-circle" size={20} color={isIOS ? "#007AFF" : "#4CAF50"} />
            <Text style={[styles.howWeWorkText, isIOS && styles.iosHowWeWorkText]}>
              <Text style={[styles.bold, isIOS && styles.iosBold]}>Request:</Text> Enter your address and get an instant quote.
            </Text>
          </View>
          <View style={[styles.howWeWorkItem, isIOS && styles.iosHowWeWorkItem]}>
            <FontAwesome name="map" size={20} color={isIOS ? "#007AFF" : "#4CAF50"} />
            <Text style={[styles.howWeWorkText, isIOS && styles.iosHowWeWorkText]}>
              <Text style={[styles.bold, isIOS && styles.iosBold]}>Schedule:</Text> Choose a time that works for you, and we’ll handle the rest.
            </Text>
          </View>
          <View style={[styles.howWeWorkItem, isIOS && styles.iosHowWeWorkItem]}>
            <FontAwesome name="calendar-check" size={20} color={isIOS ? "#007AFF" : "#4CAF50"} />
            <Text style={[styles.howWeWorkText, isIOS && styles.iosHowWeWorkText]}>
              <Text style={[styles.bold, isIOS && styles.iosBold]}>Enjoy:</Text> We’ll clear your snow while you relax and get back to your day.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  iosSafeArea: {
    //backgroundColor: '#FFFFFF', // Different background for iOS
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: 40,
    letterSpacing: 1.5,
    textShadowColor: '#FFF',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  iosTitle: {
    color: '#007AFF', // Different title color for iOS
    fontSize: 48,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  iosInput: {
    borderColor: '#C7C7CC',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  iosButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iosButtonText: {
    // No specific changes for iOS, keeping it consistent
  },
  signupTextContainer:{

  },
  signupText: {
    textAlign: 'center',
    color: '#4CAF50',
    fontSize: 16,
    marginTop: 10,
  },
  iosSignupTextContainer: {
  },
  iosSignupText: {
    color: '#007AFF',
  },
  howWeWorkContainer: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    //shadowColor: 'rgba(0, 0, 0, 0.1)', // Removed web-specific shadow
    //shadowOffset: { width: 0, height: 4 },
    //shadowOpacity: 0.1,
    //shadowRadius: 6,
  },
  iosHowWeWorkContainer: {
    marginTop: 20,
  },
  howWeWorkTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  iosHowWeWorkTitle: {
    color: '#000',
  },
  howWeWorkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iosHowWeWorkItem: {
    // No specific changes for iOS
  },
  howWeWorkText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  iosHowWeWorkText: {
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
  iosBold: {
    // No specific changes for iOS
  },
});

export default Login;








