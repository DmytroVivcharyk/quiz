import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchQuizzes } from '../../store/actions/quizzesActions'
import { Link } from 'react-router-dom'

import Loader from '../../components/loader/Loader'
import './QuizesPage.css'

const QuizesPage = () => {
    const dispatch = useDispatch()
    const {isQuizzesLoading, quizzes, quizzesError} = useSelector(state => state.quizzes)

    useEffect(() => {
        dispatch(fetchQuizzes())
    }, [])

    const quizList = quizzes.map((item, i) => {
        return (
            <li key={item.id}><Link to={`/quiz/${item.id}`}>{`${i + 1}. ${item.topic}`}</Link></li>
        )
    })

    const loader = isQuizzesLoading ? <Loader /> : null
    const error = quizzesError ? <h2 style={{textAlign: 'center', color: 'red',}}> Some Error </h2> : null
    const list = (loader || error) ? null : quizList

    return (
        <div className='QuizesPage'>
            <div className='quizesPage__ontainer'>
                <div className='quizesPage__body'>
                    <h1>Select a Quiz!!!</h1>
                    <ul>
                        {loader}
                        {error}
                        {list}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default QuizesPage