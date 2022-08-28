import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getHouse } from '../../store/houseSlice/houseSlice'

export default function useFeed() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHouse())
    }, [])

    return (
        <div>useFeed</div>
    )
}

