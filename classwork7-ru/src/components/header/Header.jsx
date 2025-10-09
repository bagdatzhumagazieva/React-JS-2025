import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

export const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location)

    const goMenu = () => {
        navigate('/menu')
    }

    return (
        <>
         <nav>
            <ul>
                <li style={{background: location.pathname === '/about' ? 'red' : 'transparent'}}>
                    <Link to="/about">About</Link>
                </li>

                <li style={{background: location.pathname === '/menu' ? 'red' : 'transparent'}}>
                    <button onClick={goMenu}>Menu</button>
                </li>
                <li style={{background: location.pathname === '/home' ? 'red' : 'transparent'}}>
                    <Link to="/home">HOME</Link>
                </li>
            </ul>
        </nav>
        <hr/>

        <Outlet/>
        </>
       
    )
}