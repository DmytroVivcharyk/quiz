import axios from 'axios'
import {quizzesFetching, quizzesFetched, quizzesFetchingError, createNewQuiz} from '../slices/quizzesSlice'

export const fetchQuizzes = () => {
    return async (dispatch) => {
        dispatch(quizzesFetching())

        try {
            const response = await axios.get(`http://localhost:3100/quizzes`)
            
            if(response.statusText === 'OK') {
                dispatch(quizzesFetched(response.data))

            } else {
                throw new Error(response.statusText)
            }
        } catch (e) {
            dispatch(quizzesFetchingError(e.message))
            console.log(e)
        }
    }
}

// export const createNewQuizHandler = (item) => {
//     return async dispatch => {
//         try {
//            const response = await axios.post('http://localhost:3100/quizzes', item)

//         } catch (e) {
//             console.error(e)
//         }
//     }
// }