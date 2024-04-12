import AnswerItem from '../answerItem/AnswerItem'
import './AnswersList.css'

const AnswersList = ({answers}) => {
    return (
        <ul className='AnswersList'>
            { answers.map((item, i) => (
                <AnswerItem key={i} {...item}/>
            )) }
        </ul>
    )
}

export default AnswersList