import React, {useRef} from 'react';
import {View, ScrollView, Image, Animated, Text, Dimensions} from 'react-native';
import person from '../API/API';
import QuestionsCategoriesLayout from '../components/QuestionsCategoriesLayout'




 const BANNER_H = 350;
 const TOPNAVI_H = 50;
 const windowHeight = Dimensions.get('window').height;
 const categoriesLayoutHeight = windowHeight*0.7;


const HomeScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      
      <Animated.ScrollView
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
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
        <View style={[styles.subCategories, { minHeight: categoriesLayoutHeight }]}>

          <View style={styles.textQuestions}><Text>Kategorie pytań</Text></View>

          <View style={styles.subCategoryContainer}>

            {person.map(user => (

              <QuestionsCategoriesLayout key={user.id} category={user.category}  />

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
    alignItems:'center',
    justifyContent:'center',
  },
};

export default HomeScreen;