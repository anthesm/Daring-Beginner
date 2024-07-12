import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/ScreenCompo';
import InitialScreens from '../screens/InitialScreens';
import QuizScreen from '../screens/quiz/QuizScreen';
import ScoreScreen from '../screens/quiz/ScoreScreen';
import OpeningScreen from '../screens/OpeningScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
);

const Nav = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="front" component={OpeningScreen} />
    <Stack.Screen name="home" component={InitialScreens} />
    <Stack.Screen name="quiz" component={QuizScreen} />
    <Stack.Screen name="score" component={ScoreScreen} />
    <Stack.Screen name="tabs" component={Tabs} />
  </Stack.Navigator>
);

export default Nav;
