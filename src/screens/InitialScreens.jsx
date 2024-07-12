import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Card from '../components/Card';
import {HEADER_TEXT} from '../constants/text';
import {CommonStyles} from '../styles/globalcss';

const InitialScreens = ({navigation}) => (
  <ScrollView style={CommonStyles.container}>
    <Text style={CommonStyles.header}>{HEADER_TEXT}</Text>
    <View style={CommonStyles.column}>
      <Card title="HTML" navigation={navigation} />
      <Card title="React" navigation={navigation} />
      <Card title="CSS" navigation={navigation} />
      <Card title="JavaScript" navigation={navigation} />
    </View>
  </ScrollView>
);


export default InitialScreens;
