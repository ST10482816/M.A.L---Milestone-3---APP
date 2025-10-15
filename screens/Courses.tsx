import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  IndividualCourseScreen: { course: { title: string; duration: string; price: string; purpose: string; content: string[]; image: any } };
  SixWeekCourses: undefined;
  SixMonthCourses: undefined;
  Courses: undefined;
};

type CoursesNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Courses'>;

interface CoursesProps {
  navigation: CoursesNavigationProp;
}

export default function Courses({ navigation }: CoursesProps) {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
    
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../img/bird-logo-png.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>Courses</Text>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            style={styles.dropdownToggle}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.dropdownToggleText}>Menu ▼</Text>
          </TouchableOpacity>

          {/* Dropdown Menu */}
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
      </View>

      {/* Heading */}
      {/* Call to Action */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaText}>Join the cause now!</Text>
        <View style={styles.ctaButtonsRow}>
          <TouchableOpacity
            style={styles.ctaBtn}
            onPress={() => navigation.navigate('SixWeekCourses')}
          >
            <Text style={styles.ctaBtnText}>6 Week Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ctaBtn}
            onPress={() => navigation.navigate('SixMonthCourses')}
          >
            <Text style={styles.ctaBtnText}>6 Month Courses</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcfa', 
    // paddingTop: 8,
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
    marginLeft: 12,
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
  backBtnContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingRight: 10,
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
  ctaBox: {
    backgroundColor: '#f8fecf',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    maxWidth: 400,
    alignSelf: 'center',
  },
  ctaText: {
    fontWeight: 'bold',
    fontSize: 28, 
    color: '#219a2f',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 8,
  },
  ctaBtn: {
    flex: 1,
    backgroundColor: '#219a2f',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginHorizontal: 4,
    minWidth: 120,
    maxWidth: 160,
  },
  ctaBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});