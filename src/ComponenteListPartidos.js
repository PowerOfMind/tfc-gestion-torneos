import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './listaPartidos.css';
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  updateDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

const ComponenteListPartidos = (props) => {
  const partidosCollectionRef = collection(db, "partidos");

  
  const updateMatch = async (id, organizador) => {
    console.log("id", id);
    console.log("organizador", organizador);
    const matchDoc = doc(db, "partidos", id);
    //const newFields = { organizador: "organizador" }
    await updateMatch(matchDoc, {
      organizador: "organizador",
    });
  };
  const deleteUser = async (id) => {
    const matchDoc = doc(db, "partidos", id);
    await deleteDoc(matchDoc);
  };

  return (
    <div className="justify-content-center">
      <h2>Próximos partidos</h2>

      {/* card */}
      {props.list.length > 0 ? (
        <div>
          {props.list.map((item, index) => {
            return (
              <div className="card text-center m-2 border-0">
                <div className="card-body">
                  <div className="card-header" key={index}>
                    PARTIDO
                  </div>
                  <div className="card-body carta">
                    <h5 className="card-title">
                      Organizador: {item.organizador} - Integrantes:{" "}
                      {item.equipo.length}/10
                    </h5>
                  </div>
                  <div className="card-footer text-muted">
                    Fecha: {item.dia} - Hora: {item.hora}
                  </div>
                  <div className="card-footer text-muted">
                    <button
                      class="noselect delete"
                    >
                      <span class="text">Borrar</span>
                      <span class="icon">
                        <svg
                        onClick={() => {
                          deleteUser(item.id);
                        }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="alert">No hay partidos añadidos</div>
      )}
    </div>
  );
};

ComponenteListPartidos.propTypes = {};

export default ComponenteListPartidos;
