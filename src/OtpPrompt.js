import React, { useState, useEffect } from 'react'
import './Signup.css'
import emailjs from 'emailjs-com'
import axios from 'axios'

function OtpPrompt({ otp, first, last, email, password }) {

    const axiosBaseUrl = "https://myways-backend-login.herokuapp.com/"

    const [success, setSuccess] = useState(false)

    useEffect(() => {
        emailjs.init('user_aZonyEHCoqRJAh7WMXNJ2')

        emailjs.send("gmail","template_cxq0uhr", {
            'otp': otp,
            'reciever': email,
        }).then((response) => { console.log('Mail sent') })

    }, [])

    const [eotp, setEotp] = useState('')

    // console.log(otp)

    const handleOtpChange = (event) => {
        setEotp(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (eotp == otp) {
            setSuccess(true)

            const data = {
                "first": first,
                "last": last,
                "email": email,
                "password": password
            }
            
            axios.post(axiosBaseUrl + 'signup', data)
            .then((response) => {
                if (response.data.error) {
                    console.log(response)
                    setSuccess(false)
                } else {
                    console.log(response)
                    setSuccess(true)
                }

            })

        } else {
            setSuccess(false)
        }
    }

    return (
        <div className="otp_prompt">
            { success ? (
                <div className="dialog">
                    <a className="close_text" href="/">x</a>
                    <p className="dialog_text">Thanks. Successfully Created your account !</p>
                </div>
            ) :
            
            (<div className="dialog">
                <a className="close_text" href="/">x</a>
                <p className="dialog_text">Otp Sent!</p>
                <p className="dialog_para">
                    Please Enter OTP
                </p>
                <form onSubmit={handleSubmit}>
                    <input className="name_input" placeholder="Enter you OTP" onChange={handleOtpChange} type="text" />
                    <p>{`Enter the OTP sent at ${email}`}</p>
                    <br /><br /><br />
                    <button type="submit" className="signup_button">Enter</button>
                </form>
            </div>)}
        </div>
    )
}

export default OtpPrompt
