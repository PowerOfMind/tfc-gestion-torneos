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

  /* const signinAnonimously = () => {
    auth.signInAnonymously().catch(alert);
  } */

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

        <ReCAPTCHA
          ref={captcha}
          sitekey="6LdUuzggAAAAAHUz51SVgjkr3Hj2HNo-HRDmxkCW"
          onChange={onChange}
        />
      </div>


      {usuarioValido ?
        <div className="loginPage">
          <p>Sign In With Google to Continue</p>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in con Google
          </button>
          {/* <button className="login-btn" onClick={signinAnonimously}>
            Sign in anonimo
          </button> */}

        </div>
        :
        <div>
          <h1> </h1>

        </div>

      }
      {!usuarioValido && auth.currentUser !== null && (
        <div>
          <h2>Bienvenido {auth.currentUser.displayName}</h2>
          <button className="btn btn-primary mb-3" onClick={signUserOut}>
            Sign Out!
          </button>
        </div>
      )}

    </div>
  );
}

export default LoginComponent;
