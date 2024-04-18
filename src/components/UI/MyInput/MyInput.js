import { useField, ErrorMessage } from 'formik'
import './MyInput.css'

const MyInput = ({name, title, placeholder, type = 'text', autoComplete= "off"}) => {
    const [field] = useField({name, type})
    return (
        <div className='inputWraper'>
            <label htmlFor={name} >{title}</label>
            <input 
                autoComplete={autoComplete}
                type={type}
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