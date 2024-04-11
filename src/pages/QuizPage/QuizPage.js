import FinishedQuiz from '../../components/finishedQuiz/FinishedQuiz'
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz'
import './QuizPage.css'

const QuizPage = () => {

    return (
        <div className="Quiz" >
            <div className='quiz__container'>
                <div className='quiz__body'>
                    <h1>Give anwers for these questions</h1>
                    <div className='quiz__questions'>
                        <ActiveQuiz />
                        {/* <FinishedQuiz /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPage