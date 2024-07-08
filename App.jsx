import React from 'react';
import {View, Text} from 'react-native';
import {GlobalStyles,CommonStyles} from './src/styles/globalcss';
const App = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={CommonStyles.text}>hello</Text>
    </View>
  );
};

export default App;
