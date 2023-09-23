import React from 'react'
import { useEffect } from 'react'
import '../styles/components/alert.sass'
import {CiWarning} from 'react-icons/ci'

const Alert = ({text}) => {
    
  return (
    <div className='alert'><CiWarning/> {text}</div>
  )
}

export default Alert