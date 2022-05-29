import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { db } from './firebase-config'
import { collection, getDocs, updateDocs, doc, deleteDoc } from 'firebase/firestore'

const ComponenteListPartidos = (props) => {

  const partidosCollectionRef = collection(db, 'partidos');

  const updateMatch = async (id, organizador) => {
    console.log('id', id);
    console.log('organizador', organizador);
    const matchDoc = doc(db, 'partidos', id)
    //const newFields = { organizador: "organizador" }
    await updateMatch(matchDoc, {
      organizador: 'organizador'
    })
  }
  const deleteUser = async (id) => {
    const matchDoc = doc(db, "partidos", id);
    await deleteDoc(matchDoc);
  };

  return (
    <div className="justify-content-center">
      <div className="mb-5">
        <h2>Próximos partidos</h2>

        {/* card */}
        {props.list.length > 0 ? (
          <div>
            {props.list.map((item, index) => {
              return (
                <div className="card text-center m-2 border-0">
                  <div className="card-body">
                    <div className="card-header" key={index} >PARTIDO</div>
                    <div className="card-body carta">
                      <h5 className="card-title">
                        Organizador: {item.organizador} - Integrantes:{" "}
                        {(item.equipo).length}/10
                      </h5>
                    </div>
                    <div className="card-footer text-muted">
                      Fecha: {item.dia} - Hora:{item.hora}
                    </div>
                    <div className="card-footer text-muted">
                    <button
                        onClick={() => {
                          deleteUser(item.id);
                        }}
                      >
                        {" "}
                        Borrar partido
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
    </div>
  );
};

ComponenteListPartidos.propTypes = {};

export default ComponenteListPartidos;
