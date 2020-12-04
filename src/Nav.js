import React from 'react'
import './Nav.css'
import InstantLogo from './assets/Instant.png'
import Dropdown from './assets/Dropdown.svg'

function Nav() {

    return (
        <div className="nav">
            {/* Logo */}
            {/* <img className="nav_mw_logo" src={ MyWays } alt="..." /> */}
            <div className="nav_mw_logo"></div>

            <div className="nav_options">
                {/* For you <Logo triangle> */}
                <p className="nav_text">
                    <a className="foryou" href="dropdown">For You</a>
                    <img  className="nav_dropdown_logo" src={ Dropdown } alt="..." />
                </p>

                {/* <Logo> Instant Apply */}
                <img  className="nav_instant_logo" src={ InstantLogo } alt="..." />
                <p className="nav_text">
                    Instant Apply
                </p>

                {/* Pricing */}
                <p className="nav_text">Pricing</p>

                {/* About Us */}
                <p className="nav_text">About us</p>

                {/* Sign Up */}
                <p className="nav_text nav_text_signup"><a className="signup_link" href="signup">SIGN UP</a></p>

                {/* Login */}
                <a href="login" className="nav_login_button"><p className="login_text">LOGIN</p></a>

            </div>
        </div>
    )
}

export default Nav
