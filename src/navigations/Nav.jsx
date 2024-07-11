import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/ScreenCompo';
import InitialScreens from '../screens/InitialScreens';
import QuizScreen from '../screens/quiz/QuizScreen';
import ScoreScreen from '../screens/quiz/ScoreScreen';
import AskUserDetails from '../screens/AskUserDetails';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenoptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'home') {
      iconName = 'home'
    } else if (route.name === 'profile') {
      iconName = 'user';
    }

    // You can return any component that you like here!
    return <Icon name={iconName} size={30} color={"#252525"} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerShown:false,
})


const BottomTab = ()=>{
  return(
    <Tab.Navigator screenOptions={screenoptions}>
      <Tab.Screen name="home" component={InitialScreens}/>
      <Tab.Screen name="profile" component={Profile}/>
    </Tab.Navigator>
  )
}



const Nav = () => {
  return (
    <Stack.Navigator
      initialRouteName="userDetails"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="userDetails" component={AskUserDetails} />
      <Stack.Screen name="tab" component={BottomTab} />
      <Stack.Screen name="quizScreen" component={QuizScreen} />
      <Stack.Screen name="scoreScreen" component={ScoreScreen} />
    </Stack.Navigator>
  );
};

export default Nav;
