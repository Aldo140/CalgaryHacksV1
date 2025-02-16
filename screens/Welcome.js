import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Dimensions,
  Platform,
  StatusBar,
  Easing,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

// Import WelcomeStyles
import WelcomeStyles from './styles/WelcomeStyles';

// Constants
const WEB_BACKGROUND_IMAGE = require('../assets/images.jpg');
const PHONE_BACKGROUND_IMAGE = require('../assets/phone.jpg');
const LOGO_IMAGE = require('../assets/snow-plow-clearing-vehicle.jpg');
const SCREEN_WIDTH = Dimensions.get('window').width;
const ANIMATION_DURATION = 500;

const Welcome = () => {
  const navigation = useNavigation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownAnimation = useRef(new Animated.Value(0)).current;
  const [showContent, setShowContent] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Animation Refs
  const titleAnimation = useRef(new Animated.Value(0)).current;
  const descriptionAnimation = useRef(new Animated.Value(0)).current;
  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const menuAnimation = useRef(new Animated.Value(0)).current;

  // Determine the background image based on the platform
  const backgroundImage = Platform.OS === 'web' ? WEB_BACKGROUND_IMAGE : PHONE_BACKGROUND_IMAGE;

  useEffect(() => {
    // Initial Animations
    Animated.sequence([
      Animated.timing(titleAnimation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.easeOut,
        useNativeDriver: true,
      }),
      Animated.timing(descriptionAnimation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.easeOut,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOut,
        useNativeDriver: true,
      }),
    ]).start(() => setShowContent(true));
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Reset dropdown on screen focus
      setDropdownOpen(false);
      Animated.timing(dropdownAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, [])
  );

  const handleGetStarted = () => {
    // Button press animation sequence
    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 0.95,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => navigation.navigate('Login'));
  };

  const toggleDropdown = () => {
    Animated.timing(dropdownAnimation, {
      toValue: isDropdownOpen ? 0 : 1,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => setDropdownOpen(!isDropdownOpen));
  };

  const dropdownHeight = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 220],
  });

  const toggleMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: isMenuVisible ? 0 : 1,
      duration: ANIMATION_DURATION,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setMenuVisible(!isMenuVisible));
  };

  const handleCloseModal = () => {
    toggleMenu();
  };

  const modalOverlayStyle = {
    ...WelcomeStyles.modalOverlay,
    transform: [
      {
        translateX: menuAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-SCREEN_WIDTH, 0],
        }),
      },
    ],
  };

  return (
    <View style={WelcomeStyles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
      <ImageBackground source={backgroundImage} style={WelcomeStyles.backgroundImage}>
        {/* Platform-specific Navbars */}
        {/* iOS and Android Navbar */}
        {(Platform.OS === 'ios' || Platform.OS === 'android') && (
          <View style={WelcomeStyles.mobileNavbar}>
            <Text style={WelcomeStyles.mobileNavbarTitle}>Community Clear</Text>
            <TouchableOpacity style={WelcomeStyles.mobileMenuButton} onPress={toggleMenu}>
              <Ionicons name="menu" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        )}

        {/* Slide-in Menu for Mobile */}
        {(Platform.OS === 'ios' || Platform.OS === 'android') && (
          <Animated.View style={modalOverlayStyle}>
            <View style={WelcomeStyles.modalContent}>
              <TouchableOpacity onPress={() => { navigation.navigate('Home'); handleCloseModal(); }}>
                <Text style={WelcomeStyles.modalOptionText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('LearnMore'); handleCloseModal(); }}>
                <Text style={WelcomeStyles.modalOptionText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}

        {/* Web Navbar */}
        {Platform.OS === 'web' && (
          <View style={WelcomeStyles.webNavbar}>
            <Image source={LOGO_IMAGE} style={WelcomeStyles.webLogo} />
            <Text style={WelcomeStyles.webNavbarTitle}>Community Clear</Text>
            <View style={WelcomeStyles.webNavbarButtons}>
              <TouchableOpacity style={WelcomeStyles.webNavbarButton} onPress={() => navigation.navigate('Home')}>
                <Text style={WelcomeStyles.webNavbarButtonText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={WelcomeStyles.webNavbarButton} onPress={() => navigation.navigate('LearnMore')}>
                <Text style={WelcomeStyles.webNavbarButtonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Main Content */}
        <Animated.ScrollView
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={WelcomeStyles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={[
              WelcomeStyles.overlay,
              {
                opacity: titleAnimation,
                transform: [{ translateY: titleAnimation.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
              },
            ]}
          >
            <Animatable.View animation="fadeInDown" style={WelcomeStyles.titleContainer}>
              <Text style={WelcomeStyles.title}>Community Clear</Text>
            </Animatable.View>
            <Animated.Text
              style={[
                WelcomeStyles.funDescription,
                {
                  opacity: descriptionAnimation,
                  transform: [{ translateY: descriptionAnimation.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
                },
              ]}
            >
              Embrace the cozy side of winter with us! We bring warmth to your doorstep with our friendly,
              community-focused snow removal services.
            </Animated.Text>

            {/* Get Started Button */}
            <Animated.View style={[WelcomeStyles.button, { opacity: buttonAnimation, transform: [{ scale: buttonAnimation }] }]}>
              <TouchableOpacity onPress={handleGetStarted}>
                <Text style={WelcomeStyles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Dropdown and Additional Content */}
            {showContent && (
              <>
                <TouchableOpacity style={WelcomeStyles.dropdownButton} onPress={toggleDropdown}>
                  <Text style={WelcomeStyles.dropdownButtonText}>Our Services</Text>
                  <Ionicons
                    name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color="#fff"
                    style={WelcomeStyles.icon}
                  />
                </TouchableOpacity>

                <Animated.View style={[WelcomeStyles.dropdownContent, { height: dropdownHeight, opacity: dropdownAnimation }]}>
                  <ScrollView style={WelcomeStyles.dropdownScrollView} showsVerticalScrollIndicator={false}>
                    <Text style={WelcomeStyles.dropdownTitleText}>Why Choose Us?</Text>
                    <Text style={WelcomeStyles.dropdownExplanationText}>
                      <Text style={WelcomeStyles.bold}>No-Contract Flexibility:</Text> Enjoy the freedom of no-contract services.
                    </Text>
                    <Text style={WelcomeStyles.dropdownExplanationText}>
                      <Text style={WelcomeStyles.bold}>Customer-Centric Approach:</Text> Tailored services designed to meet your needs.
                    </Text>
                    <Text style={WelcomeStyles.dropdownExplanationText}>
                      <Text style={WelcomeStyles.bold}>Transparent Rating System:</Text> Pay for quality with our transparent system.
                    </Text>
                    <Text style={WelcomeStyles.dropdownExplanationText}>
                      <Text style={WelcomeStyles.bold}>Expert Snow Removal Team:</Text> Our skilled team handles the snow.
                    </Text>
                  </ScrollView>
                </Animated.View>
              </>
            )}
          </Animated.View>
        </Animated.ScrollView>

        {/* Footer */}
        <View style={WelcomeStyles.footerNavbar}>
          <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
            <Text style={WelcomeStyles.footerText}>Contact Us</Text>
          </TouchableOpacity>
          <Text style={WelcomeStyles.footerEmail}>Email: info@communityclear.com</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;


