import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ComponenteAddMatch from "./ComponenteAddMatch";
import ComponenteListPartidos from "./ComponenteListPartidos";

import Footer from "./Footer";
import "./mainApp.css"

const MainApp = (props) => {
  return (
    <div className="App">
      <div className="row"
      id="MainApp">
        <h1 className="mt-3">SPORT-MENTS</h1>
        <div className="col-1"></div>
        <div className="col-8 mt-2 ">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/20/14/06/sport-6480830_960_720.jpg"
            className="foto w-100" alt="imagen1"
          />
          <hr></hr>
          <div className="row mt-4">
            <div className="col-12">
              <ComponenteListPartidos />
            </div>
          </div>
          <hr></hr>
          <div className="row mt-4">
            <div className="col-12">
              <ComponenteAddMatch />
            </div>
          </div>
        </div>
        <div className="col-3 ml-5">
          <img
            src="https://www.antevenio.com/wp-content/uploads/2015/12/redes-facebook-2.jpg"

            className="w-100"

          />
          <img
          id="anuncio2"
            src="https://www.antevenio.com/wp-content/uploads/2015/12/email-amazon.jpg"
            className="w-100" alt="imagen2"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
