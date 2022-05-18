import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React from 'react'

const QuestionsCategoriesLayout = (props) => (
  
    <View style={[styles.subCategory]}>
      <View>
        <Image
          style={styles.expertsImage}
          source={{ uri: 'https://reactjs.org/logo-og.png' }} />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Quiz")} style={styles.textContainer}>
        <Text style={styles.textH1}>{props.category}</Text>
      </TouchableOpacity>
    </View>
  );

export default QuestionsCategoriesLayout

const styles = StyleSheet.create({

    subCategory:{
        backgroundColor:'white',
        marginTop: 20,
        borderRadius: 22,
        marginLeft: 5,
        marginRight: 5,
       
        shadowColor: "black",
        shadowOpacity: 0.25,
        elevation: 5,
        alignItems:'center',
        
        flexDirection:'row'
    
      },
      expertsImage:{
        padding:25,
        paddingBottom:55,
        paddingRight:65,
        borderRadius: 22,
        resizeMode:'cover'
      },
})