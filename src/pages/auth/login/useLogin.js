import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/authSlice/authSlice'

export default function useLogin() {
    const [state, setState] = useState({
        email: "",
        password: "",

    })
    const dispatch = useDispatch()


    const loginHandler = () => {
        const user = {
            email: state.email,
            password: state.password,
        }
        dispatch(login(user))
        setState({
            email: "",
            password: "",
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
        { state, setState, loginHandler, handleChange }
    )
}
