import React, { useState } from 'react'
import buyImg from "../../images/635.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { addFavProperty } from '../../store/houseSlice/houseSlice'

function Card(data) {
  const [heartFlag, setHeartFlag] = useState(false)
  const [heartId, setHeartId] = useState(false)
  const [favFlag, setFavFlag] = useState(false)
  const dispatch = useDispatch()
  const handleHeartFlag = (id) => {
    setHeartFlag(!heartFlag)
    setHeartId(id)
  }
  const handleFav = (item) => {
    const favProperty = {
      headline: item.headline,
      description: item.description,
      location: item.location
    }
    dispatch(addFavProperty(favProperty))
  }
  return (
    <div className='container'>
      <div className='row'>
        {data?.data?.houses?.map((item) => {
          console.log(item._id);
          return (
            <div className='col-lg-4 mx-auto py-5'>
              <div className="card">
                <div className="card-img-top"><img src={buyImg} className="img-fluid" /></div>
                <div className="card-body">
                  <h5 className="card-title">{item.headline}</h5>
                  <p className="card-text">{item.description}</p>

                  <p className="card-text">{item.location}</p>
                  <div style={{ display: "flex" }}>
                    <p className="card-text" onClick={() => handleHeartFlag(item._id)}><i class="bi bi-heart-fill" style={{ color: item._id == heartId ? heartFlag == true ? "red" : "" : "" }}></i></p>
                    <p className='card-text mx-2' onClick={() => handleFav(item)}><i style={{ color: item._id == heartId ? heartFlag == true ? "yellow" : "" : "" }} class="bi bi-star"></i></p>

                  </div>
                </div>
              </div>



            </div>
          );
        })}
      </div>
    </div >
  )
}

export default Card
