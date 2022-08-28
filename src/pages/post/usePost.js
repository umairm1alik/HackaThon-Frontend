import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postHouse } from '../../store/houseSlice/houseSlice'

export default function usePost() {
    const [state, setState] = useState({
        headline: "",
        description: "",
        location: "",

    })
    const dispatch = useDispatch()


    const addHouseHandler = () => {
        const newHouse = {
            headline: state.headline,
            description: state.description,
            location: state.location,
        }
        dispatch(postHouse(newHouse))
        setState({
            headline: "",
            description: "",
            location: "",
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
        { addHouseHandler, handleChange, state }
    )
}