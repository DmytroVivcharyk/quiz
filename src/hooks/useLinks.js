import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate, NavLink } from "react-router-dom";



export const useLinks = (setDrawerState) => {
    const signOut = useSignOut()
    const navigate = useNavigate()
    const isUserLogedIn = useIsAuthenticated()

    const logOut = () => {
        signOut()
        setDrawerState(false)
        navigate('/auth')
    }

    const privateLinks = [
        {Element: NavLink, to: '/', onClick: () => {setDrawerState(false)}, title: 'Quizes' },
        {Element: NavLink, to: 'create-quiz', onClick: () => {setDrawerState(false)}, title: 'Create Quiz' },
        {Element: 'button', to: null, onClick: logOut, title: 'LogOut' },
    ]

    const publickLinks = [
        {Element: NavLink, to: '/', onClick: () => {setDrawerState(false)}, title: 'Quizes' },
        {Element: NavLink, to: '/auth', onClick: () => {setDrawerState(false)}, title: 'Sign In' },
    ]

    const links = isUserLogedIn
                    ? privateLinks.map(({Element,title, ...rest }) => (
                        <li key={title} ><Element {...rest}><div>{title}</div></Element></li>
                    ))
                    : publickLinks.map(({Element,title, ...rest }) => (
                        <li key={title} ><Element {...rest}><div>{title}</div></Element></li>
                    ))

    return {links}
}