import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  IndividualCourseScreen: { course: typeof courses[0] };
  Courses: undefined;
  SixWeekCourses: undefined;
  SixMonthCourses: undefined;
};

type SixWeekCoursesNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SixWeekCourses'>;

interface SixWeekCoursesProps {
  navigation: SixWeekCoursesNavigationProp;
}

const courses = [
  { 
    title: "Child Minding", 
    duration: "6 Weeks", 
    price: "R750", 
    purpose: "To provide basic child and baby care", 
    content: [
      "Birth to six-month old baby needs",
      "Seven-month to one year old needs",
      "Toddler needs",
      "Educational toys"
    ],
    image: require('../img/child-minding.jpg'), 
  },
  { 
    title: "Cooking", 
    duration: "6 Weeks", 
    price: "R750", 
    purpose: "To prepare and cook nutritious family meals", 
    content: [
      "Nutritional requirements for a healthy body",
      "Types of protein, carbohydrates and vegetables",
      "Planning meals",
      "Tasty and nutritious recipes",
      "Preparation and cooking of meals"
    ],
    image: require('../img/cooking.jpg'),
  },
  { 
    title: "Garden Maintenance", 
    duration: "6 Weeks", 
    price: "R750", 
    purpose: "To provide basic knowledge of watering, pruning and planting in a domestic garden.", 
    content: [
      "Water restrictions and the watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques for different plant types"
    ],
    image: require('../img/garden-maintenance.jpg'),
  },
];
export default function SixWeekCourses({ navigation }: SixWeekCoursesProps) {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
    
      {/* Header */}
      <View style={styles.header}>
        <Image
            style={styles.logo}
            source={require('../img/bird-logo-png.png')}
            resizeMode="contain"/>
        <Text style={styles.title}>Six Week Courses</Text>
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

      {/* Body */}
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
        <Text style={styles.heading}>6 Week Courses</Text>
      </View>
      

      {/* Course Grid */}
      <View style={styles.grid}>
        {courses.map((course, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('IndividualCourseScreen', { course })}>
              <Text style={styles.cardTitle}>{course.title}</Text>
              <View style={styles.cardContent}><Text style={styles.cardTextTitle}>Duration: </Text><Text style={styles.cardText}>{course.duration} </Text></View>
              <View style={styles.cardContent}><Text style={styles.cardTextTitle}>Fees: </Text><Text style={styles.cardText}>{course.duration} </Text></View>
              <View style={styles.cardContent}><Text style={styles.cardTextTitle}>Purpose: </Text><Text style={styles.cardText}>{course.purpose} </Text></View>
              
              <Image source={course.image} style={styles.courseImage} />
            {/* </View> */}
          </TouchableOpacity>
        ))}
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
  ctaBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginVertical: 10,
    textAlign: 'center',
    marginLeft: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  card: {
    width: '100%',
    backgroundColor: '#f8fecf',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  cardContent: {
    flexDirection: 'row',
    marginBottom: 5,
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#219a2f', 
    marginBottom: 8,
    marginHorizontal: 'auto',
    paddingTop: 8,
  },
  cardTextTitle: {
    fontSize: 14,
    color: '#219a2f', 
    marginBottom: 5,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  cardText: {
    fontSize: 14,
    color: '#219a2f', 
    marginBottom: 5,
    marginLeft: 8,
    flexWrap: 'wrap',
  },
  cardContentItem: {
    fontSize: 13,
    color: '#219a2f',
    marginLeft: 8,
    marginBottom: 2,
  },
  courseImage: {
    marginTop: 10,
    width: '100%',
    height: 150,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    resizeMode: 'cover',
  },
});