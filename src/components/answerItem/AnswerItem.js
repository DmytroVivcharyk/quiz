import { useDispatch, useSelector } from 'react-redux'

import {onAnswerClicked} from '../../store/actions/quizActions'
import './AnswerItem.css'

const AnswerItem = ({title, id}) => {
    const dispatch = useDispatch()
    const  userAnswer = useSelector(state => state.quiz.userAnswer)

    let answerState = ' '

    if(userAnswer) {
        answerState += userAnswer[id]
    }

    return (
        <li className={'AnswerItem' + answerState}
        onClick={() => {dispatch(onAnswerClicked(id))}}
        >{title}</li>
    )
}


export default AnswerItem