import React, { useState } from 'react'
import './Signup.css'
import OtpPrompt from './OtpPrompt.js'

function Signup() {

    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [requestOtp, setRequestOtp] = useState(false)
    const [gotp, setGotp] = useState('')

    const handleFirstChange = (event) => {
        setFirst(event.target.value)
    }

    const handleLastChange = (event) => {
        setLast(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setRequestOtp(true)
        setGotp(Math.floor(100000 + Math.random() * 900000))

        // console.log(user, password, first, last)
    }

    const handleEmailChange = (event) => {
        setUser(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className="signup">
            <div className="blackground"></div>

            {requestOtp ? (<OtpPrompt otp={gotp} first={first} last={last} email={user} password={password} />) : (<div className="dialog">
                <a className="close_text" href="/">x</a>
                <p className="dialog_text">Sign Up</p>
                <p className="dialog_para">
                    It's quick and easy
                </p>
                <div className="signup_forms">
                    <form onSubmit={handleSubmit} method="post">
                        <input className="name_input" onChange={handleFirstChange} placeholder="First Name" type="text" />
                        <input className="name_input" onChange={handleLastChange} placeholder="Last Name" type="text" />
                        <br />
                        <input className="detail_input" onChange={handleEmailChange}  placeholder="Email" type="text" />
                        <br />
                        <input className="detail_input" onChange={handlePasswordChange} placeholder="Password" type="text" type="password" />
                        <br />
                        <button type="submit" className="signup_button">Sign Up</button>
                    </form>
                </div>
            </div>)}
        </div>
    )
}

export default Signup
