import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "react-datepicker/dist/react-datepicker.css";
import "./addPartidos.css";
import { useNavigate } from "react-router-dom";


const ComponenteAddMatch = ({isAuth}) => {

  let navigate = useNavigate();

  const [nuevoDia, setNuevoDia] = useState("DD/MM/YYYY");
  const [nuevaHora, setNuevaHora] = useState("00:00");
  const [nuevoOrganizador, setNuevoOrganizador] = useState("");
  const [nuevoPresupuesto, setNuevoPresupuesto] = useState(0);
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [nuevoIntegrante, setNuevoIntegrante] = useState(0);
  const [nuevoPrivado, setNuevoPrivado] = useState("");
  const partidosCollectionRef = collection(db, "partidos");


  const [tipo, setTipo] = useState(["Seleccione tipo", "Voley pista", "Voley playa", "Fut-Voley"]);
  const [partido, setPartido] = useState({
    dia: "",
    hora: "",
    organizador: "",
    presupuesto: 0,
    tipo: "",
    equipo: [],
    privado: false,
  });



  const crearPartido = async () => {
    console.log("crearPartido");
    await addDoc(partidosCollectionRef,
      {
        dia: nuevoDia,
        hora: nuevaHora,
        organizador: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        presupuesto: nuevoPresupuesto,
        tipo: nuevoTipo,
        equipo: nuevoIntegrante,
        privado: nuevoPrivado
      }

    );
    console.log('aadDoc', addDoc);
    navigate("/");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);

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
              onChange={(e) => { setNuevoDia(e.target.value) }}
            ></input>
          </div>
          <div className="mb-3 col-4">
            <label className="form-label">Hora del partido</label>
            <input
              type="time"
              className="form-control noborde"
              name="hora"
              onChange={(e) => { setNuevaHora(e.target.value) }}
            ></input>
          </div>
          <div className="mb-3 col-4">
            <label className="form-label ">Presupuesto</label>
            <input
              placeholder="0"
              type="number"
              className="form-control noborde"
              name="presupuesto"
              onChange={(e => { setNuevoPresupuesto(e.target.value) })}
            ></input>
          </div>
        </div>
        <div className="row">
          {/* <div className="mb-3 col-5">
            <input
              placeholder="Organizador"
              type="text"
              className="form-control noborde"
              name="organizador"
              onChange={(e => { setNuevoOrganizador(e.target.value) })}
            ></input>
          </div> */}
          <div className="mb-3 col-4">
            <select
              placeholder="Tipo de pista"
              className="form-control noborde"
              name="tipo"
              onChange={(e => { setNuevoTipo(e.target.value) })}
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
              name="privado"
              onChange={(e => { setNuevoPrivado(e.target.checked) })}
            ></input>
            <label className="form-check-label" htmlFor="core">
              partido privado
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-9 ml-5">
            <input
              placeholder="Integrantes"
              type="number"
              className="form-control noborde"
              name="integrantes"
              onChange={(e) => {
                setNuevoIntegrante(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <ul>
          {partido.equipo.map((data, index) => (
            <li key={index}>{data}</li>
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
