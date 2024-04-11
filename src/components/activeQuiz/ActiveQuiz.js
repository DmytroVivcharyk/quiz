import AnswersList from '../answersList/AnswersList'
import './ActiveQuiz.css'

const ActiveQuiz = () => {
    return (
        <div className='ActiveQuiz'>
            <div className='activeQuiz__title'>
                <p>
                    <strong>6. </strong>
                    What animal can fly ?
                </p>
                <small>6 of 10</small>
            </div>
            <div className='activeQuiz__answers'>
                <AnswersList />
            </div>
        </div>
    )
}

export default ActiveQuiz