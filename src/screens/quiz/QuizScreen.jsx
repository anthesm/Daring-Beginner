import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Quiz from './Quiz';

import {CommonStyles} from '../../styles/globalcss';
import Icon from 'react-native-vector-icons/Entypo';
import {HTML} from '../../json/HTML/HTML';
import {REACT} from '../../json/React/REACT';
import {CSS} from '../../json/Css/cssQuestions';
import {JAVASCRIPT} from '../../json/js/jsQuestions';

const QuizScreen = ({navigation, route}) => {
  let questionsTopic;

  if (route.params.question === 'react') {
    questionsTopic = REACT;
  } else if (route.params.question === 'html') {
    questionsTopic = HTML;
  } else if (route.params.question === 'css') {
    questionsTopic = CSS;
  } else if (route.params.question === 'javascript') {
    questionsTopic = JAVASCRIPT;
  }

  const questions = questionsTopic.basic.questions;
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
      navigation.navigate('scoreScreen', {
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
          <Text>
            <Icon name="cross" size={30} />
          </Text>
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
