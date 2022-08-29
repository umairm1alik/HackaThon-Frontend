import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavProperty } from '../../store/houseSlice/houseSlice'
import Breadcrumb from '../../commonComponents/breadcrumb/Breadcrumb'
import Card from '../../commonComponents/cards/Card'


function FavProperty() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFavProperty())
    }, [])
    const data = useSelector(store => store.HouseReducer.favHouseData)
    return (
        <div>
            <Breadcrumb title="Favourite" />
            <h1 className='text-center mt-5 fw-bold'>Your Favourite Properties</h1>
            <Card data={data} />
        </div>
    )
}

export default FavProperty