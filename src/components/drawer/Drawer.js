import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

import { useState, useRef } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

import './Drawer.css'

const Drawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const nodeRef = useRef(null)
    const signOut = useSignOut()
    const navigate = useNavigate()
    const isUserLogedIn = useIsAuthenticated()

    const iconProps = isDrawerOpen ? 
                {icon: faXmark, className: 'icon '}
                : {icon: faBars, className: 'icon'} 
            
    const logOut = () => {
        signOut()
        setIsDrawerOpen(false)
        navigate('/auth')
    }

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
                        { isUserLogedIn 
                            ? <><li><NavLink to='/create-quiz' 
                            onClick={() => {setIsDrawerOpen(false)}}
                            ><div>Create Quiz</div></NavLink></li>
                            <li><button type='button' onClick={logOut}
                            ><div>Logout</div></button></li></>
                            
                            : <><li><NavLink to='/auth' 
                            onClick={() => {setIsDrawerOpen(false)}}
                            ><div>Sign In</div></NavLink></li>
                            <li><NavLink to='/' 
                            onClick={() => {setIsDrawerOpen(false)}}
                            ><div>Quizes</div></NavLink></li></>
                        }
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