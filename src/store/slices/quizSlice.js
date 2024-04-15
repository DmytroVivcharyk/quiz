import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions:[],
    isQuestionsLoading: true,
    questionsError: null,
    userAnswer: null,
    results: {},
    activeQuestion: 0
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        questionsFetching: (state) => {
            state.isQuestionsLoading = true
        },
        questionsFetched: (state, action) => {
            state.questions = action.payload
            state.isQuestionsLoading = false
        },
        questionsFetchingError: (state, action) => {
            state.questionsError = action.payload
            state.isQuestionsLoading = false
        },
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
        },
        clearQuiz: (state) => {
            state.questions = []
            state.activeQuestion = 0
            state.isQuestionsLoading = false
            state.questionsError = null
            state.results = {}
            state.userAnswer = null
        }
    }
})

const {reducer, actions} = quizSlice

export const {
            questionsFetching,
            questionsFetched,
            questionsFetchingError,
            setActiveQuestion, 
            addUserAnswer,
            clearUserAnswer,
            restartQuiz,
            clearQuiz, 
            setUserAnswer} = actions

export default reducer