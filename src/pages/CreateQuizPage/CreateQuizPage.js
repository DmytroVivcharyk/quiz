import { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import CreateQuestionForm from '../../components/createQuestionForm/CreateQuestionForm'
import CreateQuizTitleForm from '../../components/createQuizTitleForm/createQuizTitleForm'
import CreateQyizPannel from '../../components/createQuizPannel/CreateQuizPannel'
import './CreateQuizPage.css'

const CreateQuizPage = () => {
    const [quizTitle, setQuizTitle] = useState('')
    const [questions, setQuestion] = useState([])

    const addQuestionHandler = (question) => {
        setQuestion(state => [...state, question])
    }

    const setQuizTitleHandler = (value) => {
        setQuizTitle(value)
    }

    const onQuizCleared = () => {
        setQuizTitle('')
        setQuestion([])
    }
    
    const onQuizCreated = () => {
        const newQuestions = questions.map((item, i) => ({
            id: i + 1,
            title: item.question,
            rightAnswerId: item.rightAnswer,
            answers: [
                {id: 1, title: item.answer1},
                {id: 2, title: item.answer2},
                {id: 3, title: item.answer3},
                {id: 4, title: item.answer4}
            ]
        })) 
        const newQuiz = {
            id: uuidv4(),
            topic: quizTitle,
            questions: newQuestions
        }

        axios.post('http://localhost:3100/quizzes', newQuiz)
            .then(() => {onQuizCleared()})
            .catch(e => {console.log(e)})

    }
    
    const addQuizTitle = !quizTitle ? <CreateQuizTitleForm setQuizTitleHandler={setQuizTitleHandler} /> : null
    
    const quizPanel = questions.length ? <CreateQyizPannel 
                            count={questions.length} 
                            onQuizCleared={onQuizCleared} 
                            onQuizCreated={onQuizCreated}
                            /> : null
    
    const form = quizTitle ? <CreateQuestionForm addQuestionHandler={addQuestionHandler} /> : null
    return (
        <div className='CreateQuizPage'>
            <div className='createQuiz__container'>
                <div className='createQuiz__body'>
                    <h1>Create your own Quiz!</h1>
                    {quizPanel}
                    <div className='createQuiz__actions'>
                       {addQuizTitle}
                       {form}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateQuizPage