import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AskUserDetails = ({navigation}) => {
  const [name, setName] = useState('');
  const saveName = async value => {
    try {
      await AsyncStorage.setItem('name', value);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>What should we call you?</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#aaa"
        />
      </View>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('tab');
          saveName(name);
        }}
      />
      <Button title="Next" onPress={() => navigation.navigate('Draw')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#252525',
    textAlign: 'center',
  },
});

export default AskUserDetails;
