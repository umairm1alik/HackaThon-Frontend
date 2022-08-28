import React from 'react'
import { Link } from 'react-router-dom'
import CommonButton from '../../../commonComponents/commonButton/CommonButton'

import { authStyle } from '../authStyle'
import useLogin from './useLogin'

export default function Login() {
    const { state, setState, loginHandler, handleChange } = useLogin()
    return (
        <div style={authStyle.container}>
            <h2 >Sign in to us</h2>
            <div style={authStyle.formContainer}>
                <p>
                    <label style={authStyle.formLabel}>Email address</label><br />
                    <input type="text" name="email" value={state.email} onChange={handleChange} required style={authStyle.formInput} />
                </p>
                <p style={{ justifyContent: "space-between" }}>
                    <label style={authStyle.formLabel}>Password</label>
                    <Link to="/forgotPassword"><label style={authStyle.forgotText}>Forgot password?</label></Link>
                    <br />
                    <input type="password" name="password" value={state.password} onChange={handleChange} required style={authStyle.formInput} />
                </p>
                <p>
                    <CommonButton title="Login" onClick={loginHandler} />
                </p>
            </div>
            <footer>
                <Link to="/signup"><p style={authStyle.footerText}>First time? Create an account.</p></Link>
            </footer>
        </div>
    )
}