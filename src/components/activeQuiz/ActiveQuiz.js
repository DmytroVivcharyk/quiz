import { useSelector } from 'react-redux'

import AnswersList from '../answersList/AnswersList'
import './ActiveQuiz.css'

const ActiveQuiz = () => {
    const {activeQuestion, questions} = useSelector(state => state.quiz)
    const {title, answers} = questions[activeQuestion]

    return (
        <div className='ActiveQuiz'>
            <div className='activeQuiz__title'>
                <p>
                    <strong>{activeQuestion + 1}. </strong>
                    {title} ?
                </p>
                <small>{activeQuestion + 1} of {questions.length}</small>
            </div>
            <div className='activeQuiz__answers'>
                <AnswersList answers={answers}/>
            </div>
        </div>
    )
}

export default ActiveQuiz