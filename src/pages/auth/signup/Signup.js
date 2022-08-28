import React from 'react'
import { Link } from 'react-router-dom'
import CommonButton from '../../../commonComponents/commonButton/CommonButton'
import useSignup from './useSignup'
import { authStyle } from '../authStyle'

export default function Signup() {
    const { state, setState, signupHandler, handleChange } = useSignup()
    return (
        <div style={authStyle.container}>
            <h2 >Register with us</h2>
            <div style={authStyle.formContainer}>
                <p>
                    <label style={authStyle.formLabel}>Name</label><br />
                    <input type="text" value={state.userName} placeholder='Enter Your Name' required style={authStyle.formInput}
                        name="userName"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <label style={authStyle.formLabel}>Email address</label><br />
                    <input type="text" value={state.email} placeholder='Enter Your Email' required style={authStyle.formInput}
                        name="email"
                        onChange={handleChange}
                    />
                </p>
                <p >
                    <label style={authStyle.formLabel}>Password</label><br />
                    <input type="password" value={state.password} placeholder='Enter Your Password' required style={authStyle.formInput}
                        name="password"
                        onChange={handleChange}
                    />
                </p>
                <p >
                    <label style={authStyle.formLabel}>Confirm Password</label><br />
                    <input type="password" value={state.confirmPassword} placeholder='Enter Confirm Password' required style={authStyle.formInput}
                        name="confirmPassword"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <CommonButton title="Register" onClick={signupHandler} />
                </p>
            </div>
            <footer>
                <Link to="/"><p style={authStyle.footerText}>Already have an account?</p></Link>
            </footer>
        </div>
    )
}