import React, { useRef, useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from "prop-types";
import "./login.css"
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
    <div className="">
      {!usuarioValido && (
        <div className="loginPage ">
          <p className="text-center titulo mt-3">
            Inicia sesion en Google para seguir
          </p>
          <div className="text-center">
            <a
              className="btn login-with-google-btn btn-primary "
              onClick={signInWithGoogle}
            >
              Iniciar sesión
            </a>
          </div>

          <ReCAPTCHA
            className="text-center"
            id="captcha"
            ref={captcha}
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
  );
}

LoginComponent.propTypes = {};

export default LoginComponent;
