import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreens from '../screens/InitialScreens';
import QuizScreen from '../screens/quiz/QuizScreen';
import ScoreScreen from '../screens/quiz/ScoreScreen';
import AskUserDetails from '../screens/AskUserDetails';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OpeningScreen from '../screens/OpeningScreen';
import Spinner from '../components/Spinner';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: () => {
    let iconName;
    if (route.name === 'home') {
      iconName = 'home';
    } else if (route.name === 'profile') {
      iconName = 'user';
    }
    return <Icon name={iconName} size={30} color={'#252525'} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
});

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="home" component={InitialScreens} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Nav = () => {
  const [name, setName] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getName = async () => {
      try {
        const value = await AsyncStorage.getItem('name');
        if (value !== null) {
          setName(value);
          setLoading(false);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(false);
      }
    };
    getName();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Stack.Navigator
      initialRouteName="userDetails"
      screenOptions={{headerShown: false}}>
      {name === null ? (
        <>
          <Stack.Screen name="openingScreen" component={OpeningScreen} />
          <Stack.Screen name="userDetails" component={AskUserDetails} />
        </>
      ) : (
        <Stack.Screen name="root" component={BottomTab} />
      )}
      <Stack.Screen name="tab" component={BottomTab} />
      <Stack.Screen name="quizScreen" component={QuizScreen} />
      <Stack.Screen name="scoreScreen" component={ScoreScreen} />
    </Stack.Navigator>
  );
};
export default Nav;
