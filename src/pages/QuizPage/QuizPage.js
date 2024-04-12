import { useSelector } from 'react-redux'

import FinishedQuiz from '../../components/finishedQuiz/FinishedQuiz'
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz'
import './QuizPage.css'

const QuizPage = () => {
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
                <div className='quiz__body'>
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