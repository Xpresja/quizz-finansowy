import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import HomeScreen from './screens/testowanie';
import Testowanie from './screens/testowanie';

const App = () => {
  return (  
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // <View>
    //   <Text>ddd</Text>
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
