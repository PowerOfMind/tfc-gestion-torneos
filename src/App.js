import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import MainApp from "./MainApp";
import TournamentComponent from "./pages/TournamentComponent";
import ContactComponent from "./pages/ContactComponent";
import LoginComponent from "./pages/LoginComponent";
import ComponenteAddMatch from './ComponenteAddMatch';
import ComponenteListPartidos from './ComponenteListPartidos';

import './App.css';

const App = props => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  return (
    <Router>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark sticky-top justify-content-start">
        <button
          className="navbar-toggler ml-1"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="/#" className="nav-link disabled">Sportments</a>
        <div
          className="navbar-collapse collapse justify-content-between align-items-center w-100"
          id="collapsingNavbar2"
        >
          <ul className="navbar-nav mx-auto text-md-center text-left">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/torneos" className="nav-link">Torneos</Link>
            </li>
            <li className="nav-item my-auto">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link"></Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link"></Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MainApp isAuth={isAuth} />} />
        <Route path="/torneos" element={<TournamentComponent />} />
        <Route path="/contacto" element={<ContactComponent />} />
        <Route
          path="/login"
          element={<LoginComponent setIsAuth={setIsAuth} />}
        />
        <Route
          path="/agregar-partido"
          element={<ComponenteAddMatch isAuth={isAuth} />}
        />
        <Route
          path="/listar-partidos"
          element={<ComponenteListPartidos isAuth={isAuth} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
