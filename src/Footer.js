import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row container ">
          <div className="col-4 mt-5" >
              <a href="/politica" className="">Política de Privacidad</a>
          </div>
          <div className="col-4 mt-4">Contacto: <br></br>sport-ments@gmail.com</div>
          <div className="col-4 mt-4">© Sport-ments.com, <br></br> Inc. o sus afiliados</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
