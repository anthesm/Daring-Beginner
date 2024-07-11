import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './src/navigations/Nav';
import QuizScreen from './src/components/quiz/QuizScreen';

const App = () => {
  return (
    <NavigationContainer>
    <Nav/>
    </NavigationContainer>
  );
};

export default App;
