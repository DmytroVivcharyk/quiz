import { useField, ErrorMessage } from 'formik'
import './MyInput.css'

const MyInput = ({name, title, placeholder}) => {
    const [field] = useField(name)
    return (
        <div className='inputWraper'>
            <label htmlFor={name} >{title}</label>
            <input 
                type="text" 
                id={name}
                name={name}
                placeholder={placeholder}
                {...field}
                />
            <ErrorMessage 
                name={name} 
                component='div'
                className='errorMesage' />
        </div>
    )
}

export default MyInput