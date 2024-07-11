import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from './Button';
const Card = ({title, navigation }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.desc}>play and increase the knowledge</Text>
      <Button title="Play" onPress={() => navigation.navigate('quizScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#252525',
    padding: 15,
    gap:10,
    elevation:5,
    borderRadius:10,
  },
  heading: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  desc: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Card;
