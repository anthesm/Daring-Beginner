import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TITLE_INTRO, TEXT_INTRO, BUTTON_TEXT} from '../../constants/text';
import Button from '../../usables/Button';
import {GlobalStyles, CommonStyles} from '../../styles/globalcss';

// Adjust the import path based on your actual file structure

const Home = () => {
  return (
    <View style={GlobalStyles.centeredContainer}>
      <Text style={CommonStyles.header}>{TITLE_INTRO}</Text>
      <Text style={CommonStyles.text}>{TEXT_INTRO}</Text>
      <Button
        title={BUTTON_TEXT}
        onPress={() => {
          console.log('login');
        }}
        style={CommonStyles.button}
        textStyle={CommonStyles.buttonText}
      />
    </View>
  );
};

export default Home;
