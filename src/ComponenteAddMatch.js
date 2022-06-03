import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "react-datepicker/dist/react-datepicker.css";
import "./addPartidos.css";
import { useNavigate } from "react-router-dom";


const ComponenteAddMatch = ({ isAuth }) => {

  let navigate = useNavigate();

  const [nuevoDia, setNuevoDia] = useState("DD/MM/YYYY");
  const [nuevaHora, setNuevaHora] = useState("00:00");
  const [nuevoPresupuesto, setNuevoPresupuesto] = useState(0);
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [nuevoIntegrante, setNuevoIntegrante] = useState(0);
  const [nuevoPrivado, setNuevoPrivado] = useState("");
  const partidosCollectionRef = collection(db, "partidos");


  const [tipo, setTipo] = useState(["Seleccione tipo", "Voley pista", "Voley playa", "Fut-Voley"]);
  /*  const [partido, setPartido] = useState({
     dia: "",
     hora: "",
     organizador: "",
     presupuesto: 0,
     tipo: "",
     equipo: [],
     privado: false,
   }); */

   const handleInput = (input) => {
    // input.preventDefault();
    crearPartido();
   }

  const crearPartido = async () => {

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
    navigate("/");
    // eslint-disable-next-line no-undef
    // preventDefault();
  };

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/");
    }
  }, []);

  return (
    <>

      <h2>Agregar partido</h2>
      {isAuth !== null ?
        (<form>
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

          <button className="btn btn-primary mb-3" onClick={handleInput}>
            Agregar partido
          </button>
        </form>) :
        <div class="alert">
          Debes iniciar sesion para agregar un partido
        </div>
      }
    </>
  );
};

export default ComponenteAddMatch;
