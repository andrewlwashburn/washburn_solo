import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8004/api/login', {email, password}, {withCredentials:true})
            .then((res) => {
                console.log(res)
                navigate('/home')
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <label>
                Email:
                <input 
                type="email" 
                name="email"
                onChange={ e => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input 
                type="password" 
                name="password"
                onChange={ e => setPassword(e.target.value)}
                />
            </label>
            <button>Login</button>
            <p>Don't Have an Account? <Link to={'/register'}>Sing up Here!</Link></p>
        </form>
    )
}

export default Login