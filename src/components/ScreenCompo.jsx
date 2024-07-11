import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Button';
import {GlobalStyles, CommonStyles} from '../styles/globalcss';

const ReusableComponent = ({
  title,
  text,
  buttonText,
  onButtonPress,
  navigation
}) => {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.centeredContainer}>
        <Text style={CommonStyles.header}>{title}</Text>
        <Text style={CommonStyles.text}>{text}</Text>
        <Button
          title={buttonText}
          onPress={()=>navigation.navigate("home")}
          style={CommonStyles.button}
          textStyle={CommonStyles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

ReusableComponent.defaultProps = {
  title: 'Default Title',
  text: 'Default Text',
  buttonText: 'Click Me',
  onButtonPress: () => {
    console.log('Button Pressed');
  },
};

export default ReusableComponent;
