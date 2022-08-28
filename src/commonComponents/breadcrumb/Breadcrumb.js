import React from 'react'
import './breadcrumb.css'
import {Link} from 'react-router-dom'
function Breadcrumb(props) {
  return (
    <div className='breadcrumb-section'>
      <div className='d-flex justify-content-center'>
      <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item text-light text-center"><Link className='text-decoration-none' to={'/'}>Home</Link></li>
    <li class="breadcrumb-item active text-light" aria-current="page">{props.title}</li>
  </ol>
</nav>
      </div>
    </div>
  )
}

export default Breadcrumb
