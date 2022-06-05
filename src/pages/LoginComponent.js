import React, { useRef, useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./login.css";

function LoginComponent({ setIsAuth }) {

  const [usuarioValido, setUsuarioValido] = useState(null);
  const captcha = useRef(null);
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log('El usuario no es un robot');
      setUsuarioValido(true)
    }
  }

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-5"></div>
          <div className="col-5"></div>
          {usuarioValido ? (
            <div className="loginPage">
              <h1 className="text-center mt-4">Bienvenido</h1>
              <p className="text-center mt-4">
                Inicia sesión en google para continuar
              </p>
              <button
                className=" btn login-with-google-btn btn-primary text-center mb-3"
                id="medio"
                onClick={signInWithGoogle}
              >
                Iniciar Sesión
              </button>

            </div>
          ) :
            <div>
              <ReCAPTCHA
                ref={captcha}
                id="medio1"
                sitekey="6LdUuzggAAAAAHUz51SVgjkr3Hj2HNo-HRDmxkCW"
                onChange={onChange}
              />
            </div>
          }
        </div>
        {!usuarioValido && auth.currentUser !== null && (
          <div>
            <h2>Bienvenido {auth.currentUser.displayName}</h2>
            <button className="btn btn-primary mb-3" onClick={signUserOut}>
              Sign Out!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginComponent;
