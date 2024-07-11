import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import QuizScreen from '../components/quiz/QuizScreen';
import ScoreScreen from '../components/quiz/ScoreScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Draw = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="QuizScreen" component={QuizScreen} />
    </Drawer.Navigator>
  );
};

const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Draw} options={{ headerShown: false }} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="ScoreScreen" component={ScoreScreen} />
    </Stack.Navigator>
  );
};

export default Nav;
