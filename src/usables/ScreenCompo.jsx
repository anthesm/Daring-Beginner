import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';
import {GlobalStyles, CommonStyles} from '../styles/globalcss';

const ReusableComponent = ({
  title,
  text,
  buttonText,
  onButtonPress,
  imageSource,
  imageStyle,
}) => {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.centeredContainer}>
        <Image source={imageSource} style={[styles.image, imageStyle]} />
        <Text style={CommonStyles.header}>{title}</Text>
        <Text style={CommonStyles.text}>{text}</Text>
        <Button
          title={buttonText}
          onPress={onButtonPress}
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

ReusableComponent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonPress: PropTypes.func,
  imageSource: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageStyle: PropTypes.object,
};

ReusableComponent.defaultProps = {
  title: 'Default Title',
  text: 'Default Text',
  buttonText: 'Click Me',
  onButtonPress: () => {
    console.log('Button Pressed');
  },
  imageSource: require('../assets/frontLogo.png'), // Default image
  imageStyle: {},
};

export default ReusableComponent;
