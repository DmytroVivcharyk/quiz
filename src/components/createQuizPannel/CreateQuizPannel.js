import './CreateQuizPannel.css'

const CreateQyizPannel = ({count, onQuizCleared, onQuizCreated}) => {
    return (
        <div className='CreateQuizPannel'>
            <h3>Create Quiz</h3>
            <h3 className='counter'>Questions added count: {count}</h3>

            <div className='createQuiz__buttons'>
                <button type='button' onClick={onQuizCreated}>Create Quiz</button>
                <button type='button' onClick={onQuizCleared}>Reset</button>
            </div>
        </div>
    )
}

export default CreateQyizPannel