import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice/authSlice';
function Home() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <div>
            <section className='hero-section position-relative'>
                <div className='text-center hero-buttons'>
                    <button type="button" class="btn btn-outline-light me-3 fw-bold px-4 "><Link className='text-decoration-none' to={'/feed'}>Feed</Link></button>
                    <button type="button" class="btn btn-outline-light me-3 fw-bold px-4"><Link className='text-decoration-none' to={'/favProperty'}>Favourite</Link></button>
                    <button type="button" class="btn btn-outline-light me-3 fw-bold px-4"><Link className='text-decoration-none' to={'/post'}>POST</Link></button>
                    <button type="button" class="btn btn-outline-light fw-bold px-4" onClick={logoutHandler}>Logout</button>
                </div>
            </section>
        </div>
    )
}

export default Home
