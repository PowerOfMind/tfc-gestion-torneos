/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import Navegacion from "./Navegacion";
import ComponenteAddMatch from "./ComponenteAddMatch";
import ComponenteListPartidos from "./ComponenteListPartidos";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  updateDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
  crossorigin="anonymous"
></script>;

const MainApp = (props) => {
  console.log("props", props);
  const [partidos, setPartidos] = useState([]);
  console.log("partidos", partidos);
  const partidosCollectionRef = collection(db, "partidos");

  // const updateMatch = async (id, organizador) => {
  //   console.log('id', id);
  //   console.log('organizador', organizador);
  //   const matchDoc = doc(db, 'partidos', id)
  //   //const newFields = { organizador: "organizador" }
  //   await updateMatch(matchDoc, {
  //     organizador: 'organizador'
  //   })
  // }
  // const deleteUser = async (id) => {
  //   const matchDoc = doc(db, "partidos", id);
  //   await deleteDoc(matchDoc);
  // };

  useEffect(() => {
    const getPartidos = async () => {
      const data = await getDocs(partidosCollectionRef);
      setPartidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPartidos();
  }, []);
  const [visualizacion, setVisualizacion] = useState({
    componenteAddMatch: true,
    // componenteTodos: true,
    // componenteFiltro: false,
  });
  return (
    <div className="App container">
      {/* {partidos.map((partido, index) => {
        return (
          <div key={index}> Partido {index + 1}
            {" "}
            <h1>Dia: {partido.dia}</h1>
            <h1>Hora: {partido.hora}</h1>
            <h1>Organizador: {partido.organizador}</h1>
            <button
              onClick={() => {
                updateMatch(partido.id, partido.organizador);
              }}
            >
              {" "}
              Modificar partido
            </button>
            <button
              onClick={() => {
                deleteUser(partido.id);
              }}
            >
              {" "}
              Borrar partido
            </button>
          </div>)
      })} */}
      {/* <Navegacion visualizacion={setVisualizacion} /> */}
      <div className="container mt-4">
        <h1>SPORT-MENTS</h1>
        <h2>El número de partidos actuales es de: {partidos.length}</h2>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="100">
              <img src="https://cdn.pixabay.com/photo/2021/07/20/14/06/sport-6480830_960_720.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2021/07/20/14/06/sport-6480830_960_720.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row mt-4">
          <div className="col-12">
            <ComponenteListPartidos list={partidos} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <ComponenteAddMatch setMatch={setPartidos} />
          </div>
        </div>
      </div>
    </div>
  );
};

MainApp.propTypes = {};

export default MainApp;
