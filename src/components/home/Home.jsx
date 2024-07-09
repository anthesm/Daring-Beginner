import React from 'react';
import {View, Text, Image} from 'react-native'; // Added Image import
import {TITLE_INTRO, TEXT_INTRO, BUTTON_TEXT} from '../../constants/text';
import Button from '../../usables/Button';
import {GlobalStyles, CommonStyles} from '../../styles/globalcss';
import frontLogo from '../../assets/frontLogo.png'; // Assuming this is correctly imported

const Home = () => {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.centeredContainer}>
        <Image
          source={frontLogo} // Corrected usage of source
          style={{width: 200, height: 200}} // Adjust width and height as per your image size
        />
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
    </View>
  );
};

export default Home;
