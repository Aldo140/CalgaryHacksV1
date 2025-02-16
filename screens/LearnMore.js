import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';  // For navigation

const LearnMore = () => {
  const navigation = useNavigation(); // Using navigation hook

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigating back to Home.js
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Home Button Icon */}
      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Ionicons name="home" size={40} color="#4CAF50" />
      </TouchableOpacity>

      <Ionicons name="snow" size={60} color="#4CAF50" style={styles.icon} />
      <Text style={styles.title}>About SnowEase</Text>
      
      <Text style={styles.paragraph}>
        SnowEase is more than just a snow plowing service—it's a way to bring convenience and safety to our community during harsh winters. 
        Our vision is to provide a platform that connects homeowners with trusted, highly-rated local snow plowers who take pride in their work. 
      </Text>
      
      <Text style={styles.paragraph}>
        We aim to make snow removal stress-free, allowing you to focus on your day while ensuring your driveways and walkways are clear and safe. 
        By using SnowEase, you’re not just hiring help—you’re supporting local professionals who are committed to excellent service.
      </Text>
      
      <Text style={styles.subTitle}>Why Choose SnowEase?</Text>
      <Text style={styles.paragraph}>
        - Instant quotes tailored to your location.{"\n"}
        - Flexible scheduling to match your needs.{"\n"}
        - A focus on quality and community connections.{"\n"}
        - Transparent ratings and profiles for every plower.
      </Text>

      <Text style={styles.subTitle}>Our Vision</Text>
      <Text style={styles.paragraph}>
        We envision a world where technology empowers people to tackle everyday challenges with ease and reliability. SnowEase strives to 
        simplify winter life while creating opportunities for local professionals to thrive. Together, we can ensure that no one feels overwhelmed 
        by snowstorms again.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  homeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#4CAF50',
 
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 15,
    fontFamily: 'Arial',
    letterSpacing: 1.5,
    fontStyle: 'italic',
  },
});

export default LearnMore;

