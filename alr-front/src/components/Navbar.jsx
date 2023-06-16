import '../styles/components/navbar.sass'
import {FiUser} from 'react-icons/fi'
import {IoExitOutline} from 'react-icons/io5'
import Logo from '../img/logo.png'

const Navbar = ({page}) => {
    let isCalcPage = false
    let isDashPage = false
    if(page == 'calc'){
        isCalcPage = true
    }else if(page == 'dash'){
        isDashPage = true
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand a-logo" href="#"><img className='img-logo' src={Logo} alt="Home" /><div className="logoName">ALR</div></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="justify-content-between navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={isCalcPage ? 'nav-link active' : 'nav-link '} aria-current="page" href="#">Calculadora</a>
                    </li>
                    <li className="nav-item">
                        <a className={isDashPage ? 'nav-link active' : 'nav-link '} href="#">Dashboards</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <li className="nav-item dropdown">
                        <a className="iconUser nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiUser/>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Meu Perfil</a></li>
                            <li><a className="dropdown-item" href="#">Relátorios</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="exit dropdown-item" href="#">Sair <span className='iconExit'><IoExitOutline/></span></a></li>
                        </ul>
                    </li>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar