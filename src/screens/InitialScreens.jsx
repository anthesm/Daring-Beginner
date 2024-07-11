import {View, Text} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {ScrollView} from 'react-native-gesture-handler';
const InitialScreens = ({navigation}) => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 22,
          color: '#252525',
          paddingVertical: 5,
          paddingHorizontal: 10,
          fontWeight: 'bold',
        }}>
        Quizzes
      </Text>
      <View style={{flex: 1, gap: 20, padding: 10}}>
        <Card title="HTML" navigation={navigation}/>
        <Card title="React" navigation={navigation} />
        <Card title="CSS" navigation={navigation} />
        <Card title="JavaScript" navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default InitialScreens;
