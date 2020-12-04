import './App.css';
import React, { useState, useEffect } from 'react'
import Nav from './Nav.js'
import Login from './Login.js'
import Body from './Body.js'
import Dropdown from './Dropdown.js'
import Signup from './Signup.js'

function App() {
  
  const [login, setLogin] = useState(false)
  const [drop, setDrop] = useState(false)
  const [signup, setSignup] = useState(false)

  console.log(window.location.href.split('/')[3])
  console.log(login)

  useEffect(() => {

    const href = window.location.href

    if (href.endsWith('login')) {
      setLogin(true)

    } else if (href.endsWith('dropdown')) {
      setDrop(true)

    } else if (href.endsWith('signup')) {
      setSignup(true)

    }
    
    else {
      setLogin(false)
      setDrop(false)
    }

  }, [window.location.href])

  return (
    <div className="app">

      { login ? (<Login />) : null }
      { drop ? (<Dropdown />) : null }
      { signup ? <Signup /> : null }
      <Nav />
      <Body />
      
    </div>
  );
}

export default App;
