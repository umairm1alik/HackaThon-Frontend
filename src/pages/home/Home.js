import React from 'react'
import "./home.css";
import Header from '../../commonComponents/header/Header';
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <Header />
            <section className='hero-section position-relative'>
                {/* <img src={heroImage} className="img-fluid"/> */}
                <div className='text-center hero-buttons'>
                    <button type="button" class="btn btn-outline-light me-3 fw-bold px-4 "><Link className='text-decoration-none' to={'/feed'}>Feed</Link></button>
                    <button type="button" class="btn btn-outline-light fw-bold px-4"><Link className='text-decoration-none' to={'/post'}>POST</Link></button>
                </div>
            </section>
        </div>
    )
}

export default Home
