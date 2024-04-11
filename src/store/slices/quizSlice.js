import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {id: 1, 
        title: 'What animal can fly ?', 
        rightAnswerId: 4, 
        answers: [
            {id: 1, title: 'Cat'},
            {id: 2, title: 'Dog'},
            {id: 3, title: 'Raven'},
            {id: 4, title: 'Pinguin'}
        ]},
        {id: 1, 
        title: 'In what year did mankind reach the moon?', 
        rightAnswerId: 4, 
        answers: [
            {id: 1, title: '1957'},
            {id: 2, title: '1961'},
            {id: 3, title: '1969'},
            {id: 4, title: 'havent reached yet'}
        ]}
    ],
    userAnswer: null,
    answers: [],
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
            state.answer = action.payload
            state.answers.push(action.payload)
        }
    }
})

const {reducer, actions} = quizSlice

export const {} = actions
export default reducer