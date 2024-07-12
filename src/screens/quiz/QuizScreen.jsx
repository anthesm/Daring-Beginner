import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import Quiz from './Quiz';
import { HTML } from '../../json/HTML';
import { REACT } from '../../json/REACT';
import { CommonStyles } from '../../styles/globalcss';

const QuizScreen = ({ navigation }) => {
  const questions = HTML.basic.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerSelected = selectedOption => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('score', {
        score,
        totalQuestions: questions.length,
      });
    }
  };

  const resetAll = () => {
    setCurrentQuestionIndex(0);
    navigation.navigate('home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <TouchableOpacity onPress={resetAll}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
      <Quiz
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        correctAnswer={questions[currentQuestionIndex].answer}
        onAnswerSelected={handleAnswerSelected}
      />
      <Button
        title="Next"
        onPress={handleNextQuestion}
        style={CommonStyles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default QuizScreen;
