import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ScoreScreen = ({ route, navigation }) => {
  const { score, totalQuestions } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>
        Your Score: {score} / {totalQuestions}
      </Text>
      <View style={styles.btnContainer}>
        <Button title="Home" onPress={() => navigation.navigate('home')} />
      </View>
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
    gap: 20,
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#222',
  },
  btnContainer: {
    marginTop: 20,
  },
});

export default ScoreScreen;
