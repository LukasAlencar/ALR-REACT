import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  createAxiosInstance  from '../settings/AxiosSettings'
export const Context = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [loading, setIsLoading] = useState(true)
    const [token, setToken] = useState('')
    const [userLogged, setUserLogged] = useState('')
    const [actualUser, setActualUser] = useState(
        {name:'', email:'', img_user:'',}
    )
    
    const navigate = useNavigate()

    const handleActualUser = async (token) =>{
        getApi(token)
        
    }

    const getApi = async (auxToken) =>{
        let formData = new FormData()
        formData.append('token', auxToken)

        await axios.post('https://api.alrtcc.com/verify-token/', formData).then(res => {
            setIsAuth(true)
            localStorage.setItem('userName', res.data.data.user.name)
            localStorage.setItem('email', res.data.data.user.email)
            localStorage.setItem('userImg', res.data.data.user.img_user)

            console.log(res.data.data.user)
            navigate('/home')
        })
        .catch(()=>{})
    }

    useEffect(() => {
        const auxToken = localStorage.getItem('token');
        setToken(auxToken)

        getApi(auxToken)
        console.log('foi')
        
        setIsLoading(false)
    }, [])

    // const handleLogin = async () => {
    //     setIsLoading(true)
    //     const formData = new FormData()
    //     formData.append('email', data.email)
    //     formData.append('password', data.password)
    //     await axios.post('https://api.alrtcc.com/login/', formData)
    //     .then((res) => {
    //         setIsAuth({auth: true, token: res.data.token})
    //         localStorage.setItem('token', res.data.token)
    //         navigate('/home')
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(()=>{setIsLoading(false)});

    // }

    if (loading) {
        return <div>Carregando</div>
    }

    return (
        <Context.Provider value={{ isAuth, setIsAuth, token, userLogged, setUserLogged, actualUser, handleActualUser}}>
            {children}
        </Context.Provider>
    )
}

