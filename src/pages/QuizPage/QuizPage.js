import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { clearQuiz } from '../../store/slices/quizSlice'
import { fetchQuiz } from '../../store/actions/quizActions'
import FinishedQuiz from '../../components/finishedQuiz/FinishedQuiz'
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz'
import Loader from '../../components/loader/Loader'
import './QuizPage.css'

const QuizPage = () => {
    const nodeRef = useRef(null)
    const {isQuestionsLoading, questionsError} = useSelector(state => state.quiz)
    const isFinished = useSelector(state => state.quiz.activeQuestion >= state.quiz.questions.length)
    const dispatch = useDispatch()
    const {id} = useParams()
    
    useEffect(() => {
        dispatch(fetchQuiz(id))

        return () => {
            dispatch(clearQuiz())
        }
    },[])
    
    const finished = {
        title: 'Quiz is compleated',
        component: <FinishedQuiz />
    }
    const active = {
        title: 'Give anwers for these questions',
        component: <ActiveQuiz />
    }

    const View = isFinished ? finished : active

    const loader = isQuestionsLoading ? <Loader /> : null
    const error = questionsError ? <h2 style={{textAlign: 'center', color: 'red',}}> Some Error </h2> : null
    const quiz = (loader || error) ? null : View.component

    return (
        <div className="Quiz" >
            <div className='quiz__container'>
                <div className='quiz__body' ref={nodeRef} >
                    <h1>{View.title}</h1>
                    <div className='quiz__questions'>
                        {loader}
                        {error}
                        {quiz}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPage