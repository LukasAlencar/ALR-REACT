import React, { useEffect } from 'react'

// Components

import Navbar from '../Navbar'
import TrashIcon from '../TrashIcon'


// Libraries

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';


// Icons

import {  AiOutlinePlus } from 'react-icons/ai'

// Styles

import '../../styles/components/page-create-contract.sass'
import axios from 'axios';
import GridComponent from '../Grid'



const CreateContracts = () => {

    const [licensesList, setLicenseList] = useState([])
    const [licenseName, setlicenseName] = useState('default')
    const [activeDate, setActiveDate] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [contract, setContract] = useState(undefined)
    const [licenseSelectList, setLicenseSelectList] = useState([])
    const [isAlert, setIsAlert] = useState(false)


    useEffect( () => {
        axios.get('http://localhost:3002/licenses').then((res)=>{
            setLicenseSelectList(res.data.licenses)
        }).catch( err => console.log(err));
    },[])


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
    
    return (
        <>
            <Navbar/>
            <div style={{marginTop: -100}} className='mt-4 d-flex flex-1'>
                <div className='section-create-contract flex-column'>
                    <div className='width-100 text-align-start'>
                        <h1 className='title-general font-primary '>Create Contracts</h1>
                    </div>
                    {/* <motion.div 
                                    key='step2'
                                    transition={{delay: .2}}
                                    initial={{opacity: 0, display: 'none'}}
                                    animate={{opacity: 1, display: 'flex'}}
                                    exit={{opacity: 0, display: 'none'}} className="fields-container-step2"> */}
                                        {/* <div className='title'>Register your licenses</div> */}
                                        {/* <div className='section'> */}
                                            <div className="justify-self-center">
                                            <div className="justify-content-start ml-4 align-self-center fields row">
                                                <div className="col-8">
                                                    <label className='label-input' htmlFor="licenseName">Product*</label>
                                                    {/* <input value={licenseName} onChange={e => setlicenseName(e.target.value)} type="text" className={"form-control required"} placeholder='Ex. Photoshop CS6' id="licenseName" aria-describedby="licenseName"/> */}
                                                    <select value={licenseName} onChange={e => setlicenseName(e.target.value)} className='form-select required' name="licenes" id="licenses" defaultValue={'default'}>
                                                        <option disabled value="default">Select a Product</option>
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
                                            <div className="justify-content-start ml-4 fields row">
                                                <div className="col-8">
                                                    <label className='label-input' htmlFor="expirationDate">Activate Date*</label>
                                                    <input  onChange={e => setActiveDate(e.target.value)} type="date" className="form-control required" placeholder='YYYY/MM/DD' id="activateDate" aria-describedby="Activate Date"/>
                                                </div>
                                                
                                            </div>
                                            <div className="justify-content-start ml-4 fields row">
                                                <div className="col-8">
                                                    <label className='label-input' htmlFor="expirationDate">Expiration Date</label>
                                                    <input onChange={e => setExpirationDate(e.target.value)} type="date" className="form-control" placeholder='YYYY/MM/DD' id="expirationDate" aria-describedby="Expiration Date"/>
                                                </div>
                                            </div>
                                            <div className="justify-content-start ml-4 fields row">
                                                <div className="col-6">
                                                    <label className='label-input' htmlFor="contract">Contract*</label>
                                                    <input accept='.pdf' multiple name='contracts' onChange={e => handleContract(e)} type="file" className="form-control required" placeholder='YYYY/MM/DD' id="contract" aria-describedby="Contract"/>
                                                </div>
                                                <div className="col-2">
                                                    <div className="register-finish-btn-field">
                                                        <div onClick={()=> handleAddLicense()} style={{width: '100%', marginTop: 22}} className='register-btn btn-integer'><AiOutlinePlus/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            
                                            
                                        {/* </div> */}
                                        {/* <div style={{flex: 1, marginTop: 20}}>
                                            <div className="register-finish-btn-field">
                                                <div onClick={()=> handlePrevious()} className='register-btn btn-half'> <AiOutlineArrowLeft style={{marginLeft: -10}}/> Previous </div>
                                                <div onClick={()=> handleRegister()} className='register-btn btn-half'> {isLoading ? <Loader/> : 'Register'} </div> */}
                                                {/* <div className="next-step-btn"><CgPlayTrackNextR/></div> */}
                                            {/* </div>
                                        </div> */}

                                        
                                    {/* </motion.div> */}

                </div>
                <div className='section-list-contracts'>
                    <GridComponent handleRemoveLicense={(e) => handleRemoveLicense(e)} list={licensesList}  />
                    {/* {licensesList != '' && 
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
                                            <TrashIcon  uuid={el.uuid} handleClick={(e)=>handleRemoveLicense(e)} />
                                        </motion.div>
                                    </AnimatePresence>                                            
                                )
                            })}
                        </div>
                        } */}
                </div>
            </div>
        </>
    )
}

export default CreateContracts