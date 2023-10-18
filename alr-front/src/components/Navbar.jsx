import '../styles/components/navbar.sass'
import {FiUser} from 'react-icons/fi'
import {IoExitOutline} from 'react-icons/io5'
import Logo from '../img/logo.png'
import MediaQuery from 'react-responsive'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
    const [page, setPage] = useState('Home')
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/home">
                    <a onClick={() => { setPage('Home')}} className="navbar-brand a-logo" href="#"><img className='img-logo' src={Logo} alt="Home" /><div className="logoName">ALR</div></a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="justify-content-between navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/calculadora">
                            <a onClick={() => { setPage('calc')}} className={page == 'calc' ? 'nav-link active' : 'nav-link '} aria-current="page" href="#">Calculadora</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboards">
                            <a onClick={() => { setPage('dash')}} className={page == 'dash'? 'nav-link active' : 'nav-link '} href="#">Dashboards</a>
                        </Link>
                    </li>
                    <MediaQuery maxWidth={991}>
                        <li className="nav-item">
                            <Link to="/my-profile">
                                <a onClick={() => { setPage('profile')}} className={page == 'profile'? 'nav-link active' : 'nav-link '} href="">Meu Perfil</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reports">
                                <a href="" onClick={() => { setPage('report')}} className={page == 'report'? 'nav-link active' : 'nav-link '}>Relátorios</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/">
                                <a href="" className="exit nav-link">Sair <span className='iconExit'><IoExitOutline/></span> </a>
                            </Link>
                        </li>
                    </MediaQuery>
                </ul>
                <MediaQuery minWidth={992}>
                    <div className="d-flex">
                        <li className="nav-item dropdown">
                                <a className="iconUser nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FiUser/>
                                </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to="/my-profile">
                                        <a onClick={() => { setPage('profile')}} className={page == 'profile' ? 'dropdown-item active' : 'dropdown-item'} href="#">Meu Perfil</a>
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <Link to="/reports">
                                        <a onClick={() => { setPage('report')}} className={page == 'report' ? 'dropdown-item active' : 'dropdown-item'} href="#">Relátorios</a>
                                    </Link>
                                </li>
                                    
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <Link to="/">
                                        <a className="exit dropdown-item" href="#">Sair <span className='iconExit'><IoExitOutline/></span></a>
                                    </Link>
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