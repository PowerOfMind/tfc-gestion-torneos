import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Navegacion from './Navegacion';
import ComponenteAddMatch from './ComponenteAddMatch';
import ComponenteListPartidos from './ComponenteListPartidos';
import { db } from './firebase-config'
import { collection, getDocs, updateDocs, doc, deleteDoc } from 'firebase/firestore'


const MainApp = props => {


  console.log('props', props);
  const [partidos, setPartidos] = useState([]);
  console.log('partidos', partidos);
  const partidosCollectionRef = collection(db, 'partidos');

  const updateMatch = async (id, organizador) => {
    console.log('id',id);
    console.log('organizador',organizador);
    const matchDoc = doc(db, 'partidos', id)
    //const newFields = { organizador: "organizador" }
    await updateMatch(matchDoc,{ 
      organizador: 'organizador'
    })
  }
  const deleteUser = async (id) => {
    const matchDoc = doc(db, "partidos", id);
    await deleteDoc(matchDoc);
  };

  useEffect(() => {
    const getPartidos = async () => {
      const data = await getDocs(partidosCollectionRef);
      setPartidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPartidos();
  }, [])
  const [visualizacion, setVisualizacion] = useState({
    componenteAddMatch: true,
    // componenteTodos: true,
    // componenteFiltro: false,
  });
  return (
    <div className="App container">
      {partidos.map((partido, index) => {
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
      })}
      <Navegacion visualizacion={setVisualizacion} />
      <div className="container mt-4">
        <h1>Aplicación de gestión de Partidos y torneos de Volleyball</h1>
        <h2>El número de partidos actuales es de: {partidos.length}</h2>

        <div className="row mt-4">
          <div className="col-8">
            <ComponenteAddMatch setMatch={setPartidos} />
          </div>
          <div className="col-8">
            <ComponenteListPartidos list={partidos} />
          </div>

        </div>
      </div>
    </div>
  )
}

MainApp.propTypes = {}

export default MainApp