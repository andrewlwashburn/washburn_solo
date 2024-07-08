import React, {useState} from "react"
import axios from "axios"

const Register = (props) => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    
        
        // firstName: '',
        // lastName: '',
        // email: '',
        // address: '',
        // city: '',
        // state: '',
        // password: '',
        // confirmPassword: ''




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

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8004/api/register'), {firstName, lastName, email, address, city, state, password}
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const updateUser = e => {
        const { name, value } = e.target
        validateRegistration( name, value )
    }

    const validateRegistration = () => {
        const validations = {
            firstName: value => value.length >= 3 ? true : "First name must be at least 3 characters.", 
            lastName: value => value.length >= 3 ? true : "Last name must be at least 3 characters.",
            email: value => value.match (/[^\s@]+@[^\s@]+\.[^\s@]+/gi) ? false : "Please enter a valid email address.",
            address: value => value.length >= 5 ? true : "Address must be at least 5 characters.",
            city: value => value.length >= 2 ? true : "City must be at least 2 characters.",
            state: value => value.match(/^[A-Z]{2}$/) ? true : "State must be a valid 2-letter abbreviation.",
            password: value => value.length >= 8 ? true : "Passwords must be at least 8 characters.",
            confirmPassword: (value) => {
                if (name == 'confirm password') { return user.password === value ? true : "Your passwords do not match" }
                if (name == 'password') { return user.confirmPassword === value ? true : "Your passwords do not match" }
            },
        }
        // if (name == "password") { setErrors(prev => ({ ...prev, confirmPassword: validations["confirmPassword"](value) }))} 
        //     setErrors(prev => ({ ...prev, [name]: validations[name](value) }))
    }

    return(
        <form onSubmit={submitHandler}>
            <label>
                First Name:
                <input 
                    onChange={ e => setFirstName(e.target.value)} 
                    onInput={updateUser}
                    type="text" 
                    name="firstName"
                    value={ firstName }
                    
                />
                <p>{ errors.firstName }</p>
            </label>
            <label>
                Last Name:
                <input 
                    onInput={ updateUser }
                    type="text" 
                    name="lastName" 
                    value={ lastName }
                />
                <p>{ errors.lastName }</p>
            </label>
            <label>
                Email:
                <input 
                    onInput={ updateUser }
                    type="email" 
                    name="email" 
                    value={ email }
                />
                <p>{ errors.email }</p>
            </label>
            <label>
                Address:
                <input 
                    onInput={ updateUser }
                    type="text" 
                    name="address" 
                    value={ address }
                />
                <p>{ errors.address }</p>
            </label>
            <label>
                City:
                <input
                    onInput={ updateUser } 
                    type='text'
                    name='city'
                    value={ city }
                />
                <p>{ errors.city }</p>
            </label>
            <label>
                State:
                <input
                    onInput={ updateUser } 
                    type='text'
                    name='state'
                    value={ state }
                />
                <p>{ errors.state }</p>
            </label>
            <label>
                Password:
                <input 
                    onInput={ updateUser }
                    type="password" 
                    name="password" 
                    value={ password }
                />
                <p>{errors.password}</p>
            </label>
            <label>
                Confirm Password:
                <input 
                    onInput={ updateUser }
                    type="password" 
                    name="confirmPassword"
                    value={ confirmPassword }
                    />
                <p>{ errors.confirmPassword }</p>
            </label>
            <input type="submit" value="submit" />
        </form>
    )
}

export default Register

// confirmPassword: (value) =>
//     value === user.password ? "" : "Passwords do not match.",
//     };

// setErrors((prev) => ({
//     ...prev,
//     [name]: validations[name](value),
// }));

// if (name === "password") {
//     setErrors((prev) => ({
//         ...prev,
//         confirmPassword: validations["confirmPassword"](user.confirmPassword),
//     }));
// }


