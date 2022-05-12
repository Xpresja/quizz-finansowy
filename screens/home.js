import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.baner}><Text>Baner</Text></View>
      <View style={styles.subCategories}>
        <View style={styles.textQuestions}><Text>Kategorie pytań</Text></View>
        <View style={styles.subCategoryContainer}>
          <View style={[styles.subCategory, styles.subCategoryMargin]}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.expertsImage}
                source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.textContainer}>
              <Text style={styles.textH1}>1</Text>
              <Text style={styles.text}>Strategie finansowe {"\n"}strategie marketingowe</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.subCategory}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.expertsImage}
                source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textH1}>2</Text>
              <Text style={styles.text}>Rynek nieruchomości</Text>
            </View>

          </View>
          <View style={styles.subCategory}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.expertsImage}
                source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textH1}>3</Text>
              <Text style={styles.text}>Kryptowaluty</Text>
            </View>

          </View>
          <View style={styles.subCategory}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.expertsImage}
                source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textH1}>4</Text>
              <Text style={styles.text}>Oszczędzanie</Text>
            </View>

          </View>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  
  container:{
    flex:1,
    backgroundColor:'grey',
  },
  baner:{
    backgroundColor:'grey',
    flex:2,
    alignItems:'center'
  },
  subCategories:{
    flex:4,
    backgroundColor:'white',
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,

  },
  subCategoryContainer:{
    flex:9,
  },
  textQuestions:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
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
    alignItems:'center',
    flex:1,
    marginRight:20
    
  },
  textH1:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color:'black',
  },
  text:{
    textAlign:'center'
  }
  
})
