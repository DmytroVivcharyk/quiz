import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import MyInput from '../../components/UI/MyInput/MyInput'
import './AuthPage.css'

const validationSchema = yup.object().shape({
    login: yup.string().trim().min(2, 'at least 2 symbols').max(20, 'not more than 20').email('invalid email').required(),
    password: yup.string().trim().min(2, 'at least 2 symbols').max(20, 'not more than 20').required()
})

const AuthPage = () => {
    const signIn = useSignIn();
    const navigate = useNavigate()

    const onSubmited =  async (values) => {
        const requestBody = {
            username: 'kminchelle',
            password: '0lelplR',
            expiresInMins: 30,
        }

        try {
            const response = await axios.post('https://dummyjson.com/auth/login', requestBody)

            signIn({
                auth: {
                    token: response.data.token,
                    type: 'Bearer',
                },
                userState: {
                    name: values.login,
                    id: 'fff-fff-ffff'
                  }
            })
            navigate('/')
            
        }catch (e) {
            console.log('Login Errorr', e)
        }
    }

    return (
        <div className='AuthPage'>
            <div className='auth__container'>
                <div className='auth__body'>
                    <h1>Sign In</h1>
                    <div className='auth__actions'>
                        <Formik
                            initialValues={{
                                login: '',
                                password: ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={onSubmited}
                        >
                            <Form>
                                <MyInput
                                    autoComplete="on"
                                    type='text'
                                    name='login'
                                    title='Enter Your email'
                                    placeholder='email...'
                                />
                                <MyInput
                                    autoComplete="off"
                                    type='password'
                                    name='password'
                                    title='Enter Your password'
                                    placeholder='password...'
                                />
                                <div className='createTitle__buttons'>
                                    <button type='submit'>Sign In</button>
                                    <button type='reset'>Reset</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage