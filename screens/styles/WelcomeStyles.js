import { StyleSheet, Dimensions, Platform } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IOS_NAVBAR_HEIGHT = Platform.OS === 'ios' ? 100 : 0; // Adjusted for iOS
const WEB_ANDROID_NAVBAR_HEIGHT = 70;
const FOOTER_HEIGHT = 80;

const WelcomeStyles = StyleSheet.create({
  // Main Container Styles
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // Background Image Styles
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  // Content Container Styles
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: FOOTER_HEIGHT + 20,
    paddingTop: IOS_NAVBAR_HEIGHT, // Use adjusted height
  },

  // Mobile Navbar Styles (iOS and Android)
  mobileNavbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: IOS_NAVBAR_HEIGHT,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 45,
    paddingHorizontal: 20,
    zIndex: 10,
  },

  // Mobile Menu Button Styles
  mobileMenuButton: {
    marginBottom: 10,
  },

  // Mobile Navbar Title Styles
  mobileNavbarTitle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
    marginRight: 'auto'
  },
    // Slide-in Menu Styles
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '75%', // Adjust width as needed
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 20,
        elevation: 20, // For Android shadow
      },
      modalContent: {
        backgroundColor: '#000',
        padding: 20,
        height: '100%',
      },
      modalOption: {
        paddingVertical: 10,
      },
      modalOptionText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Helvetica',
      },

  // Web Navbar Styles
  webNavbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 10,
  },

  // Web Logo Styles
  webLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 10,
  },

  // Web Navbar Title Styles
  webNavbarTitle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    marginRight: 'auto',
  },

  // Web Navbar Buttons Container
  webNavbarButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Web Navbar Button Styles
  webNavbarButton: {
    marginLeft: 20,
  },

  // Web Navbar Button Text Styles
  webNavbarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },

  // Android Navbar Styles
  androidNavbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: WEB_ANDROID_NAVBAR_HEIGHT,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    zIndex: 10,
  },

  // Left Section Styles (for Android Navbar)
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Logo Styles (for Android Navbar)
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
  },

  // Navbar Text Styles (for Android Navbar)
  navbarText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
  },

  // Navbar Buttons Container Styles (for Android Navbar)
  navbarButtons: {
    flexDirection: 'row',
  },

  // Navbar Button Styles (for Android Navbar)
  navbarButton: {
    marginLeft: 20,
  },

  // Navbar Button Text Styles (for Android Navbar)
  navbarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },

  // Overlay Styles (for Content)
  overlay: {
    backgroundColor: 'rgba(0, 80, 10, 0.5)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
    marginTop: IOS_NAVBAR_HEIGHT + 20,
    marginBottom: 20,
  },

  // Title Container Styles
  titleContainer: {
    marginBottom: 15,
    width: SCREEN_WIDTH * 0.8,
    alignItems: 'center',
  },

  // Dropdown Button Styles
  dropdownButton: {
    marginBottom: 10,
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#FF6347',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  // Dropdown Button Text Styles
  dropdownButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Helvetica',
  },

    // Dropdown Icon Styles
    icon: {
        marginLeft: 10,
      },

  // Dropdown Content Container Styles
  dropdownContent: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 8,
    width: '95%',
    overflow: 'hidden',
  },

  // Dropdown ScrollView Styles
  dropdownScrollView: {
    padding: 20,
  },

  // Dropdown Title Text Styles
  dropdownTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },

  // Dropdown Explanation Text Styles
  dropdownExplanationText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Helvetica',
    lineHeight: 24,
  },

  // Footer Navbar Styles
  footerNavbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  // Footer Text Styles
  footerText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Helvetica',
  },

  // Footer Email Styles
  footerEmail: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Helvetica',
  },

  // Bold Text Style (Utility)
  bold: {
    fontWeight: 'bold',
  },
      // Shared Styles title, funDescription, button, buttonText
      title: {
        fontSize: 48,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 2,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        fontFamily: 'Helvetica-Bold',
      },
      funDescription: {
        fontSize: 17,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 26,
        fontFamily: 'Helvetica',
        paddingHorizontal: 20,
      },
      button: {
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#FF6347',
        borderRadius: 30,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginBottom: 20,
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Helvetica',
      },
});

export default WelcomeStyles;