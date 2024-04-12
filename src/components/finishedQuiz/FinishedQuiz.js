import { useSelector, useDispatch } from 'react-redux'

import {restartQuiz} from '../../store/slices/quizSlice'
import FinishedQuizItem from '../finishedQuizItem/FinishedQuizItem'
import './FinishedQuiz.css'

const FinishedQuiz = () => {
    const {questions, results} = useSelector(state => state.quiz)
    const dispatch = useDispatch()

    const righrAnswersCount = Object.values(results).reduce((acc, item) => item? acc += 1: acc, 0)

    return (
        <div className='FinishedQuiz'>
            <h4>Right Answered: {righrAnswersCount}/{questions.length}</h4>
            <ul className='questionsReslt'>
                {
                    Object.entries(results).map((item, i) => {
                        return <FinishedQuizItem key={i} id={i} {...item} />
                    })
                }
            </ul>
            <div className='FinishedQuiz__actions'>
                <button>to quiz list</button>
                <button
                onClick={() => {dispatch(restartQuiz())}}
                >retry</button>
            </div>
        </div>
    )
}

export default FinishedQuiz