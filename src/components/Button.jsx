import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { CommonStyles } from '../styles/globalcss';

const Button = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={CommonStyles.button} onPress={onPress}>
        <Text style={CommonStyles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
