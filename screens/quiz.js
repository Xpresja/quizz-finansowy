import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Modal} from 'react-native'
import React, {useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Quiz = ({navigation, route}) => {

  const {quizData} = route.params;

  // console.log(quizData, "-----------------To jest route z category.js")

  

  // const Apidata = data[0].data;
  // console.log(Apidata, "----------------- to natomiast jest dawne api lokalne")

  const filteredData = quizData.filter(element => {
    return element.difficulty ==='medium'
  }) 
  
  
  let GameData = filteredData.slice(0,5);

  const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }


  const [test, setTest] = useState()
  const [index, setIndex]  = useState(0);
  const [correctAnswer, setcorrectAnswer] = useState(null);
  const [currentOptionSelected , setcurrentOptionSelected ] = useState(null)
  const [isOptionDisabled, setIsOptionDisabled] = useState(false)
  const [showNextButton, setShowNextButton] = useState(false)
  const [score, setScore] = useState(0)
  const [showScoreModal, setShowScoreModal] = useState(false)



    const prepareGameData = () => {
    //tutaj do zmiennej przechowującej wszystkie dane do całego zestawu gry, będę obrabiał te dane czyli
    //1. Filtrował, żeby użytkownik miał konkretny zestaw pytań od poziomu jego umiejętności
    //2. Wycinał poprawne odpowiedzi, żeby użytkownik nie dostał ponownie tej samej poprawnej odpowiedzi
    //dane będą 
    // a) pobierane, które były poprawne, czyli w przyciskach odpowiedzi
    // b) od razu wycinane (zależy czy będą konsekwencje) lub po przycisku do ostatniego pytania, który przynosi do modala 
    //3.Tasował, żeby uż. nie dostawał ponownie takiego samego pytania

    const filteredData = quizData.filter(element => {
      return element.difficulty==='easy'
    }) //filter data based on difficulty level
    const slicedData = filteredData.slice(0,5) //show 5 questions per game
    setTest(slicedData)

  }



    useEffect(() => {
            
      prepareGameData()

    }, [])
   

const validateOption = (pressedAnswer) => {

  const correct_answer = GameData[index]['correct_option'];
  setcorrectAnswer(correct_answer)
  setcurrentOptionSelected(pressedAnswer)
  setIsOptionDisabled(true)
  setShowNextButton(true)

  if(correct_answer===pressedAnswer){
    setScore(score+1)
  }

}  

const renderQuestion = () => {
  return (
    <View style={{padding:30}}>
      <Text style={{fontSize:17}}>{index +1}/{GameData.length}</Text>
      <Text style={{fontSize:17}}>{GameData[index].question}</Text>
    </View>
  )
}
const renderOptions = () => {

  const options = GameData[index].options;
  return(

    <View>
      {options.map((option, key) => (

        <TouchableOpacity key={key} disabled={isOptionDisabled} style={{
          backgroundColor:'white',
          alignItems:'center',
          marginTop:10,
          marginHorizontal:10,
          padding:20,
          
          borderRadius:20,
          shadowColor: "green",
          shadowOpacity: 0.25,
          elevation: 5,
          backgroundColor: correctAnswer == option 
          ? 'green'
          : option == currentOptionSelected
          ? 'red'
          : 'white'

          
        }} onPress={()=> validateOption(option)} > 
          <Text>{option}</Text>
        </TouchableOpacity>
))}
     
   </View>
  )
}

const renderNext = () => {


  return (
  <View style={{
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    margin: 10,
    marginBottom: 20
  }}  >
    <TouchableOpacity activeOpacity={.9} onPress={() => {


      if( (index+1) >= GameData.length){

        setShowScoreModal(true)
        console.log('uż. kliknął z piątej odpowiedzi na przycisk next')



      }
      else{

        console.log(index+1)
        setIndex(index+1)
        setIsOptionDisabled(false)
        setShowNextButton(false)
        setcorrectAnswer(null)
        setcurrentOptionSelected(null)
      }

    }} ><Text style={{
      backgroundColor: 'white',
      padding: 20,
      paddingHorizontal: 45,
      borderRadius: 20,

      shadowColor: "black",
      shadowOpacity: 0.25,
      elevation: 5,
    }}
    >Next</Text></TouchableOpacity>
  </View>
)}



  return (
    <SafeAreaView style={{flex:1, justifyContent:'flex-start'}}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />

      {renderQuestion()}
      {renderOptions()}
      {showNextButton ? renderNext(): null}
      
      {/* Score Modal */}
      <Modal
      animationType='slide'
      transparent={true}
      visible={showScoreModal}
      >
        <View style={{
          flex:1,
          backgroundColor:'blue',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <View style={{
            backgroundColor:'white',
            width:'90%',
            borderRadius:20,
            padding:20,
            alignItems:'center'
          }}>
            <Text>Zdobyłeś {score} punktów</Text>
          </View>
          <TouchableOpacity onPress={()=>{
            setScore(0)
            setIsOptionDisabled(false)
            setIndex(0)
            setShowScoreModal(false)
            setShowNextButton(false)
            
          }} 
            style={{
            backgroundColor:'white',
            width:'90%',
            borderRadius:20,
            padding:20,
            alignItems:'center',
            marginTop:10
          }}>
              <Text>Zagraj ponownie</Text>
          </TouchableOpacity>

        </View>
      </Modal>
     
    </SafeAreaView>
  )
}

export default Quiz

const styles = StyleSheet.create({})

// 1. Zrobić większą tablicę, potem pobrać tylko pierwszych 5 elementów z tablicy
// 2. Poprawne odpowiedzi będą wycinane i wstawiane w inna tablicę z poprawnymi odpowiedziami, 
// po to żeby użytkownik mógł w przyszłości ponowanie przerobić przerobione pytania
// 3. Można zrobić filtr po odpowiedziach z poziomami trudności

// Poprawna odpowiedz uzytkownika ma isc do osobnej tablicy, tak zeby pytanie użytkownika nie powtarzało się ponownie w jego 
// procesie udzielania odpowiedzi. Niepoprawne odpowiedzi mają nadal zostać w pytań, zeby uzytkownik mogl ponownie udzielic na nie odpowiedz
// Pytania będą mieszane, żeby użytkownik nie mógł od razu tych samych pytań niepoprawnych wyświetlać