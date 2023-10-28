import '../styles/components/navbar.sass'
import {FiUser} from 'react-icons/fi'
import {IoExitOutline} from 'react-icons/io5'
import Logo from '../img/logo.png'
import MediaQuery from 'react-responsive'
import {Link, useNavigate} from 'react-router-dom'
import {useContext, useState} from 'react'
import { Context } from '../context/AuthContext'

const Navbar = () => {

    const { setIsAuth } = useContext(Context)

    const [page, setPage] = useState('Home') 
    const navigate = useNavigate()

    const handleLogout = () => {
        
        setIsAuth(false)
        localStorage.removeItem('token')
        navigate('/')
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/home">
                    <span onClick={() => { setPage('Home')}} className="navbar-brand a-logo" href="#"><img className='img-logo' src={Logo} alt="Home" /><div className="logoName">ALR</div></span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="justify-content-between navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/calculadora">
                            <span onClick={() => { setPage('calc')}} className={page == 'calc' ? 'nav-link active' : 'nav-link '} aria-current="page" href="#">Calculadora</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboards">
                            <span onClick={() => { setPage('dash')}} className={page == 'dash'? 'nav-link active' : 'nav-link '} href="#">Dashboards</span>
                        </Link>
                    </li>
                    <MediaQuery maxWidth={991}>
                        <li className="nav-item">
                            <Link to="/my-profile">
                                <span onClick={() => { setPage('profile')}} className={page == 'profile'? 'nav-link active' : 'nav-link '} href="">Meu Perfil</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reports">
                                <span href="" onClick={() => { setPage('report')}} className={page == 'report'? 'nav-link active' : 'nav-link '}>Relátorios</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <span onClick={handleLogout} className="exit nav-link cursor-pointer">Sair <span className='iconExit'><IoExitOutline/></span> </span>
                        </li>
                        
                    </MediaQuery>
                </ul>
                <MediaQuery minWidth={992}>
                    <div className="d-flex">
                        <li className="nav-item dropdown">
                                <span className="iconUser nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FiUser/>
                                </span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to="/my-profile">
                                        <span onClick={() => { setPage('profile')}} className={page == 'profile' ? 'dropdown-item active' : 'dropdown-item'} href="#">Meu Perfil</span>
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <Link to="/reports">
                                        <span onClick={() => { setPage('report')}} className={page == 'report' ? 'dropdown-item active' : 'dropdown-item'} href="#">Relátorios</span>
                                    </Link>
                                </li>
                                    
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <span onClick={handleLogout} className="exit dropdown-item cursor-pointer" >Sair <span className='iconExit'><IoExitOutline/></span></span>
                                </li>
                            </ul>
                        </li>
                    </div>
                </MediaQuery>
                </div>
            </div>
        </nav>
    )
}

export default Navbar