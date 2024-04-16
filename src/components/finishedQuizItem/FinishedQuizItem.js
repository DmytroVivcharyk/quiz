import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

import './FinishedQuizItem.css'

const FinishedQuizItem = ({0: title, 1: state, id}) => {
    const iconProps = state ? 
            {icon: faCheck, className: 'xMark rightAnswer'} 
            : {icon: faXmark, className: 'xMark wrongAnswer'}
    
            return(
        <li className='FinishedQuizItem'>
            <span>{id + 1}. </span> &nbsp;
            <span>{title}</span> &nbsp;
            <FontAwesomeIcon {...iconProps}/>
        </li>
    )
}

export default FinishedQuizItem