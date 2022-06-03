import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainApp from "./MainApp";
import TournamentComponent from "./pages/TournamentComponent";
import ContactComponent from "./pages/ContactComponent";
import LoginComponent from "./pages/LoginComponent";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import ComponenteAddMatch from './ComponenteAddMatch';
import './App.css';
import ComponenteListPartidos from './ComponenteListPartidos';

const App = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clean();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav class="navbar navbar-dark navbar-expand-md bg-dark justify-content-md-center justify-content-start">
        <button
          class="navbar-toggler ml-1"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar2"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a to="" className="nav-link disabled">Sportments</a>
        <div
          class="navbar-collapse collapse justify-content-between align-items-center w-100"
          id="collapsingNavbar2"
        >
          <ul class="navbar-nav mx-auto text-md-center text-left">
            <li class="nav-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
            <Link to="/torneos" className="nav-link">Torneos</Link>
            </li>
            <li class="nav-item my-auto">
            <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
            <li class="nav-item">
            {!isAuth ? (
                <Link to="/login" className="nav-link">Login</Link>
              ) : (
                <button onClick={signUserOut}>Log out</button>
              )}
            </li>
          </ul>
          <ul class="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <li class="nav-item">
              <a class="nav-link" href="">
              <i class="fa-brands fa-twitter-square"></i>
              </a>{" "}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
              <i class="fa-brands fa-twitter-square"></i>
              </a>{" "}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">    
              <i class="fa-brands fa-twitter-square"></i>
              </a>{" "}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">    
              <i class="fa-brands fa-twitter-square"></i>
              </a>{" "}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">    
              
              </a>{" "}
            </li>
            
          </ul>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top  ">
        <div className="container-fluid">
          <div className="mx-auto order-0 " id="navbarNavAltMarkup">
            <div className="navbar-nav " >
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/torneos" className="nav-link">Torneos</Link>
              <Link to="/contacto" className="nav-link">Contacto</Link>
              {!isAuth ? (
                <Link to="/login" className="nav-link">Login</Link>
              ) : (
                <button onClick={signUserOut}>Log out</button>
              )}
            </div>
          </div>
        </div>
      </nav> */}

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
