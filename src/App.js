import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainApp from './MainApp';
import TournamentComponent from './pages/TournamentComponent';
import ContactComponent from './pages/ContactComponent';
import LoginComponent from './pages/LoginComponent';
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import './App.css';
import Politica from './pages/Politica';


const App = props => {
  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clean()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }
  return (
    <Router>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/torneos'>Torneos</Link>
            <Link to='/contacto'>Contacto</Link>
            {!isAuth ? <Link to='/login'>Login</Link> : <button onClick={signUserOut}>Log out</button>}
            
        </nav>

      <Routes>
          <Route path="/" element={<MainApp/>}/>
          <Route path="/torneos" element={<TournamentComponent/>}/>
          <Route path="/contacto" element={<ContactComponent/>}/>
          <Route path="/login" element={<LoginComponent setIsAuth={setIsAuth} />}/>
          <Route path="/politica" element={<Politica/>}/>
      </Routes>
    </Router>
  )
}

App.propTypes = {}

export default App