import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, ScrollView, Animated, Platform, SafeAreaView, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  const navigation = useNavigation();
  const [headerAnimation] = useState(new Animated.Value(0)); // For sticky header
  const plowers = [
    { id: '1', name: 'John Doe', rating: 4.8 },
    { id: '2', name: 'Jane Smith', rating: 4.5 },
    { id: '3', name: 'Mark Miller', rating: 4.9 },
  ];

  const contacts = [
    { id: '1', name: 'Mom' },
    { id: '2', name: 'Person 1' },
    { id: '3', name: 'Person 2' },
  ];

  const handleLearnMore = () => {
    navigation.navigate('LearnMore');
  };

  const handleAnticipateSnow = () => {
    alert("Anticipating snow removal based on weather forecasts!");
  };

  const handleFriendsFamily = () => {
    navigation.navigate('FriendsFamily');
  };

  const handleOrderSnowServices = () => {
    alert("Ordering snow services for your contacts...");
  };

  // Scroll animation for sticky header
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: headerAnimation } } }],
    { useNativeDriver: false }
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {/* Sticky Header with Animation */}
        <Animated.View
          style={[styles.header, { transform: [{ translateY: headerAnimation.interpolate({ inputRange: [0, 150], outputRange: [0, -100], extrapolate: 'clamp' }) }] }]}
        >
          <Text style={styles.headerText}>Aldo's Dashboard</Text>
        </Animated.View>

        {/* Content below header */}
        <View style={styles.contentContainer}>
          {/* Active Plans Section */}
          <View style={styles.planSection}>
            <Text style={styles.planTitle}>Active Plans</Text>
            <Text style={styles.planDescription}>
              You’re enrolled in the Gold Plan! Enjoy hassle-free, hands-off pre-approval for snow removal depending on snowfall.
            </Text>
            <TouchableOpacity style={styles.planButton} onPress={handleLearnMore}>
              <Text style={styles.planButtonText}>Learn More About Plans</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.planButton} onPress={handleAnticipateSnow}>
              <Text style={styles.planButtonText}>Anticipate Snow Shovellings</Text>
            </TouchableOpacity>
          </View>

          {/* Friends & Family Section */}
          <View style={styles.planSection}>
            <Text style={styles.planTitle}>Friends & Family</Text>
            <Text style={styles.planDescription}>
              Pay for your loved ones' snow removal in real-time, helping family and friends stay stress-free during winter storms!
            </Text>

            {/* Swipeable Contacts List */}
            <Text style={styles.contactListTitle}>Your Contacts:</Text>
            <FlatList
              data={contacts}
              renderItem={({ item }) => (
                <TouchableNativeFeedback onPress={() => alert(`Selected ${item.name}`)}>
                  <View style={styles.contactCard}>
                    <Text style={styles.contactItem}>{item.name}</Text>
                  </View>
                </TouchableNativeFeedback>
              )}
              keyExtractor={(item) => item.id}
            />
            <TouchableOpacity style={styles.planButton} onPress={handleOrderSnowServices}>
              <Text style={styles.planButtonText}>Order Snow Services</Text>
            </TouchableOpacity>
          </View>

          {/* Available Plowers Section */}
          <Text style={styles.title}>Available Plowers</Text>
          <FlatList
            data={plowers}
            renderItem={({ item }) => (
              <View style={styles.plowerCard}>
                <Text style={styles.plowerName}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={18} color="#FFD700" />
                  <Text style={styles.rating}> {item.rating}</Text>
                </View>
                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() => alert(`Viewing profile of ${item.name}`)}
                >
                  <Text style={styles.profileButtonText}>View Profile</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />

          {/* Learn More Button */}
          <TouchableOpacity style={styles.learnMoreButton} onPress={handleLearnMore}>
            <Ionicons name="information-circle" size={30} color="#4CAF50" />
            <Text style={styles.learnMoreText}>Learn More About SnowEase</Text>
          </TouchableOpacity>

          {/* Settings Button */}
          <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="settings" size={30} color="#4CAF50" />
            <Text style={styles.settingsText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    marginTop: 120, // Ensures content is below the header
    paddingBottom: 40,
  },
  planSection: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  planDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  planButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  planButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },
  contactCard: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  contactItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#333',
  },
  plowerCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  plowerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
    color: '#555',
  },
  profileButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  profileButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginHorizontal: 20,
  },
  learnMoreText: {
    fontSize: 18,
    marginLeft: 10,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 12,
    marginHorizontal: 20,
  },
  settingsText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Home;








