import axios from 'axios'
import {
        questionsFetching,
        questionsFetched,
        questionsFetchingError,
        addUserAnswer, 
        setActiveQuestion, 
        setUserAnswer, 
        clearUserAnswer} from '../slices/quizSlice'

export const onAnswerClicked = (id) => {
    return (dispatch, getState) => {
        const activeId = getState().quiz.activeQuestion
        const {rightAnswerId, title} = getState().quiz.questions[activeId]
        const userAnswerState = id === rightAnswerId

        if(getState().quiz.userAnswer) return

        dispatch(setUserAnswer({[id]: userAnswerState ? 'success' : 'error'}))
        dispatch(addUserAnswer({[title]: userAnswerState}))

        setTimeout(() => {
            dispatch(clearUserAnswer())
            dispatch(setActiveQuestion(activeId + 1))
        }, 1000)

    }
}

export const fetchQuiz = (id) => {
    return async (dispatch) => {
        dispatch(questionsFetching())

        try {
            const response = await axios.get(`http://localhost:3100/quizzes/${id}`)
            
            if(response.statusText === 'OK') {
                dispatch(questionsFetched(response.data.questions))

            } else {
                throw new Error(response.statusText)
            }
        } catch (e) {
            dispatch(questionsFetchingError(e.message))
            console.log(e)
        }
    }
}