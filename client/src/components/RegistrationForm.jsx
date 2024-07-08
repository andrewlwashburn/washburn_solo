import { useState } from 'react'

export const RegistrationForm = () => {

    const [ user, setUser ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        password: '',
        confirmPassword: ''
    })

    const [ errors, setErrors ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        password: '',
        confirmPassword: ''
    })

    const updateUser = e => {
        const { name, value } = e.target
        setUser( prev => ({ ...prev, [name]: value }))
        validateRegistration( name, value )
    }

    const validateRegistration = ( name, value ) => {
        const validations = {
            firstName: value => value.length >= 3 ? true : "First name must be at least 3 characters.", 
            lastName: value => value.length >= 3 ? true : "Last name must be at least 3 characters.",
            email: value => value.match (/[^\s@]+@[^\s@]+\.[^\s@]+/gi) ? false : "Please enter a valid email address.",
            address: value => value.length >= 5 ? true : "Address must be at least 5 characters.",
            city: value => value.length >= 2 ? true : "City must be at least 2 characters.",
            state: value => value.match(/^[A-Z]{2}$/) ? true : "State must be a valid 2-letter abbreviation.",
            password: value => value.length >= 8 ? true : "Passwords must be at least 8 characters.",
            confirmPassword: (value) => { 
                if ( name == 'confirm password' ){ return user.password === value ? true : "Your passwords do not match" }
                if ( name == 'password' ){ return user.confirmPassword === value ? true : "Your passwords do not match" }
        }
    }
    if( name == "password" ){
        setErrors( prev => ({ ...prev, confirmPassword: validations["confirmPassword"](value) }) )
    }
    setErrors( prev => ({ ...prev, [name]: validations[name](value)}) )
}

    return(
        <form>
            <label>
                First Name:
                <input 
                    onInput={ updateUser } 
                    type="text" 
                    name="firstName"
                    value={ user.firstName }
                    
                />
                <p>{ errors.firstName }</p>
            </label>
            <label>
                Last Name:
                <input 
                    onInput={ updateUser }
                    type="text" 
                    name="lastName" 
                    value={ user.lastName }
                />
                <p>{ errors.lastName }</p>
            </label>
            <label>
                Email:
                <input 
                    onInput={ updateUser }
                    type="email" 
                    name="email" 
                    value={ user.email }
                />
                <p>{ errors.email }</p>
            </label>
            <label>
                Address:
                <input 
                    onInput={ updateUser }
                    type="text" 
                    name="address" 
                    value={ user.address }
                />
                <p>{ errors.address }</p>
            </label>
            <label>
                City:
                <input
                    onInput={ updateUser } 
                    type='text'
                    name='city'
                    value={ user.city }
                />
                <p>{ errors.city }</p>
            </label>
            <label>
                State:
                <input
                    onInput={ updateUser } 
                    type='text'
                    name='state'
                    value={ user.state }
                />
                <p>{ errors.state }</p>
            </label>
            <label>
                Password:
                <input 
                    onInput={ updateUser }
                    type="password" 
                    name="password" 
                    value={ user.password }
                />
                <p>{errors.password}</p>
            </label>
            <label>
                Confirm Password:
                <input 
                    onInput={ updateUser }
                    type="password" 
                    name="confirmPassword"
                    value={ user.confirmPassword }
                    />
                <p>{ errors.confirmPassword }</p>
            </label>
        </form>
    )
}