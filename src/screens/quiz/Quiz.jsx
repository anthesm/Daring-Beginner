import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/QuizStyles';

const Quiz = ({ question, options, correctAnswer, onAnswerSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = option => {
    if (selectedOption === null) {
      setSelectedOption(option);
      onAnswerSelected(option);
    }
  };

  const getOptionButtonStyle = option => {
    if (!selectedOption) return styles.optionButton;
    if (option === correctAnswer) return [styles.optionButton, styles.correctOptionButton];
    if (option === selectedOption) return [styles.optionButton, styles.wrongOptionButton];
    return styles.optionButton;
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [question]);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map(option => (
        <TouchableOpacity
          key={option}
          style={getOptionButtonStyle(option)}
          onPress={() => handleOptionPress(option)}
          disabled={selectedOption !== null}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

Quiz.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
