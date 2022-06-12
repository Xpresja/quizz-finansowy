import React, {useRef} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import QuestionsCategoriesLayout from '../components/QuestionsCategoriesLayout'


const windowHeight = Dimensions.get('window').height;
const CATEGORIES_H = windowHeight*0.6;
const BANNER_H = windowHeight*0.4;
const Experts = [
  {
    "id":"1",
    "expert": "Expert_1",
    "topics": 'Strategie finansowe\nStrategie marketingowe'
  },
  {
    "id":"2",
    "expert": "Expert_2",
    "topics": 'Rynek nieruchomości'
  },
  , {
    "id":"3",
    "expert": "Expert_3",
    "topics": 'Kryptowaluty'
  },
  {
    "id":"4",
    "expert": "Expert_4",
    "topics": 'Oszczędzanie'
  },
  {
    "id":"5",
    "expert": "Expert_5",
    "topics": 'Akcje \n metale szlachetne'
  }
]

const Home = ({navigation}) => {


  const scrollA = useRef(new Animated.Value(0)).current;  

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

            {Experts.map(user => (

              <View key={user.id} style={[styles.subCategory]}>
                <View>
                  <Image
                    style={styles.expertsImage}
                    source={{ uri: 'https://reactjs.org/logo-og.png' }} />
                </View>
                <TouchableOpacity onPress={() => {
                  return navigation.navigate("Categories", {
                    expert: user.expert
                  });
                }} style={styles.textContainer}>
                  <Text style={styles.textH1}>{user.expert}</Text>
                  <Text style={styles.textH1}>{user.topics}</Text>
                </TouchableOpacity>
              </View>


            ))}

          </View>

      </View>
      </Animated.ScrollView>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({

  
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
  textContainer:{
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },  
  textH1:{
    textAlign:'center'
  }
})
