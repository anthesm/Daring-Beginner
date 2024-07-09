import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/home/Home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Draw = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Draw} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Nav;
