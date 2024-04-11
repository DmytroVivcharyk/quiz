import FinishedQuizItem from '../finishedQuizItem/FinishedQuizItem'
import './FinishedQuiz.css'

const FinishedQuiz = () => {
    return (
        <div className='FinishedQuiz'>
            <h4>Right Answered: 2/3</h4>
            <ul className='questionsReslt'>
                <FinishedQuizItem />
                <FinishedQuizItem />
                <FinishedQuizItem />
                <FinishedQuizItem />
            </ul>
            <div className='FinishedQuiz__actions'>
                <button>to quiz list</button>
                <button>retry</button>
            </div>
        </div>
    )
}

export default FinishedQuiz