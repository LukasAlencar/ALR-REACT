import { useState } from 'react'
import Logo from '../img/logo.png'
import '../styles/components/pageRegister.sass'
import SignInGoogleButton from './SignInGoogleButton'
import axios from 'axios'
const PageRegister = () => {
    const [enterprise, setEnterprise] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpus, setCpus] = useState(0)
    const [checkRemember, setCheckRemember] = useState(false)

    const handleChange = () =>{
        setCheckRemember(!checkRemember)
    }

    const register = () =>{
        var post = {
            enterprise: enterprise,
            email: email,
            password: password,
            cpus: cpus,
            checkRemember: checkRemember
        }
        axios.post('https://dummyjson.com/products/add', JSON.stringify(post)).then(res => console.log(res)).catch(err => console.log(err)) 
    }

    return (
        <>
            <div className="container-main">
                <div className='containerRegister row'>
                    <div className='logo'>
                        <img className='imgLogo' src={Logo} alt="ALR" />
                        <h1>ALR Inventory</h1>
                    </div>
                    {/* <div className="welcomeField">
                        <div className='welcome'>
                            WELCOME
                        </div>
                        <div className='to-alr'>
                            to ALR
                        </div>
                    </div> */}

                    <div className="fields-container">
                        <div className="fields row">
                            <div className="col-6">
                                <input onChange={e => setEnterprise(e.target.value)} type="text" className="form-control" placeholder='Enterprise' id="enterprise" aria-describedby="Enterprise"/>
                            </div>
                        </div>
                        <div className="fields row">
                            <div className="col-6">
                                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder='Email' id="email" aria-describedby="email"/>
                            </div>
                        </div>
                        <div className="fields row">
                            <div className="col-6">
                                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder='Password' id="password" aria-describedby="Password"/>
                            </div>
                        </div>
                        <div className="fields row">
                            <div className="col-6">
                                <input onChange={e => setCpus(e.target.value)} type="number" className="form-control cpus" placeholder='CPUs' id="cpus" aria-describedby="CPUs"/>
                            </div>
                        </div>
                            <div className="remember-me">
                            <div className="form-check">
                                <input onChange={handleChange} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="register-btn-field">
                            <div onClick={()=> register()} className='register-btn'> Register </div>
                        </div>
                        <div className='have-account'>
                            Already have a account? <span>Login</span>
                        </div>
                    </div>
                    
                </div>
                <div className="containerImage">
                    
                </div>
            </div>
        </>
    )
}

export default PageRegister