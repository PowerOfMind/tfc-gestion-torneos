/* eslint-disable react/jsx-no-undef */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ComponenteAddMatch from "./ComponenteAddMatch";
import ComponenteListPartidos from "./ComponenteListPartidos";
import Footer from "./Footer"; 
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
  crossorigin="anonymous"
></script>;

const MainApp = (props) => {
  
  return (
    <div className="App ">
      <div className="container mt-4 container">
        <h1>SPORT-MENTS</h1>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="100">
              <img
                src="https://cdn.pixabay.com/photo/2021/07/20/14/06/sport-6480830_960_720.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2021/07/20/14/06/sport-6480830_960_720.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
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
      <Footer/>
    </div>
  );
};

export default MainApp;
