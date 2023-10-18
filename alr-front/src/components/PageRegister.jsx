import { useState } from 'react'
import Logo from '../img/logo.png'
import '../styles/components/pageRegister.sass'
import {Link, Navigate, redirect, useNavigate} from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai'
import axios, { Axios } from 'axios'
import {AnimatePresence, motion, useAnimate} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';
import TrashIcon from './TrashIcon'
import Loader from './Loader'
import AlertTop from './AlertTop'
import { render } from 'react-dom'

const PageRegister = () => {
    const [name, setName] = useState('')
    const [enterprise, setEnterprise] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profileImage, setProfileImage] = useState(null)
    const [checkRemember, setCheckRemember] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // VALIDATION

    const [testValidate, setTestValidate] = useState({
        name: true,
        enterprise: true,
        email: true,
        password: true,
    })

    // Licenses States

    const [licensesList, setLicenseList] = useState([])
    const [licenseName, setlicenseName] = useState('default')
    const [activeDate, setActiveDate] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [contract, setContract] = useState(undefined)
    const [licenseSelectList, setLicenseSelectList] = useState([])


    const [nextStep, setNextStep] = useState(false)
    const [step, setStep] = useState(0)
    const navigate = useNavigate();

    const [isAlert, setIsAlert] = useState(false)

    const handleChange = () =>{
        setCheckRemember(!checkRemember)
    }

    const handleRegister = async () =>{
        const user = {
            profileImage,
            name,
            enterprise,
            email,
            password,
            checkRemember,
            licensesList,
        }

        const contracts = []
        licensesList.map(licenses =>{
            contracts.push(licenses.contract)
        })

        let data = JSON.stringify(user)
        let blob = new Blob([data],{
            type: 'application/json'
        })
        const formData = new FormData();
        formData.append('user', data);
        contracts.map(contract => {
            formData.append('contract[]', contract);
        })


        setIsLoading(true)
        
        // await axios.post('http://localhost:3002/register', formData)        
        //     .then(response => {
        //         console.log(response)
        //         navigate('/home')
        //     }).catch(err => {
        //         console.log(err)
        //     }).finally(()=>{
        //         setIsLoading(false)
        //     })
        
        await axios({
            method: 'POST',
            url: 'http://localhost:3002/register',
            data: formData,
            headers: {
                'Content-Type':`multipart/form-data; boundary=${formData._boundary}`
            }
        }).then(response => {
            // console.log(response)
            navigate('/home')
        }).catch(err => {
            // console.log(err)
        }).finally(()=>{
            setIsLoading(false)
        })

        // var post = {
        //     enterprise: enterprise,
        //     email: email,
        //     password: password,
        //     cpus: cpus,
        //     checkRemember: checkRemember
        // }
        /*await axios.post('https://dummyjson.com/products/add', JSON.stringify(post))
        //.then(res => {
        //    console.log(res)
        //})
        .catch(err => console.log(err))*/
        // navigate("/home")
    }

    const handleName = (e) =>{
        let val = e.target.value
        setName(val)
        if(val == ''){
            setTestValidate({...testValidate, name: false})
        }else{
            setTestValidate({...testValidate, name: true})
        }
    }

    const handleEmail = (e) =>{
        let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let val = e.target.value
        setEmail(val)
        if(!patternEmail.test(val)){
            setTestValidate({...testValidate, email: false})
        }else{
            setTestValidate({...testValidate, email: true})
        }
    }
    const handleEnterprise = (e) =>{
        let val = e.target.value
        setEnterprise(val)
        if(!val){
            setTestValidate({...testValidate, enterprise: false})
        }else{
            setTestValidate({...testValidate, enterprise: true})
        }
    }
    const handlePassword = (e) =>{
        let patternUpperCase = /[A-Z]/
        let patternSpecialChars = /[^a-zA-Z0-9]+/g
        let val = e.target.value
        setPassword(val)
        if(val.length >= 8 && patternUpperCase.test(val) && patternSpecialChars.test(val)){
            setTestValidate({...testValidate, password: true})
        }else{
            setTestValidate({...testValidate, password: false})
        }
    }

    const handleNext = async () => {
        let patternUpperCase = /[A-Z]/
        let patternSpecialChars = /[^a-zA-Z0-9]+/g
        let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        await axios.get('http://localhost:3002/licenses').then((res)=>{
            setLicenseSelectList(res.data.licenses)
        }).catch( err => console.log(err));

        if(name && enterprise && patternEmail.test(email) && password.length >= 8 && patternUpperCase.test(password) && patternSpecialChars.test(password)
        ){
            setNextStep(true);
            setStep(1);  
        }
    }

    const handlePrevious = () => {
        setStep(0)
    }

    const handleAddLicense = () =>{

        if(licenseName && activeDate && contract){
            setLicenseList(prev => {
                let newArray = [...prev, {licenseName,
                                          activeDate,
                                          expirationDate,
                                          contract,
                                          uuid: uuidv4()}]
                return newArray
            })
            setlicenseName('default')
        }else{
           setIsAlert(true)
        }

        
    }

    const handleRemoveLicense = (uuid) =>{
        setLicenseList(prev => prev.filter(license => license.uuid!== uuid))
    }

    const handleContract = (e) => {
        let file = e.target.files[0]
        setContract(file)
    }

    const handleAlert = () => {
        setIsAlert(false)
    }

    const handleProfileImage = (e) => {
        setProfileImage(e)
    }

    return (
        
            <motion.div className="container-main"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                {isAlert && <AlertTop handleAlert={handleAlert} active={true} text={'Preencha os campos obrigatórios'}/>}
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
                    <AnimatePresence>
                        {step === 0 ? 
                            <motion.div
                            key='step1' 
                            transition={{delay: .2}}
                            initial={{opacity: 0, display: 'none'}}
                            animate={{opacity: 1, display: 'block'}}
                            exit={{opacity: 0, display: 'none'}} 
                            className="fields-container">

                                <div className="fields row">
                                    <div className="col-6">
                                        <label htmlFor="formFile" className="form-label">Profile Image</label>
                                        <input onChange={e => handleProfileImage(e.target.files[0])} accept='image/*' className="form-control" type="file" id="formFile"/>
                                    </div>
                                </div>
                                <div className="fields row">
                                    <div className="col-6">
                                        {!testValidate.name && <span className='warning-span'>Campo obrigatório</span>}
                                        <input value={name} onChange={e =>  handleName(e)} type="text" className={`form-control ${!testValidate.name && 'wrong'}`} placeholder='Name' id="name" aria-describedby="Name"/>
                                    </div>
                                </div>
                                <div className="fields row">
                                    <div className="col-6">
                                        {!testValidate.enterprise && <span className='warning-span'>Campo obrigatório</span>}
                                        <input value={enterprise} onChange={e => handleEnterprise(e)} type="text" className={`form-control ${!testValidate.enterprise && 'wrong'}`} placeholder='Enterprise' id="enterprise" aria-describedby="Enterprise"/>
                                    </div>
                                </div>
                                <div className="fields row">
                                    <div className="col-6">
                                        {!testValidate.email && <span className='warning-span'>Email incorreto</span>}
                                        <input value={email} onChange={e => handleEmail(e)} type="email" className={`form-control ${!testValidate.email && 'wrong'}`} placeholder='Email' id="email" aria-describedby="email"/>
                                    </div>
                                </div>
                                <div className="fields row">
                                    <div className="col-6">
                                        {!testValidate.password && <span className='warning-span'>Senha deve conter no minimo: 8 caracteres / 1 carácter especial / 1 letra maiúscula</span>}
                                        <input value={password} onChange={e => handlePassword(e)} type="password" className={`form-control ${!testValidate.password && 'wrong'}`} placeholder='Password' id="password" aria-describedby="Password"/>
                                    </div>
                                </div>
                                {/* <div className="fields row">
                                    <div className="col-6">
                                    <input onChange={e => setCpus(e.target.value)} type="number" className="form-control cpus" placeholder='CPUs' id="cpus" aria-describedby="CPUs"/>
                                    </div>
                                </div> */}
                                    <div className="remember-me">
                                    <div className="form-check">
                                        <input onChange={handleChange} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="register-btn-field">
                                    <div onClick={()=> handleNext()} className='register-btn'> Next <AiOutlineArrowRight/> </div>
                                    {/* <div className="next-step-btn"><CgPlayTrackNextR/></div> */}
                                </div>
                                <div className='have-account'>
                                    Already have a account? <span onClick={()=> {navigate('/')}}>Login</span>
                                </div>
                            </motion.div>
                            :
                            <motion.div 
                            key='step2'
                            transition={{delay: .2}}
                            initial={{opacity: 0, display: 'none'}}
                            animate={{opacity: 1, display: 'flex'}}
                            exit={{opacity: 0, display: 'none'}} className="fields-container-step2">
                                <div className='title'>Register your licenses</div>
                                <div className='section'>
                                    <div className="fields row">
                                        <div className="col-10">
                                            <label className='label-input' htmlFor="licenseName">License Name*</label>
                                            {/* <input value={licenseName} onChange={e => setlicenseName(e.target.value)} type="text" className={"form-control required"} placeholder='Ex. Photoshop CS6' id="licenseName" aria-describedby="licenseName"/> */}
                                            <select value={licenseName} onChange={e => setlicenseName(e.target.value)} className='form-select required' name="licenes" id="licenses" defaultValue={'default'}>
                                                <option disabled value="default">Select a license</option>
                                            {
                                                licenseSelectList.map(license => {
                                                    return (
                                                        <option key={license} value={license}>{license}</option>
                                                    )
                                                })  
                                            }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="fields row">
                                        <div className="col-5">
                                            <label className='label-input' htmlFor="expirationDate">Activate Date*</label>
                                            <input  onChange={e => setActiveDate(e.target.value)} type="date" className="form-control required" placeholder='YYYY/MM/DD' id="activateDate" aria-describedby="Activate Date"/>
                                        </div>
                                        <div className="col-5">
                                            <label className='label-input' htmlFor="expirationDate">Expiration Date</label>
                                            <input onChange={e => setExpirationDate(e.target.value)} type="date" className="form-control" placeholder='YYYY/MM/DD' id="expirationDate" aria-describedby="Expiration Date"/>
                                        </div>
                                    </div>
                                    <div className="fields row">
                                        <div className="col-8">
                                            <label className='label-input' htmlFor="contract">Contract*</label>
                                            <input accept='.pdf' multiple name='contracts' onChange={e => handleContract(e)} type="file" className="form-control required" placeholder='YYYY/MM/DD' id="contract" aria-describedby="Contract"/>
                                        </div>
                                        <div className="col-2">
                                            <div className="register-finish-btn-field">
                                                <div onClick={()=> handleAddLicense()} style={{width: '100%', marginTop: 22}} className='register-btn btn-integer'><AiOutlinePlus/></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {licensesList != '' && 
                                        <div className="list-licenses">
                                            {licensesList.map((el) => {
                                                return (
                                                    <AnimatePresence >
                                                        <motion.div
                                                        initial={{opacity: 0, display: 'none'}}
                                                        animate={{opacity: 1, display: 'flex'}}
                                                        exit={{opacity: 0, display: 'none'}} 
                                                        key={el.uuid} className="license-item">
                                                            <div>{el.licenseName}, {el.activeDate}</div>
                                                            <TrashIcon mt={-3} uuid={el.uuid} handleClick={(e)=>handleRemoveLicense(e)} />
                                                        </motion.div>  
                                                    </AnimatePresence>                                            
                                                )
                                            })}
                                        </div>
                                    }
                                    
                                    
                                </div>
                                <div style={{flex: 1, marginTop: 20}}>
                                    <div className="register-finish-btn-field">
                                        <div onClick={()=> handlePrevious()} className='register-btn btn-half'> <AiOutlineArrowLeft style={{marginLeft: -10}}/> Previous </div>
                                        <div onClick={()=> handleRegister()} className='register-btn btn-half'> {isLoading ? <Loader/> : 'Register'} </div>
                                        {/* <div className="next-step-btn"><CgPlayTrackNextR/></div> */}
                                    </div>
                                </div>

                                
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                <div className="containerImage">
                    
                </div>
            </motion.div>
    )
}

export default PageRegister