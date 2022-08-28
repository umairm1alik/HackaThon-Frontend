import React from 'react'
import buyImg from "../../images/istockphoto.jpg"
const cardData = [
  {
    imgSrc: buyImg,
    heading: "lorem ipsem text",
    text: "Some quick example text to build"
  },
  {
    imgSrc: buyImg,
    heading: "lorem ipsem text",
    text: "Some quick example text to build"
  },
  {
    imgSrc: buyImg,
    heading: "lorem ipsem text",
    text: "Some quick example text to build"
  },
  {
    imgSrc: buyImg,
    heading: "lorem ipsem text",
    text: "Some quick example text to build"
  },
  {
    imgSrc: buyImg,
    heading: "lorem ipsem text",
    text: "Some quick example text to build"
  },
  {
    imgSrc: buyImg,
    heading: "lorem ipsem text",
    text: "Some quick example text to build"
  },
]
function Card(data) {
  console.log("Data in card", data);
  return (
    <div className='container'>
      <div className='row'>
        {data?.data?.houses?.map((item) => {
          return (
            <div className='col-lg-4 mx-auto py-5'>
              <div className="card">
                <div className="card-img-top"><img src={buyImg} className="img-fluid" /></div>
                <div className="card-body">
                  <h5 className="card-title">{item.headline}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">{item.location}</p>

                </div>
              </div>



            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Card
