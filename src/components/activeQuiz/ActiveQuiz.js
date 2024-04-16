import { CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

import AnswersList from '../answersList/AnswersList'
import './ActiveQuiz.css'

const ActiveQuiz = () => {
    const {activeQuestion, questions, userAnswer} = useSelector(state => state.quiz)
    const {title, answers} = questions[activeQuestion]
    const nodeRef = useRef(null)

    const inProp = Boolean(!userAnswer)

    return (
        <CSSTransition
        timeout={1000}
        in={inProp}   
        nodeRef={nodeRef}
        classNames='ActiveQuizAnimate'
        >
            <div className='ActiveQuiz' ref={nodeRef} >
                <div className='activeQuiz__title'>
                    <p>
                        <strong>{activeQuestion + 1}. </strong>
                        {title}
                    </p>
                    <small>{activeQuestion + 1} of {questions.length}</small>
                </div>
                <div className='activeQuiz__answers'>
                    <AnswersList answers={answers}/>
                </div>
            </div>
        </CSSTransition>
    )
}

export default ActiveQuiz