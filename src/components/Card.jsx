import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { CommonStyles } from '../styles/globalcss';
import { CARD_DESC_TEXT } from '../constants/text';
import styles from '../styles/cardCss';

const Card = ({ title, navigation }) => (
  <View style={[CommonStyles.card, styles.cardContainer]}>
    <Text style={[CommonStyles.header, styles.cardTitle]}>{title}</Text>
    <Text style={[CommonStyles.text, styles.cardText]}>{CARD_DESC_TEXT}</Text>
    <Button
      title="Play"
      onPress={() => navigation.navigate('quiz')}
      style={styles.cardButton}
    />
  </View>
);

export default Card;
