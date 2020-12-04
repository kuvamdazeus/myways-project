import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {

    const axiosBaseUrl = "https://myways-backend-login.herokuapp.com/"

    const [loggedIn, setLoggedIn] = useState(false)
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        
        axios.get(axiosBaseUrl + 'login/' + user)
        .then((response) => {
            if (response.data.error) {
                setLoggedIn(false)
            } else {

                if (response.data.password == password) {
                    setLoggedIn(true)
                    console.log("Authenticated !")
                } else {
                    setLoggedIn(false)
                }
            }
        })

        // window.location.href = window.location.href + "/" + falseKey // min word count- 110
    }

    const handleEmailChange = (event) => {
        setUser(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className="login">
            <div className="black_background"></div>

            { loggedIn ? (
                <div className="dialog">
                    <a className="close_text" href="/">x</a>
                    <p className="dialog_text">Thanks. Authenticated !</p>
                </div>
            ) :
            
            (<div className="login_dialog">
                
                <div className="login_header">
                    <p className="login_heading">Login</p>
                    <a className="login_close" href="/">x</a>
                </div>

                <div className="login_form">
                    <p className="occup">Student</p>
                    <hr className="occup_hr" />
                    <form onSubmit={handleSubmit} type="submit" method="post">
                        <input className="login_input" onChange={handleEmailChange} placeholder="Email" type="text" />
                        <br />
                        <input className="login_input" placeholder="Password" type="text" onChange={handlePasswordChange} type="password" />
                        <br />
                        <div className="forgot"><p className="forgot_text">Forgot Password?</p></div>
                        <button type="submit" className="login_button">Login</button>
                    </form>
                </div>
            </div>) }
        </div>
    )
}

export default Login
