import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import MyInput from '../UI/MyInput/MyInput'
import './CreateQuestionForm.css'

const validationSchema = yup.object().shape({
    question: yup.string().trim().min(2, 'at least 2 symbols').max(20, 'not more than 20').required(),
    answer1: yup.string().trim().min(2, 'at least 2 symbols').max(20, 'not more than 20').required(),
    answer2: yup.string().trim().min(2, 'at least 2 symbols').max(20, 'not more than 20').required(),
    answer3: yup.string().trim().min(2, 'at least 2 symbols').max(20, 'not more than 20').required(),
    answer4: yup.string().trim().min(2, 'at least 2 symbols').max(20, 'not more than 20').required(),
    rightAnswer: yup.number().required()
})

const CreateQuestionForm = ({addQuestionHandler}) => {
    return (
        <Formik
            initialValues={{
                question: '',
                answer1: '',
                answer2: '',
                answer3: '',
                answer4: '',
                rightAnswer: ''

            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                addQuestionHandler(values)
                actions.resetForm()
                window.scroll(0,0)
            }}
        >
            <Form>
                <h3>Add Question to your quiz</h3>
                <div className='questionName'>
                    <MyInput
                        name='question'
                        title='Enter question'
                        placeholder='enter question here...'
                    />
                </div>
                <div className='questionAnswers' >
                    <MyInput
                        name='answer1'
                        title='Answer №1'
                        placeholder='enter answer №1 here...'
                    />
                    <MyInput
                        name='answer2'
                        title='Answer №2'
                        placeholder='enter answer №2 here...'
                    />
                    <MyInput
                        name='answer3'
                        title='Answer №3'
                        placeholder='enter answer №3 here...'
                    />
                    <MyInput
                        name='answer4'
                        title='Answer №4'
                        placeholder='enter answer №4 here...'
                    />
                    
                </div>

                <div className='selectRightAnswer'>
                    <label htmlFor='rightAnswer'>Select right answer</label>
                    <Field as='select' name='rightAnswer' id='rightAnswer'>
                        <option value=''>Select right Answer</option>
                        <option value={1}>Answer №1</option>
                        <option value={2}>Answer №2</option>
                        <option value={3}>Answer №3</option>
                        <option value={4}>Answer №4</option>
                    </Field>
                    <ErrorMessage 
                        name='rightAnswer' 
                        component='div'
                        className='errorMesage' />
                </div>

                <div className='createQuiz__buttons' style={{paddingLeft: 0}}>
                    <button type='submit' >Add Question</button>
                    <button type='reset'>Reset</button>
                </div>
            </Form>
        </Formik>
    )
}

export default CreateQuestionForm