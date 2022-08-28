import React from 'react'
import { useDispatch } from 'react-redux'
import "./header.css"
import logo from "../../images/real-estate-logo.jpg"
import CommonButton from '../commonButton/CommonButton'
import { logout } from '../../store/authSlice/authSlice'

function Header() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"><img src={logo} className="img-fluid header-logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <CommonButton title="Logout" onCllick={logoutHandler} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
