import { Formik, Form } from 'formik'
import * as yup from 'yup'
import MyInput from '../UI/MyInput/MyInput'
import './createQuizTitleForm.css'

const validationSchema = yup.object().shape({
    quizTitle: yup.string().trim().min(2, 'at least 2 symbols').max(20, 'not more than 20').required(),
})

const CreateQuizTitleForm = ({setQuizTitleHandler}) => {
    return (
        <Formik
            initialValues={{
                quizTitle: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                setQuizTitleHandler(values.quizTitle)
                actions.resetForm()
            }}
        >
            <Form>
                <h3>Add title to your quiz</h3>
                <MyInput
                    name='quizTitle'
                    title='Enter quiz title'
                    placeholder='enter quiz title...'
                />
                <div className='createTitle__buttons'>
                    <button type='submit' >Confirm</button>
                    <button type='reset'>Reset</button>
                </div>
            </Form>
        </Formik>
    )
}

export default CreateQuizTitleForm