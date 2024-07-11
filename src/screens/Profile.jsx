import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.uperSection}>
        <Text>
          <Icon name="user" size={150} color="#900" />;
        </Text>
      </View>
      <View style={styles.lowerSection}>
        <Text style={styles.heading}>Name:{}</Text>
        <Text style={styles.heading}>Email:{}</Text>
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
