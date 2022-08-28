import React from 'react'
import { Link } from 'react-router-dom'
import CommonButton from '../../../commonComponents/commonButton/CommonButton'

import { authStyle } from '../authStyle'

export default function ForgotPassword() {
    return (
        <div style={authStyle.container}>
            <h2 >Recover your account</h2>
            <form action="/home" style={authStyle.form}>
                <p>We will instruct you through Email!</p>
                <p>
                    <label style={authStyle.formLabel}>Email address</label><br/>
                    <input type="text" name="first_name" placeholder='Enter Your Email' required style={authStyle.formInput} />
                </p>
                <p>
                    <CommonButton title="Recover"/>
                </p>
            </form>
            <footer>
                <Link to="/login"><p style={authStyle.footerText}>Return to login</p></Link>
            </footer>
        </div>
    )
}