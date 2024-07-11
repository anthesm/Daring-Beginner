import React, {useState} from 'react';
import {ScrollView, StyleSheet, Button} from 'react-native';
import Quiz from './Quiz';
import {quizQuestions} from '../../json/quizQuestions';
import {CommonStyles} from '../../styles/globalcss';

const QuizScreen = ({navigation}) => {
  const questions = quizQuestions.b.questions;
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
    } else{
      navigation.push('scoreScreen', {
        score,
        totalQuestions: questions.length,
      }
    );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
