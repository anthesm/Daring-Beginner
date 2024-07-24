import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Spinner;
