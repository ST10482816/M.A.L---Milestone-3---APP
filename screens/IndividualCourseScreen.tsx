import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

// Define the RootStackParamList to match App.tsx
type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  IndividualCourseScreen: { course: { title: string; duration: string; price: string; purpose: string; content: string[]; image: any } };
  Courses: undefined;
  SixWeekCourses: undefined;
  SixMonthCourses: undefined;
};


type IndividualCourseScreenProps = NativeStackScreenProps<RootStackParamList, 'IndividualCourseScreen'>;

export default function IndividualCourseScreen({ route, navigation }: IndividualCourseScreenProps) {
  const { course } = route.params;
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
    
      {/* Navbar */}
      <View style={styles.header}>
        <Image
            style={styles.logo}
            source={require('../img/bird-logo-png.png')}
            resizeMode="contain"/>
        <Text style={styles.headingTitle}>Details</Text>
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

      {/* Content */}
    <ScrollView style={styles.scrollViewStyle}>
      <View>
        {/* Back Button */}
        <View style={styles.backBtnContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate('Home');
            }
          }}>
          <Ionicons name="chevron-back" size={30} color="white"/>
            
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{course.title}</Text> 
          </View>
            
          </View>

          {/* Content */}
        <View style={styles.contentBox}>

          <Image source={course.image} style={styles.image} />

        {/* Course Info */}
        
            <View style={styles.infoCard}>
              <Text style={styles.infoText}><Text style={styles.infoTextTitle}>Purpose: </Text>
                {course.purpose}
              </Text>
              
              {course.content && course.content.length > 0 && (
                <View style={styles.contentList}>
                  <Text style={styles.contentHeader}>Content:</Text>
                  {course.content.map((item, index) => (
                    <Text key={index} style={styles.contentItem}>• {item}</Text>
                  ))}
                </View>
              )}
            </View>
            <View style={styles.detailsRow}>
              <View style={styles.detailBox}><Text style={styles.detailText}>Duration: {course.duration}</Text></View>
              <View style={styles.detailBox}><Text style={styles.detailText}>Price: {course.price}</Text></View>
            </View>
            
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
  },
  scrollViewStyle: {
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40, 
    backgroundColor: '#fff',
    borderRadius: 30,
    marginRight: 8,
  },
  dropdownContainer: {
    position: 'relative',
    marginLeft: 8,
  },
   header: {
    width: '100%',
    backgroundColor: '#219a2f',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
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
  contentBox: {
    width: 'auto',
    backgroundColor: '#f8fecf',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 15,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'flex-start',
  },
  headingTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff', 
    flex: 1,
    marginLeft: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
    color: '#219a2f',
    textAlign: 'center',
    flexWrap: 'wrap',
    maxWidth: '70%',
    marginLeft: 20,
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
  titleContainer: {
    flex: 1,
    
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
  imageBox: {
    backgroundColor: '#e2f6e7',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    width: '90%',
    alignItems: 'center',
    marginBottom: 18,
    padding: 18,
  },
  contentItem: {
    fontSize: 14,
    color: '#219a2f',
    marginLeft: 10,
    marginBottom: 3,
  },
  contentList: {
    marginTop: 10,
    paddingLeft: 10,
  },
  contentHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#219a2f',
    marginBottom: 5,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    width: '90%',
    minHeight: 180,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 18,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#219a2f',
    marginVertical: 10,
    textAlign: 'center',
    paddingLeft: 8,
  },
  infoTextTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#219a2f',
  },
  infoText: {
    fontSize: 15,
    color: '#219a2f',
    marginBottom: 16,
    paddingLeft: 12,
  },
  detailsRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  detailBox: {
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    backgroundColor: '#fff',
  },
  detailText: {
    color: '#219a2f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 180,
    // borderRadius: 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderWidth: 2,
    borderColor: '#219a2f',
    resizeMode: 'cover',
    marginBottom: 15,
  },
});