import React, { useRef, useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from "prop-types";
import "./login.css";
function LoginComponent({ setIsAuth }) {
  const [captchaValido, cambiarCaptchaValido] = useState(null);
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
      console.log("El usuario no es un robot");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5"></div>
        <div className="col-5"></div>
        {!usuarioValido && (
          <div className="loginPage">
            <h1 className="text-center">Bienvenido</h1>
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
            <ReCAPTCHA
              ref={captcha}
              id="medio1"
              sitekey="6LdUuzggAAAAAHUz51SVgjkr3Hj2HNo-HRDmxkCW"
              onChange={onChange}
            />
          </div>
        )}
        {usuarioValido && (
          <div>
            <h1>Bienvenido</h1>
          </div>
        )}
      </div>
    </div>
  );
}

LoginComponent.propTypes = {};

export default LoginComponent;
