import { configureStore, combineReducers } from "@reduxjs/toolkit";

import quiz from './slices/quizSlice'
import quizzes from './slices/quizzesSlice'

const rootReducer = combineReducers({
    quiz,
    quizzes
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
})