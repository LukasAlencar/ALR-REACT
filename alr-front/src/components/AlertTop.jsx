import React, { useState } from 'react'
import '../styles/components/alert.sass'
import {CiWarning} from 'react-icons/ci'
import {AiOutlineClose} from 'react-icons/ai'
const AlertTop = ({text, active}) => {
    const [isVisible, setIsVisible] = useState(active)
    if(active){
        return (<div className='alert'><CiWarning style={{fontSize: 30, marginRight: 20}}/>{text}<span onClick={()=>setIsVisible(false)} className='close'><AiOutlineClose/></span></div>)
    } 
}

export default AlertTop