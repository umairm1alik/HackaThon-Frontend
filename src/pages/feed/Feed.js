import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHouse } from '../../store/houseSlice/houseSlice'
import Breadcrumb from '../../commonComponents/breadcrumb/Breadcrumb'
import Card from '../../commonComponents/cards/Card'


function Feed() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHouse())
  }, [])
  const data = useSelector(store => store.HouseReducer.houseData)
  return (
    <div>
      <Breadcrumb title="Feed" />
      <h1 className='text-center mt-5 fw-bold'>New & Top Rated Property </h1>
      <Card data={data} />
    </div>
  )
}

export default Feed
