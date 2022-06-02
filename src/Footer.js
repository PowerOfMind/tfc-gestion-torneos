import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row container ">
          <div className="col-4 mt-4">
            <a
              href="https://www.privacypolicies.com/live/ee67eaf0-e568-40fc-91fd-602c4d0b43af"
              className=""
            >
              Política de Privacidad
            </a>
          </div>
          <div className="col-4 mt-4">
            Contacto: <br></br>sport-ments@gmail.com
          </div>
          <div className="col-4 mt-4">
            © Sport-ments.com, <br></br> Inc. o sus afiliados
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
