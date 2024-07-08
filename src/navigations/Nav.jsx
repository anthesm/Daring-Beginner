import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const Root = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="root" component={'Root'} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Nav;
