import { useEffect, useState } from 'react'
import Logo from '../img/logo.png'
import '../styles/components/pageRegister.sass'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai'
import axios, { Axios } from 'axios'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';
import TrashIcon from './TrashIcon'
import Loader from './Loader'
import AlertTop from './AlertTop'
import { render } from 'react-dom'
import InputMask from 'react-input-mask'

const PageRegister = () => {
    const [name, setName] = useState('')
    const [enterprise, setEnterprise] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profileImage, setProfileImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [user, setUser] = useState(
        {
            name: '',
            user_img: '',
            email: '',
            password: '',
            enterpriseName: '',
        }
    )

    const handleChangeUser = (e) => {
        debugger
        let {name, value, files} = e.target;        
        
        setUser((prev) => ({...prev, [name]: name == 'user_img' ? files[0] : value}))
        console.log(user)
    }

    useEffect(()=>{
    },[])

    // VALIDATION

    const [testValidate, setTestValidate] = useState({
        name: true,
        enterprise: true,
        email: true,
        password: true,
    })

    // Licenses States

    const navigate = useNavigate();

    const [isAlert, setIsAlert] = useState(false)

    const handleRegister = async () => {
        
    }

    const handleName = (e) => {
        let val = e.target.value
        setName(val)
        if (val == '') {
            setTestValidate({ ...testValidate, name: false })
        } else {
            setTestValidate({ ...testValidate, name: true })
        }
    }

    const handleEmail = (e) => {
        let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let val = e.target.value
        setEmail(val)
        if (!patternEmail.test(val)) {
            setTestValidate({ ...testValidate, email: false })
        } else {
            setTestValidate({ ...testValidate, email: true })
        }
    }
    const handleEnterprise = (e) => {
        let val = e.target.value
        setEnterprise(val)
        if (!val) {
            setTestValidate({ ...testValidate, enterprise: false })
        } else {
            setTestValidate({ ...testValidate, enterprise: true })
        }
    }
    const handlePassword = (e) => {
        let patternUpperCase = /[A-Z]/
        let patternSpecialChars = /[^a-zA-Z0-9]+/g
        let val = e.target.value
        setPassword(val)
        if (val.length >= 8 && patternUpperCase.test(val) && patternSpecialChars.test(val)) {
            setTestValidate({ ...testValidate, password: true })
        } else {
            setTestValidate({ ...testValidate, password: false })
        }
    }

    const handleAlert = () => {
        setIsAlert(false)
    }

    const handleProfileImage = (e) => {
        setProfileImage(e)
    }

    return (

        <motion.div className="container-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {isAlert && <AlertTop handleAlert={handleAlert} active={true} text={'Preencha os campos obrigatórios'} />}
            <div className='containerRegister row'>
                <div className='logo'>
                    <img className='imgLogo' src={Logo} alt="ALR" />
                    <h1>ALR Inventory</h1>
                </div>
                <AnimatePresence>
                    <motion.div
                        key='step1'
                        transition={{ delay: .2 }}
                        initial={{ opacity: 0, display: 'none' }}
                        animate={{ opacity: 1, display: 'block' }}
                        exit={{ opacity: 0, display: 'none' }}
                        className="fields-container">

                        <div className="fields row">
                            <div className="col-6">
                                <label htmlFor="formFile" className="form-label">Profile Image</label>
                                <input onChange={handleChangeUser} name="user_img" accept='image/*' className="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div className="fields row">
                            <div className="col-6">
                                {!testValidate.name && <span className='warning-span'>Campo obrigatório</span>}
                                <input value={user.name} onChange={handleChangeUser} name="name" type="text" className={`form-control ${!testValidate.name && 'wrong'}`} placeholder='Name' id="name" aria-describedby="Name" />
                            </div>
                        </div>
                        <div className="fields row">
                            <div className="col-6">
                                {!testValidate.enterprise && <span className='warning-span'>Campo obrigatório</span>}
                                <input value={user.enterprise} onChange={handleChangeUser} name="enterpriseName" type="text" className={`form-control ${!testValidate.enterprise && 'wrong'}`} placeholder='Enterprise' id="enterprise" aria-describedby="Enterprise" />
                            </div>
                        </div>
                        <div className="fields row">
                            <div className="col-6">
                                {!testValidate.enterprise && <span className='warning-span'>Campo obrigatório</span>}
                                <InputMask mask={'99.999.999/9999-99'} value={user.cnpj} onChange={handleChangeUser} name="cnpj" type="text" className={`form-control ${!testValidate.enterprise && 'wrong'}`} placeholder='CNPJ' id="cnpj" aria-describedby="CNPJ" />
                            </div>
                        </div>
                        <div className="fields row">
                            <div className="col-6">
                                {!testValidate.email && <span className='warning-span'>Email incorreto</span>}
                                <input value={user.email} onChange={handleChangeUser} name="email" type="email" className={`form-control ${!testValidate.email && 'wrong'}`} placeholder='Email' id="email" aria-describedby="email" />
                            </div>
                        </div>
                        <div className="fields row">
                            <div className="col-6">
                                {!testValidate.password && <span className='warning-span'>Senha deve conter no minimo: 8 caracteres / 1 carácter especial / 1 letra maiúscula</span>}
                                <input value={user.password} onChange={handleChangeUser} name='password' type="password" className={`form-control ${!testValidate.password && 'wrong'}`} placeholder='Password' id="password" aria-describedby="Password" />
                            </div>
                        </div>
                        <div className="register-btn-field">
                            <div onClick={() => handleNext()} className='register-btn'> Register <AiOutlineArrowRight /> </div>
                        </div>
                        <div className='have-account'>
                            Already have a account? <span onClick={() => { navigate('/') }}>Login</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="containerImage">

            </div>
        </motion.div>
    )
}

export default PageRegister