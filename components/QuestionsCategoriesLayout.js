import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React, {useState }from 'react'




const QuestionsCategoriesLayout = (props) => {

  const [ExpandedListHeight, setExpandedListHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => {

        if (isExpanded === false) {

          setExpandedListHeight(50);
          setIsExpanded(true);
        }
        else {

          setExpandedListHeight(0);
          setIsExpanded(false);

        }

      } }
        style={[styles.subCategory]}>
        <View>
          <Image
            style={styles.expertsImage}
            source={{ uri: 'https://reactjs.org/logo-og.png' }} />
        </View>
        <View onPress={() => props.navigation.navigate("Quiz")} style={styles.textContainer}>
          <Text style={styles.textH1}>{props.category}</Text>
        </View>
      </TouchableOpacity>
      <View style={[ styles.ExpandedList, {height:ExpandedListHeight} ]} onPress={() => props.navigation.navigate("Quiz", {
                    quizData: props.quizData
                  })}>
                    <TouchableHighlight  onPress={()=> console.log('dziala')} style={[styles.levelBtn, {borderLeftWidth:0}]}><Text style={styles.ExpandedText}>Poziom łatwy</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.levelBtn}><Text style={styles.ExpandedText}>Poziom średni</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.levelBtn}><Text style={styles.ExpandedText}>Poziom trudny</Text></TouchableHighlight>
                    
      {/* <TouchableOpacity style={{backgroundColor:'red', width:'100%'}}><Text style={styles.ExpandedText}>Poziom łatwy</Text></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'red'}}><Text style={styles.ExpandedText}>Poziom średni</Text></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'red'}}><Text style={styles.ExpandedText}>Poziom trudny</Text></TouchableOpacity> */}
      </View>

    </>
  );
};

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
      ExpandedList:{
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'space-between'
              
      },
      ExpandedText:{
        color:"white",
        fontFamily:'Montserrat'
        
      },
      levelBtn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderLeftColor:'white',
        borderRadius:10
      }
})