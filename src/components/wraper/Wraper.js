import './Wraper.css'

const Wraper = ({children}) => {

    return (
        <div className='wraper'>
            <main>
                { children }
            </main>
        </div>
    )
}

export default Wraper