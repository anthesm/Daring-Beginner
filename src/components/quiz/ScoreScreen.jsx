import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ScoreScreen = ({route, navigation}) => {
  const {score, totalQuestions} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Your Score: {score} / {totalQuestions}</Text>
      <Button title="Play Again" onPress={() => navigation.navigate('QuizScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
    color:"#222"
  },
});

export default ScoreScreen;
