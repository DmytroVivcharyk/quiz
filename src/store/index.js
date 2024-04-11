import { configureStore, combineReducers } from "@reduxjs/toolkit";

import quiz from './slices/quizSlice'

const rootReducer = combineReducers({
    quiz
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
})