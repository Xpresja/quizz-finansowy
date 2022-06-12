import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyStack from './navigation';


const App = () => {
  return (  

  //  <View><Text>test</Text></View>
    //  <Testowanie/>
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>
 
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    
  },
});
