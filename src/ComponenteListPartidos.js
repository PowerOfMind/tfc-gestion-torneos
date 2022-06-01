import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './listaPartidos.css';
import { auth, db } from "./firebase-config";
import {
  collection,
  getDocs,
  updateDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

const ComponenteListPartidos = ({ isAuth }) => {

  const [listaPartidos, setListaPartidos] = useState([]);
  const partidosCollectionRef = collection(db, "partidos");

  const deletePartido = async (id) => {
    const matchDoc = doc(db, "partidos", id);
    await deleteDoc(matchDoc);
  };
  useEffect(() => {
    const getpartidos = async () => {
      const data = await getDocs(partidosCollectionRef);
      setListaPartidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getpartidos();
  }, [], [deletePartido]);



  // const updateMatch = async (id, nuevoIntegrante) => {
  //   console.log("id", id);
  //   console.log("organizador", nuevoIntegrante);
  //   const matchDoc = doc(db, "partidos", id);
  //   //const newFields = { organizador: "organizador" }
  //   await updateMatch(matchDoc, {
  //     equipo: nuevoIntegrante,
  //   });
  // };



  return (
    <div className="justify-content-center">
      <h2>Próximos partidos</h2>
      {/* card */}
      {listaPartidos.length > 0 ? (
        <div>
          {listaPartidos.map((item, index) => {
            return (
              <div className="card text-center m-2 border-0" key={item.id}>
                <div className="card-body">
                  <div className="card-header" >
                    <p className="uppercase">{item.tipo}</p>
                  </div>
                  <div className="card-body carta">
                    <h5 className="card-title">
                      Organizador: {item.organizador.name} - Integrantes:{" "}
                      {item.equipo}/10
                    </h5>
                  </div>
                  <div className="card-footer text-muted">
                    Fecha: {item.dia} - Hora: {item.hora}
                  </div>
                  <div className="card-footer text-muted">
                    <button
                      className="noselect delete"
                    >
                      <span className="text">Borrar</span>
                      <span className="icon">
                        <svg
                          onClick={() => {

                            deletePartido(item.id);
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
                    {isAuth && item.organizador.id === auth.currentUser.uid && (
                      <button
                        onClick={() => {
                          deletePartido(item.id);
                        }}
                      >
                        {" "}
                        &#128465;
                      </button>
                    )}
                    {/* {!isAuth && item.organizador.id === auth.currentUser.uid && (
                    <button
                      className="btn btn-primary mb-3"
                      onClick={() => {
                        // updateMatch(item.id, item.integrante + 1)
                      }
                      }>
                      unirse
                    </button> )} */}
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
