const person = [
    {
    "id":"1",
    "category":"Mentalność bogacenia się",  
    "questions": [
        
        {"question":"Pytanie numer 1", "difficulty":"easy", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
        {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
     
                ]  
    },
    {
    "id":"2",
    "category":"Strategie finansowe",  
    "questions": [
        
        {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
        {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
        
                ]  
        },
    {
    "id":"3",
    "category":"Inwestycje",  
    "questions": [
        
        {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
        {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
        
                ]  
        },
//     {
//         "id":"4",
//         "category":"Inwestycje",  
//         "questions": [
            
//             {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
//             {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
            
//                     ]  
//             },
//     {
//         "id":"5",
//         "category":"Inwestycje",  
//         "questions": [
            
//             {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
//             {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
            
//                     ]  
//             },

//     {
//         "id":"6",
//         "category":"Inwestycje",  
//         "questions": [
            
//             {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
//             {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
            
//                     ]  
//             },
            
    

        

]

const collectionData = (collection) => {

        let person = [];

        if(collection === "Expert 1") {
                person = [
                        {
                        "id":"1",
                        "category":"Mentalność bogacenia się",  
                        "questions": [
                            
                            {"question":"Pytanie numer 1", "difficulty":"easy", "correct_answer":"Poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"Druga poprawna odpowiedz", "incorrect_answers": ["Flipy","Podnajem","Rynek developerski"]},
                            {"question":"Pytanie numer 3", "difficulty":"medium", "correct_answer":"Trzecia poprawna odpowiedz", "incorrect_answers": ["Srebro","Złoto","Diament"]},
                            {"question":"Pytanie numer 4", "difficulty":"medium", "correct_answer":"Czwarta poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 5", "difficulty":"medium", "correct_answer":"Piąta poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 6", "difficulty":"medium", "correct_answer":"Szósta poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 7", "difficulty":"medium", "correct_answer":"Siodma poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 8", "difficulty":"medium", "correct_answer":"Ósma poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 9", "difficulty":"medium", "correct_answer":"Dziewiąta poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 10", "difficulty":"medium", "correct_answer":"Dziesiąta poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                         
                                    ]  
                        },
                        {
                        "id":"2",
                        "category":"Strategie finansowe",  
                        "questions": [
                            
                            {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            
                                    ]  
                            },
                        {
                        "id":"3",
                        "category":"Inwestycje",  
                        "questions": [
                            
                            {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            
                                    ]  
                            },]
        }
        else if(collection === "Expert 2") {
                
                person = [
                        {
                        "id":"1",
                        "category":"Flipy",  
                        "questions": [
                            
                            {"question":"Pytanie numer 1", "difficulty":"easy", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                         
                                    ]  
                        },
                        {
                        "id":"2",
                        "category":"Podnajem",  
                        "questions": [
                            
                            {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            
                                    ]  
                            },
                        {
                        "id":"3",
                        "category":"Metody pozyskiwania okazji",  
                        "questions": [
                            
                            {"question":"Pytanie numer 1", "difficulty":"hard", "correct_answer":"poprawna odpowiedz", "incorrect_answers": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            {"question":"Pytanie numer 2", "difficulty":"medium", "correct_answer":"poprawna odpowiedz", "incorrect_answer": ["Back in Black","Abbey Road","The Dark Side of the Moon"]},
                            
                                    ]  
                            },]
        }

        return person
}

const gameAPI = () => {

        let gameData = {}
}


export default collectionData;



