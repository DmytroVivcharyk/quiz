import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

import { useLinks } from '../../hooks/useLinks';

import './Drawer.css'

const Drawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const nodeRef = useRef(null)

    const {links} = useLinks(setIsDrawerOpen)

    const iconProps = isDrawerOpen ? 
                {icon: faXmark, className: 'icon '}
                : {icon: faBars, className: 'icon'} 
            

    return (
        <div className='Drawer'>
            <div className={`burger ${!isDrawerOpen ? 'close' : null}`}>
                <FontAwesomeIcon 
                onClick={() => {setIsDrawerOpen(state => !state)}}
                {...iconProps} />
            </div>
            <div className={`drawer__component ${!isDrawerOpen ? 'close' : null}`}>
                <div className='drawer__title'>
                    <h2>Quiz App</h2>
                </div>
                <nav id="sidebar">
                    <ul>
                        { links }
                    </ul>
                </nav>
            </div>
            <CSSTransition
            nodeRef={nodeRef} 
            in={isDrawerOpen} 
            timeout={500} 
            classNames="background"
            unmountOnExit
            mountOnEnter
            >
                <div 
                ref={nodeRef}
                onClick={() => {setIsDrawerOpen(false)}}
                className='Drawer__background'></div>
            </CSSTransition>
        </div>
    )
}

export default Drawer