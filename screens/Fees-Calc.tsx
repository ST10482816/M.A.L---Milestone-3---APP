import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';

type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  Courses: undefined;
};

type FeesCalcScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'FeesCalcScreen'>;

interface FeesCalcScreenProps {
  navigation: FeesCalcScreenNavigationProp;
}

interface Course {
  courseId: string;
  courseName: string;
  purpose: string;
  content: string[];
  price: number;
  duration: string;
}

const courseData: Course[] = [
  {
    courseId: "001",
    courseName: "First Aid",
    purpose: "To provide first aid awareness and basic life support",
    content: [
      "Wounds and bleeding",
      "Burns and fractures",
      "Emergency scene management",
      "Cardio-Pulmonary Resuscitation (CPR)",
      "Respiratory distress e.g., Choking, blocked airway",
    ],
    price: 1500,
    duration: "6 months",
  },
  {
    courseId: "002",
    courseName: "Sewing",
    purpose: "To provide alterations and new garment tailoring services",
    content: [
      "Types of stitches",
      "Threading a sewing machine",
      "Sewing buttons, zips, hems and seams",
      "Alterations",
      "Designing and sewing new garments",
    ],
    price: 1500,
    duration: "6 months",
  },
  {
    courseId: "003",
    courseName: "Landscaping",
    purpose: "To provide landscaping services for new and established gardens",
    content: [
      "Indigenous and exotic plants and trees",
      "Fixed structures (fountains, statues, benches, tables, built-in braai)",
      "Balancing of plants and trees in a garden",
      "Aesthetics of plant shapes and colours",
      "Garden layout",
    ],
    price: 1500,
    duration: "6 months",
  },
  {
    courseId: "004",
    courseName: "Life Skills",
    purpose: "To provide skills to navigate basic life necessities",
    content: [
      "Opening a bank account",
      "Basic labour law (know your rights)",
      "Basic reading and writing literacy",
      "Basic numeric literacy",
    ],
    price: 1500,
    duration: "6 months",
  },
  {
    courseId: "005",
    courseName: "Child Minding",
    purpose: "To provide basic child and baby care",
    content: [
      "Birth to six-month old baby needs",
      "Seven-month to one year old needs",
      "Toddler needs",
      "Educational toys",
    ],
    price: 750,
    duration: "6 weeks",
  },
  {
    courseId: "006",
    courseName: "Cooking",
    purpose: "To prepare and cook nutritious family meals",
    content: [
      "Nutritional requirements for a healthy body",
      "Types of protein, carbohydrates and vegetables",
      "Planning meals",
      "Tasty and nutritious recipes",
      "Preparation and cooking of meals",
    ],
    price: 750,
    duration: "6 weeks",
  },
  {
    courseId: "007",
    courseName: "Garden Maintenance",
    purpose: "To provide basic knowledge of watering, pruning and planting in a domestic garden",
    content: [
      "Water restrictions and the watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques for different plant types",
    ],
    price: 750,
    duration: "6 weeks",
  },
];

export default function FeesCalcScreen({ navigation }: FeesCalcScreenProps) {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const handleCourseToggle = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((course) => course !== courseId)
        : [...prev, courseId]
    );
  };

  const calculateQuote = () => {
    setShowSummary(true);
  };

  const getTotalCourses = (): number => selectedCourses.length;

  const getTotalPrice = (): number => {
    let total = 0;
    selectedCourses.forEach((courseId) => {
      const course = courseData.find((c) => c.courseId === courseId);
      if (course) total += course.price;
    });
    return total;
  };

  const getVat = (): number => getTotalPrice() * 0.15;

  const getTotalWithVat = (): number => getTotalPrice() + getVat();

  return (
    <SafeAreaView style={styles.container}>
    
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../img/bird-logo-png.png')}
          resizeMode="contain"/>
        <Text style={styles.title}>Fees Calculations</Text>
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
        <Text style={styles.heading}>Calculate Your Fees</Text>
      </View>

      <View style={styles.cardContainer}>
      {/* Select Courses Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Select Courses</Text>
          {courseData.map((course) => (
            <View key={course.courseId} style={styles.courseItem}>
              <Text style={styles.courseText}>{`${course.courseName} (${course.duration}) - R${course.price}`}</Text>
              <Checkbox
                value={selectedCourses.includes(course.courseId)}
                onValueChange={() => handleCourseToggle(course.courseId)}
                color={selectedCourses.includes(course.courseId) ? '#219a2f' : undefined}
              />
            </View>
          ))}
        </View>

        {/* User Details Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Details</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            autoCapitalize="words"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={setNumber}
            value={number}
          />
          <TextInput
            style={styles.input}
            placeholder="john@email.com"
            onChangeText={setEmail}
            value={email}
          />
          <TouchableOpacity style={styles.getQuoteButton} onPress={calculateQuote}>
            <Text style={styles.getQuoteButtonText}>Get Quote</Text>
          </TouchableOpacity>
        </View>

        {/* Cart Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cart</Text>
          {selectedCourses.length === 0 ? (
            <Text style={styles.courseText}>No courses selected</Text>
          ) : (
            selectedCourses.map((courseId) => {
              const course = courseData.find((c) => c.courseId === courseId);
              if (!course) return null;
              return (
                <View key={courseId} style={styles.courseItem}>
                  <View style={styles.courseTextContainer}>
                    <Text style={styles.courseText}>{course.courseName}</Text>
                    <Text style={styles.courseText}>R{course.price}</Text>
                  </View>
                  <TouchableOpacity onPress={() => handleCourseToggle(courseId)}>
                    <Image source={require('../img/bin.png')} style={styles.binIcon} />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
          {selectedCourses.length > 0 && <View style={styles.divider} />}
        </View>

        {/* Summary Section */}
        {showSummary && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Totals</Text>
            <View style={styles.feeRow}>
              <Text style={styles.courseText}>Courses:</Text>
              <Text style={styles.courseText}>{getTotalCourses()}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.feeRow}>
              <Text style={styles.courseText}>VAT (15%):</Text>
              <Text style={styles.courseText}>R{getVat().toFixed(2)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.feeRow}>
              <Text style={styles.courseText}>Total:</Text>
              <Text style={styles.courseText}>R{getTotalWithVat().toFixed(2)}</Text>
            </View>
          </View>
        )}
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
    paddingBottom: 20,
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
  heading: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#219a2f',
    marginVertical: 12,
    textAlign: 'center',
    marginLeft: 10,
  },
  cardContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#f8fecf',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 10,
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#219a2f',
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    color: '#219a2f',
  },
  courseCheckboxItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  courseCheckboxLabel: {
    fontSize: 16,
    color: '#219a2f',
    flex: 1,
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  courseTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  courseText: {
    fontSize: 16,
    color: '#219a2f',
  },
  binIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#219a2f',
    width: '100%',
    marginVertical: 8,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  getQuoteButton: {
    backgroundColor: '#219a2f',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 12,
    alignSelf: 'center',
    minWidth: 160,
  },
  getQuoteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});