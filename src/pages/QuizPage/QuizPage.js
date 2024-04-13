import { CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

import FinishedQuiz from '../../components/finishedQuiz/FinishedQuiz'
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz'
import './QuizPage.css'

const QuizPage = () => {
    const nodeRef = useRef(null)
    const isFinished = useSelector(state => state.quiz.activeQuestion >= state.quiz.questions.length)
    const finished = {
        title: 'Quiz is compleated',
        component: <FinishedQuiz />
    }
    const active = {
        title: 'Give anwers for these questions',
        component: <ActiveQuiz />
    }

    const View = isFinished ? finished : active
    
    return (
        <div className="Quiz" >
            <div className='quiz__container'>
                <div className='quiz__body' ref={nodeRef} >
                    <h1>{View.title}</h1>
                    <div className='quiz__questions'>
                        {View.component}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPage