import {addUserAnswer, setActiveQuestion, setUserAnswer, clearUserAnswer} from '../slices/quizSlice'

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