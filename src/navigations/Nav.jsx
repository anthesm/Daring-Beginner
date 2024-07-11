import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/ScreenCompo';
import InitialScreens from '../screens/InitialScreens';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Draw = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="getstart" component={Home} />
    </Drawer.Navigator>
  );
};

const Nav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="getstart" component={Home} />
      <Stack.Screen name="home" component={InitialScreens} />
    </Stack.Navigator>
  );
};

export default Nav;
