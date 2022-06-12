import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation, route}) => {

  const {gameScore} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.scoreTextContainer}>
        <Text style={styles.scoreText}>Zdobyłeś: {gameScore}</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('QuizGame', {
          clearQuestionNumber: 0
        })}><Text>Powrót do gry</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },  
  scoreText:{
    fontSize:15,
    
  }
 
})