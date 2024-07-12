import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Button from './Button';
import { GlobalStyles, CommonStyles } from '../styles/globalcss';

const ScreenCompo = ({ title, text, buttonText, navigation, image }) => (
  <ScrollView style={GlobalStyles.container}>
    <View style={GlobalStyles.centeredContainer}>
      <Text style={CommonStyles.header}>{title}</Text>
      {image && <Image source={image} style={styles.image} />}
      <Text style={CommonStyles.text}>{text}</Text>
      <Button
        title={buttonText}
        onPress={() => navigation.navigate('home')}
        style={CommonStyles.button}
        textStyle={CommonStyles.buttonText}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default ScreenCompo;
