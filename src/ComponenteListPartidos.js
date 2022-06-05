import React, { useState, useEffect } from "react";
import './listaPartidos.css';
import { auth, db } from "./firebase-config";
import {
  collection,
  doc,
  deleteDoc,
  getDocs
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ComponenteListPartidos = ({ isAuth }) => {

  let navigate = useNavigate();

  const [listaPartidos, setListaPartidos] = useState([]);
  const [randstate, setRandstate] = useState(0);
  const partidosCollectionRef = collection(db, "partidos");
  console.log('auth: ', auth);

  const deletePartido = async (id) => {
    setRandstate(randstate + 1);
    const matchDoc = doc(db, "partidos", id);
    await deleteDoc(matchDoc);
    /*window.location.reload() */
  };

  /* useEffect(() => {
    const timer = setTimeout(() => {
      if ((auth.currentUser) === null) {
        navigate("/login");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []); */
  useEffect(() => {

    if ((auth.currentUser) === null) {
      navigate("/login");
    }

  }, []);

  useEffect(() => {
    const getpartidos = async () => {
      const data = await getDocs(partidosCollectionRef);
      setListaPartidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getpartidos();
  }, [randstate]);


  return (
    <div className="justify-content-center">
      <h2>Próximos eventos</h2>

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
                  {!isAuth && item.organizador.id === auth.currentUser.uid && (
                    <div className="card-footer text-muted">
                      <button
                        className="noselect delete"
                        onClick={() => {

                          deletePartido(item.id);
                        }}
                      >
                        <span className="text">Borrar</span>
                        <span className="icon">
                          <svg

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
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="alert">No hay eventos añadidos</div>
      )}
    </div>
  );
};


export default ComponenteListPartidos;
