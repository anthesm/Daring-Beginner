import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/ScreenCompo';
import InitialScreens from '../screens/InitialScreens';
import QuizScreen from '../screens/quiz/QuizScreen';
import ScoreScreen from '../screens/quiz/ScoreScreen';
import AskUserDetails from '../screens/AskUserDetails';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const Draw = () =>
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="getstart" component={Home} />
//     </Drawer.Navigator>
//   );
// };

const Nav = () => {
  return (
    <Stack.Navigator
      initialRouteName="userDetails"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="userDetails" component={AskUserDetails} />
      <Stack.Screen name="home" component={InitialScreens} />
      <Stack.Screen name="quizScreen" component={QuizScreen} />
      <Stack.Screen name="scoreScreen" component={ScoreScreen} />
    </Stack.Navigator>
  );
};

export default Nav;
