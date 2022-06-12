import React, {useRef, useEffect, useState} from 'react';
import {View, ScrollView, Image, Animated, Text, Dimensions} from 'react-native';
import QuestionsCategoriesLayout from '../components/QuestionsCategoriesLayout'


 const windowHeight = Dimensions.get('window').height;
 const CATEGORIES_H = windowHeight * 0.6;
 const BANNER_H = windowHeight * 0.4;

 
const Categories = ({navigation, route}) => {

  const [quizCategoriesData, setQuizCategoriesData] = useState([])

  const {expert} = route.params;
  const scrollA = useRef(new Animated.Value(0)).current;

  const getData = async () => {
    const url = `https://eu-central-1.aws.data.mongodb-api.com/app/application-0-ekvws/endpoint/zdalneAPIHurraFajnie?secret=sekret&arg1=${expert}`;
    const res = await fetch(url);
    const data = await res.json();
    setQuizCategoriesData(data)
    console.log(data)
  };
  
  useEffect(() => {
    getData();
  }, []);

  return (
   
   
   <View style={{backgroundColor:'#222222'}}>
      
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
          />
        </View>
        <View style={[styles.subCategories, { minHeight: CATEGORIES_H }]}>

          <View style={styles.textQuestions}><Text>Kategorie pytań</Text></View>

          <View style={styles.subCategoryContainer}>
            
          {quizCategoriesData.map((user, key) => (

            
                <QuestionsCategoriesLayout key={key} category={user.category} quizData={user.data} navigation={navigation}  />
         

            ))}
          

          </View>           

      </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = {
  text: {
    margin: 24,
    fontSize: 16,
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
  subCategories:{
    height:'100%',
    backgroundColor:'white',
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
   
  
  },
  textQuestions:{
    marginTop:15,
    alignItems:'center',
    justifyContent:'center',
  },
};

export default Categories;