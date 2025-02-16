import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

let MapView, Marker;
if (Platform.OS !== 'web') {
  // Import react-native-maps only for iOS/Android
  MapView = require('react-native-maps').default;
  Marker = require('react-native-maps').Marker;
}

const Settings = () => {
  const navigation = useNavigation();
  const randomAddress = "1234 Elm Street, Suite 101, Calgary, AB T2P 2V7";
  const mapPosition = [51.0447, -114.0719]; // Calgary coordinates

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back
  };

  const handleLogout = () => {
    navigation.navigate('Welcome'); // Navigate to Welcome page
  };

  const handleRateJob = () => {
    console.log('Rate button clicked!');
    // Implement job rating logic here
  };

  // Web view URL for Google Maps Embed API
  const googleMapsURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCnSH7CGsnZCEIswd6-mNlTbmJR99EFLfo&q=${randomAddress}&zoom=14`;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={100} color="#4CAF50" />
        <Text style={styles.name}>Aldo Ortiz</Text>
        <Text style={styles.email}>aldortiz@example.com</Text>
      </View>

      {/* Address Section with Better Formatting */}
      <Text style={styles.sectionTitle}>Where Am I?</Text>
      <Text style={styles.address}>{randomAddress}</Text>

      {Platform.OS === 'web' ? (
        // Render Google Maps iframe for web
        <iframe
          width="100%"
          height="300"
          src={googleMapsURL}
          style={styles.map}
          allowFullScreen
          loading="lazy"
        />
      ) : (
        // Render react-native-maps for iOS/Android
        MapView && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: mapPosition[0],
              longitude: mapPosition[1],
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={{ latitude: mapPosition[0], longitude: mapPosition[1] }} />
          </MapView>
        )
      )}

      {/* Jobs Requested by User Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Jobs Requested by You</Text>

        {/* Example of a job requested */}
        <View style={styles.jobItem}>
          <Text style={styles.job}>Snow Shoveling - $30</Text>
          <Text style={styles.jobDescription}>Done by John Doe, Rating: 4.5/5</Text>
          <TouchableOpacity style={styles.rateButton} onPress={handleRateJob}>
            <Text style={styles.rateButtonText}>Rate</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Saved Payment Method Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Saved Payment Method</Text>
        <Text style={styles.payment}>Visa Ending in 1234</Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out" size={24} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={30} color="#fff" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Volunteer Opportunities Section */}
      <View style={styles.volunteerSection}>
        <Text style={styles.volunteerTitle}>Volunteer Opportunities 👐</Text>
        <Text style={styles.volunteerText}>
          Have you considered helping those who are affected by the weather and struggling with mobility issues? During winter months, many people are trapped indoors due to snow, icy walkways, or other obstacles. Your skills could make a big difference!
        </Text>
        <Text style={styles.volunteerText}>
          Whether it’s snow shoveling, running errands, or simply offering a helping hand, there are plenty of opportunities to give back. By volunteering, you help those who need it most, and you'll be creating a more connected and caring community.
        </Text>
        <Text style={styles.volunteerText}>
          Imagine the impact you could make in your neighborhood: freeing someone from the isolation caused by bad weather. Your efforts will not only make someone's day but also create lasting goodwill that will come back to you tenfold.
        </Text>
        <Text style={styles.volunteerCall}>
          Don’t wait! Reach out today and offer your time to someone who needs it. 
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  address: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  map: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  jobItem: {
    marginBottom: 10,
  },
  job: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 14,
    color: '#777',
  },
  rateButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  payment: {
    fontSize: 16,
    color: '#555',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  volunteerSection: {
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  volunteerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 10,
  },
  volunteerText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  volunteerCall: {
    fontSize: 18,
    color: '#388E3C',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Settings;











