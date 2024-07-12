import React from 'react';
import { View } from 'react-native';
import ScreenCompo from '../components/ScreenCompo';
import { BUTTON_TEXT, TEXT_INTRO, TITLE_INTRO } from '../constants/text';

const OpeningScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <ScreenCompo
      title={TITLE_INTRO}
      text={TEXT_INTRO}
      buttonText={BUTTON_TEXT}
      navigation={navigation}
    />
  </View>
);

export default OpeningScreen;
