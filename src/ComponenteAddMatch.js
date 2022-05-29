import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "./addPartidos.css";
const ComponenteAddMatch = (datos) => {
  const [nuevoDia, setNuevoDia] = useState(
    /*new Date().toString()*/ "DD/MM/YYYY"
  );
  const [nuevaHora, setNuevaHora] = useState("00:00");
  const [nuevoOrganizador, setNuevoOrganizador] = useState("");
  const [nuevoPresupuesto, setNuevoPresupuesto] = useState(0);
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [nuevoIntegrante, setNuevoIntegrante] = useState("");
  const [nuevoPrivado, setNuevoPrivado] = useState("");
  const partidosCollectionRef = collection(db, "partidos");
  const crearPartido = async () => {
    console.log("crearPartido");
    await addDoc(partidosCollectionRef, {
      dia: nuevoDia,
      hora: nuevaHora,
      organizador: nuevoOrganizador,
      presupuesto: nuevoPresupuesto,
    });
  };

  const [tipo, setTipo] = useState(["Voley pista", "Voley playa", "Fut-Voley"]);
  const [partido, setPartido] = useState({
    dia: "",
    hora: "",
    organizador: "",
    presupuesto: 0,
    tipo: "",
    equipo: [],
    privado: false,
  });
  const [startDate, setStartDate] = useState(new Date());
  const [integrante, setIntegrante] = useState("");

  const [equipo, setEquipo] = useState([]);

  const handleIntegrante = () => {
    setPartido({ ...partido, equipo: [...partido.equipo, integrante] });
    setIntegrante("");
  };
  const handleInputs = ({ target }) => {
    if (target.name === "privado") {
      setPartido({ ...partido, [target.name]: target.checked });
    } else {
      setPartido({ ...partido, [target.name]: target.value });
    }
  };
  return (
    <>
      <h2>Agregar partido</h2>
      <form>
        <div className="row">
          <div className="mb-3 col-4">
            <label className="form-label">Día del partido</label>
            <input
              type="date"
              className="form-control noborde"
              // onChange={(event) => { setNuevoDia(moment(event.target.value).format('DD/MM/YYYY')) }}
              onChange={(event) => {
                setNuevoDia(event.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3 col-4">
            <label className="form-label">Hora del partido</label>
            <input
              type="time"
              className="form-control noborde"
              onChange={(event) => {
                setNuevaHora(event.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3 col-4">
            <label className="form-label ">Presupuesto</label>
            <input
              placeholder="0"
              type="number"
              className="form-control noborde"
              onChange={(event) => {
                setNuevoPresupuesto(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-5">
            <input
              placeholder="Organizador"
              type="text"
              className="form-control noborde"
              onChange={(event) => {
                setNuevoOrganizador(event.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3 col-4">
            <select
              placeholder="Tipo de pista"
              className="form-control noborde"
              name="tipo"
              onChange={handleInputs}
              value={partido.tipo}
            >
              {tipo.map((tipo, index) => (
                <option key={index}>{tipo}</option>
              ))}
            </select>
          </div>
          <div className="mb-3 form-check col-3">
            <input
              id="privado"
              type="checkbox"
              className="form-check-input"
              onChange={handleInputs}
              name="privado"
              checked={partido.privado}
            ></input>
            <label className="form-check-label" htmlFor="core">
              partido privado
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-9 ml-5">
            <input
              placeholder="Participantes"
              type="text"
              className="form-control noborde"
              onChange={(e) => {
                setIntegrante(e.target.value);
              }}
              name="integrantes"
              value={integrante}
            ></input>
          </div>

          <button
            className="col-3 anadir"
            onClick={(e) => {
              e.preventDefault();
              integrante.length > 0
                ? handleIntegrante()
                : alert("introduzca al menos un integrante");
            }}
          >
            Añadir Integrante
          </button>
        </div>

        <ul>
          {partido.equipo.map((data) => (
            <li>{data}</li>
          ))}
        </ul>

        <button className="btn btn-primary mb-3" onClick={crearPartido}>
          Agregar partido
        </button>
      </form>
    </>
  );
};

export default ComponenteAddMatch;
