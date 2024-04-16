import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes:[],
    isQuizzesLoading: true,
    quizzesError: null,
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        quizzesFetching: (state) => {
            state.isQuizzesLoading = true
        },
        quizzesFetched: (state, action) => {
            state.quizzes = action.payload
            state.isQuizzesLoading = false
        },
        quizzesFetchingError: (state, action) => {
            state.quizzesError = action.payload
            state.isQuizzesLoading = false
        },
        createNewQuiz : (state, action) => {
            state.quizzes.push(action.payload)
        }
    }
})

const {actions, reducer} = quizzesSlice

export const {quizzesFetching, 
                quizzesFetched, 
                quizzesFetchingError,
                createNewQuiz
            } = actions
export default reducer