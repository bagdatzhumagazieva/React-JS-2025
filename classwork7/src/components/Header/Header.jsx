import { Outlet, Link, useNavigate, useLocation } from "react-router-dom"

export const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location)
    

    return (
        <>
            <nav>
                <ul>
                    <li style={{background: location.pathname === '/home' ? 'red': 'transparent', width: '200px', text: 'black'}}>
                        <Link to="home" >
                        Home
                        </Link>
                    </li>
                    <li style={{background: location.pathname === '/about' ? 'red': 'transparent', width: '200px', text: 'black'}}>
                    <Link to="about">
                        About
                        </Link>
                    </li>
                    <li style={{background: location.pathname === '/contact' ? 'red': 'transparent', width: '200px', text: 'black'}}>
                        <button onClick={() =>navigate('contact') }>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}