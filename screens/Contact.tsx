import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  Courses: undefined;
  SixMonthCourses: undefined;
  SixWeekCourses: undefined;
  IndividualCourse: { course: string };
};

type ContactScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContactScreen'>;

interface ContactScreenProps {
  navigation: ContactScreenNavigationProp;
}

export default function ContactScreen({ navigation }: ContactScreenProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
    
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../img/bird-logo-png.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>Contact Us</Text>

        {/* Dropdown menu */}
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            style={styles.dropdownToggle}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.dropdownToggleText}>Menu ▼</Text>
          </TouchableOpacity>
          {dropdownVisible && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setDropdownVisible(false);
                  navigation.navigate('Home');
                }}
              >
                <Text style={styles.dropdownItemText}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setDropdownVisible(false);
                  navigation.navigate('Courses');
                }}
              >
                <Text style={styles.dropdownItemText}>Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setDropdownVisible(false);
                  navigation.navigate('FeesCalcScreen');
                }}
              >
                <Text style={styles.dropdownItemText}>Calculate Fees</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setDropdownVisible(false);
                  navigation.navigate('ContactScreen');
                }}
              >
                <Text style={styles.dropdownItemText}>Contact Us</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        {/* Back Button */}
        <View style={styles.backBtnContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate('Home');
            }
          }}>
            <Text style={styles.ctaBtnText}><Ionicons name="chevron-back" size={24} color="white"/></Text>
          </TouchableOpacity>
          {/* Heading */}
          <Text style={styles.heading}>Contact Our Offices</Text>
        </View>

        <View style={styles.cardContainer}>
          {/* Marlboro Section */}
          <View style={styles.contactCard}>
            <Text style={styles.cardTitle}>Marlboro Gardens Office</Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Phone Number: </Text>+27 21 445 5454
            </Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Email: </Text>info@empoweringthenation.com
            </Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Address: </Text>22 1st Ave, Marlboro Gardens, Sandton, 2063
            </Text>
            <Image source={require('../img/Marlboro_Gardens.png')} style={styles.mapImage} />
          </View>

          {/* Tselopele Section */}
          <View style={styles.contactCard}>
            <Text style={styles.cardTitle}>Tswelopele Office</Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Phone Number: </Text>+27 21 445 5454
            </Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Email: </Text>info@empoweringthenation.com
            </Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Address: </Text>Tswelopele, Thembisa, Johannesburg, 1666
            </Text>
            <Image source={require('../img/Cameroun_Street.png')} style={styles.mapImage} />
          </View>

          {/* Maboneng Section */}
          <View style={styles.contactCard}>
            <Text style={styles.cardTitle}>Maboneng Precinct Office</Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Phone Number: </Text>+27 21 445 5454
            </Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Email: </Text>info@empoweringthenation.com
            </Text>
            <Text style={styles.contactText}>
              <Text style={styles.contactTextHeading}>Address: </Text>Maboneng Precinct, Fox St &, Kruger St, City and Suburban, Johannesburg, 2094
            </Text>
            <Image source={require('../img/Maboneng_Precinct.png')} style={styles.mapImage} />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcfa', 
    paddingTop: 54,
    paddingBottom: 40,
  },
  scrollViewStyle: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: '#219a2f', 
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40, 
    backgroundColor: '#fff',
    borderRadius: 30,
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    flex: 1,
  },
  dropdownContainer: {
    position: 'relative',
    marginLeft: 8,
  },
  dropdownToggle: {
    backgroundColor: '#219a2f',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  dropdownToggleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 44,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#219a2f', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 10,
    minWidth: 160,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e2f6e7', 
  },
  dropdownItemText: {
    color: '#219a2f', 
    fontWeight: 'bold',
    fontSize: 16,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#219a2f', 
    marginVertical: 12,
    textAlign: 'center',
    marginLeft: 10,
  },
  backBtnContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginRight: 100, 
    marginTop: 10, 
    marginBottom: 10
  },
  backBtn: {
    backgroundColor: '#219a2f',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    margin: 10,
    minWidth: 60,
    maxWidth: 100,
  },
  ctaBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  contactCard: {
    backgroundColor: '#f8fecf', 
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    // padding: 18,
    marginHorizontal: 10,
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#219a2f', 
    marginBottom: 8,
    textAlign: 'center',
    paddingTop: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#219a2f', 
    marginBottom: 10,
    marginLeft: 12,
  },
  contactTextHeading: {
    fontWeight: 'bold',
    color: '#219a2f',
  },
  mapImage: {
    width: '100%',
    height: 150,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderColor: '#219a2f', 
    resizeMode: 'cover',
    marginTop: 10,
  },
});