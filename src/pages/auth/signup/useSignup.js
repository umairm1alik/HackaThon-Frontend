import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../../store/authSlice/authSlice'

export default function useSignup() {
    // const [userName, setUserName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    const [state, setState] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const dispatch = useDispatch()


    const signupHandler = () => {
        const newUser = {
            userName: state.userName,
            email: state.email,
            password: state.password,
            confirmPassword: state.confirmPassword
        }
        dispatch(register(newUser))
        setState({
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    return (
        // { userName, setUserName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, signupHandler }
        { state, setState, signupHandler, handleChange }
    )
}
