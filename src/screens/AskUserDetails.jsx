import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

const AskUserDetails = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>What we call you?</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <Button title="Next" onPress={() => navigation.navigate('Draw')} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#252525',
    borderRadius: 30,
    marginVertical: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#252525',
    textAlign: 'center',
  },
});

export default AskUserDetails;
