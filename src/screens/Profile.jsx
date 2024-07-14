import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = () => {
  const [name, setName] = useState('');

  useEffect(()=>{
    const getName = async () => {
      try {
        const value = await AsyncStorage.getItem('name');
        if (value !== null) {
          setName(value);
        }
      } catch (e) {
        console.warn(e);
      }
    };
    getName()
  },[])

  return (
    <View style={{flex: 1}}>
      <View style={styles.uperSection}>
        <Text>
          <Icon name="user" size={150} color="#900" />;
        </Text>
      </View>
      <View style={styles.lowerSection}>
        <Text style={styles.heading}>Name: {name}</Text>
        <Text style={styles.heading}>Email:{"N/A"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uperSection: {
    height: 200,
    backgroundColor: '#323a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerSection: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
    gap: 20,
  },
  heading: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Profile;
