import Drawer from '../drawer/Drawer'
import './Wraper.css'

const Wraper = ({children}) => {

    return (
        <div className='wraper'>
            <Drawer />
            <main>
                { children }
            </main>
        </div>
    )
}

export default Wraper