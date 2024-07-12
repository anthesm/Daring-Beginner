import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreens from '../screens/InitialScreens';
import QuizScreen from '../screens/quiz/QuizScreen';
import ScoreScreen from '../screens/quiz/ScoreScreen';
import AskUserDetails from '../screens/AskUserDetails';
import Profile from '../screens/Profile';
import OpeningScreen from '../screens/OpeningScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Draw = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={InitialScreens} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Nav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Draw" component={Draw} />
      <Stack.Screen name="home" component={InitialScreens} />
      <Stack.Screen name="quiz" component={QuizScreen} />
      <Stack.Screen name="score" component={ScoreScreen} />
    </Stack.Navigator>
  );
};

export default Nav;
