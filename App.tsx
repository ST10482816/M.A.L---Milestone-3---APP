import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import ContactScreen from './screens/Contact';
import FeesCalcScreen from './screens/Fees-Calc';
import IndividualCourseScreen from './screens/IndividualCourseScreen';
import SixMonthCourses from './screens/SixMonthCourses';
import SixWeekCourses from './screens/SixWeekCourses';
import Courses from './screens/Courses';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  Courses: undefined;
  IndividualCourseScreen: { course: { title: string; duration: string; price: string; purpose: string; content: string[]; image: any } };
  SixMonthCourses: undefined;
  SixWeekCourses: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
              style={styles.logo}
              source={require('../APP - Empowering-The-Nation-M.A.L-main/img/bird-logo-png.png')}
              resizeMode="contain"/>
        <Text style={styles.title}>Empowering the Nation</Text>
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

      {/* Mission & Vision */}
      <Text style={styles.heading}>Join Our Mission to Empower the Nation</Text>
      <View style={styles.cardsRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mission</Text>
          <Text style={styles.cardText}>
            To open doors to dignified work by delivering affordable, practical training in
            essential trades—helping every learner build skills, confidence, and income for
            their family and community.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vision</Text>
          <Text style={styles.cardText}>
            A skilled nation where opportunities in plumbing, electrical, carpentry, solar,
            and other hands-on trades are accessible to all—creating jobs, supporting small
            businesses, and powering local economies.
          </Text>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaText}>Join the cause now!</Text>
        <View style={styles.ctaButtonsRow}>
          <TouchableOpacity style={styles.ctaBtn} onPress={() => navigation.navigate('SixWeekCourses')}>
            <Text style={styles.ctaBtnText}>6 Week Courses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ctaBtn} onPress={() => navigation.navigate('SixMonthCourses')}>
            <Text style={styles.ctaBtnText}>6 Month Courses</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ title: 'Contact Us', headerShown: false }} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCourses} options={{ title: 'Six Week Courses', headerShown: false }} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCourses} options={{ title: 'Six Month Courses', headerShown: false }} />
        <Stack.Screen name="FeesCalcScreen" component={FeesCalcScreen} options={{ title: 'Fees Calculations', headerShown: false }} />
        <Stack.Screen name="IndividualCourseScreen" component={IndividualCourseScreen} options={{ title: 'Course Details', headerShown: false }} />
        <Stack.Screen name="Courses" component={Courses} options={{ title: 'Courses', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcfa',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 54,
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
    fontSize: 20,
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
    marginVertical: 18,
    textAlign: 'center',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f8fecf',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 10,
    width: 180,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#219a2f',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#219a2f',
    textAlign: 'center',
  },
  ctaBox: {
    backgroundColor: '#f8fecf',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
    maxWidth: 400,
    alignSelf: 'center',
  },
  ctaText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#219a2f',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '110%',
    gap: 0,
  },
  ctaBtn: {
    flex: 1,
    backgroundColor: '#219a2f',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginHorizontal: 4,
    marginTop: 8,
    minWidth: 0,
    maxWidth: 160,
  },
  ctaBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});