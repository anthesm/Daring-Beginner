import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';

const InitialScreens = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Quizzes</Text>
      <View style={styles.cardContainer}>
        <Card title="HTML" navigation={navigation} />
        <Card title="React" navigation={navigation} />
        <Card title="CSS" navigation={navigation} />
        <Card title="JavaScript" navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    fontSize: 22,
    color: '#252525',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    gap: 20,
    padding: 10,
  },
});

export default InitialScreens;
