import React from 'react'
import './Body.css'

function Body() {

    const handleBodyClick = () => {
        if (window.location.href.endsWith('/dropdown')) {
            window.location.href = window.location.href.split('/dropdown')[0]
        }
    }

    return (
        <div className="body" onClick={ handleBodyClick }>
            <div className="body_paragraphs">
                <div className="body_text_container">
                    <p className="body_heading"><b>Apply and hear back every time</b></p>
                    <p className="body_paragragh">Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</p>
                    <button className="sign_button" ><a className="sign_link" href="signup"><b>Get Started</b></a></button>
                </div>
            </div>
        </div>
    )
}

export default Body
