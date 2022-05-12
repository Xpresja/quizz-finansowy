import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Quiz = ({navigation}) => {
  return (
    <View>
      <Text>Quiz</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({})