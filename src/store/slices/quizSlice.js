import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {id: 1, 
        title: 'What animal can fly ', 
        rightAnswerId: 2, 
        answers: [
            {id: 1, title: 'Cat'},
            {id: 2, title: 'Raven'},
            {id: 3, title: 'Dog'},
            {id: 4, title: 'Pinguin'}
        ]},
        {id: 1, 
        title: 'In what year did mankind reach the moon', 
        rightAnswerId: 3, 
        answers: [
            {id: 1, title: '1957'},
            {id: 2, title: '1961'},
            {id: 3, title: '1969'},
            {id: 4, title: 'havent reached yet'}
        ]}
    ],
    userAnswer: null,
    results: {},
    activeQuestion: 0
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setActiveQuestion: (state, action) => {
            state.activeQuestion = action.payload
        },
        addUserAnswer: (state, action) => {
            Object.assign(state.results, action.payload)
        },
        setUserAnswer: (state, action) =>  {
            state.userAnswer = action.payload
        },
        clearUserAnswer: (state) => {
            state.userAnswer = null
        },
        restartQuiz: (state) => {
            state.results = {}
            state.activeQuestion = 0
            state.userAnswer = null
        }
    }
})

const {reducer, actions} = quizSlice

export const {setActiveQuestion, 
            addUserAnswer,
            clearUserAnswer,
            restartQuiz, 
            setUserAnswer} = actions

            export default reducer