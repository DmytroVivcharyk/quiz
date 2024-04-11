import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

import './FinishedQuizItem.css'

const FinishedQuizItem = () => (
    <li className='FinishedQuizItem'>
        <span>1. </span> &nbsp;
        <span>What animal can fly?</span> &nbsp;
        <FontAwesomeIcon icon={faCheck} className='xMark' />
    </li>
)

export default FinishedQuizItem