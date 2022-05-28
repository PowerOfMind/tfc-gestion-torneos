import React from "react";
import PropTypes from "prop-types";

const ComponenteListPartidos = (props) => {
  return (
    <div className="justify-content-center">
      <div className="mb-5">
        <h2>Próximos partidos</h2>

        {/* card */}
        {props.list.length > 0 ? (
          <div>
            {props.list.map((item, index) => {
              return (
                <div class="card text-center m-2 border-0">
                  <div class="card-body">
                    <div class="card-header">PARTIDO</div>
                    <div class="card-body carta">
                      <h5 class="card-title">
                        Organizador: {item.organizador} - Integrantes:{" "}
                        {item.equipo}/10
                      </h5>
                    </div>
                    <div class="card-footer text-muted">
                      Fecha: {item.dia} - Hora:{item.hora}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="alert">No hay partidos añadidos</div>
        )}

        {/* termina la card */}
        {/* <ul className="list-group">
          {props.list.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">ORGANIZADOR</th>
                  <th scope="col">FECHA</th>
                </tr>
              </thead>

              <tbody>
                {props.list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.organizador}</td>
                      <td>
                        {item.dia}-{item.hora}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="alert">No hay partidos añadidos</div>
          )}
        </ul> */}
      </div>
    </div>
  );
};

ComponenteListPartidos.propTypes = {};

export default ComponenteListPartidos;
