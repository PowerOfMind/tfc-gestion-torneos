import React, { useRef, useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
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
      console.log('El usuario no es un robot');
      
    }

  }

  return (
    <div className="container">
      {!usuarioValido &&
        <div className="loginPage">
          <p>Sign In With Google to Continue</p>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LdUuzggAAAAAHUz51SVgjkr3Hj2HNo-HRDmxkCW"
            onChange={onChange}
          />
        </div>
      }
      {usuarioValido &&
        <div>
          <h1>Bienvenido</h1>
        </div>
      }

    </div>

  )
}


export default LoginComponent
