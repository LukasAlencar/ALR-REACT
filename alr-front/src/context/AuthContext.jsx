import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Context = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [loading, setIsLoading] = useState(true)
    const [token, setToken] = useState('')

    const navigate = useNavigate()

    const getApi = async (auxToken) =>{
        let formData = new FormData()
        formData.append('token', auxToken)

        await axios.post('https://api.alrtcc.com/verify-token/', formData).then(res => {
            setIsAuth(true)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        const auxToken = localStorage.getItem('token');
        setToken(auxToken)

        getApi(auxToken)
        
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
        <Context.Provider value={{ isAuth, setIsAuth, token, }}>
            {children}
        </Context.Provider>
    )
}

