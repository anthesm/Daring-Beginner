import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Icon name="user" size={150} color="#fff" />
      </View>
      <View style={styles.lowerSection}>
        <Text style={styles.heading}>Name:</Text>
        <Text style={styles.text}>John Doe</Text>
        <Text style={styles.heading}>Email:</Text>
        <Text style={styles.text}>john.doe@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  upperSection: {
    height: 250,
    backgroundColor: '#6c63ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  lowerSection: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
});

export default Profile;
