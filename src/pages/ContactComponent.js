import React from "react";
import PropTypes from "prop-types";
import "./contact.css";
import emailjs from "@emailjs/browser";

function ContactComponent(props) {

  const sendEmail = (event) =>{
    event.preventDefault();
    emailjs.sendForm('service_ybhr68k','template_eade4mj', event.target, 'kT1CvVamaHPSc8dzS' )
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }



  return (
    <div className="container justify-content-center text-center">
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Contáctanos</h3>
                <p>Rellena los datos del mensaje.</p>
                <form className="requires-validation" onSubmit={sendEmail} noValidate>
                  

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="correo"
                      placeholder="Dirección de correo"
                      required
                    />
                    <div className="valid-feedback">El email es valido</div>
                    <div className="invalid-feedback">
                      El email no puede estar vacio
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  

                  <div className="col-md-12 mt-2">
                    <textarea
                      className="form-control"
                      type="text"
                      name="cuerpo"
                      placeholder="Cuerpo del correo"
                      required
                    />
                  </div>

                  <div className="form-check mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label">
                      Confirmo que los datos son correctos
                    </label>
                    <div className="invalid-feedback">
                      Confirma que todos los datos son correctos
                    </div>
                  </div>

                  <div className="form-button mt-3">
                    <button id="submit" type="submit" className="btn btn-primary">
                      Enviar correo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <form>
        <input type="text" name="correo" placeholder="Direccion de correo" />
        <input type="text" name="asunto" placeholder="asunto"></input>
        <input type="text" name="cuerpo" placeholder="cuerpo"/>
        <button type="submit">Enviar correo</button>
      </form> */}
    </div>
  );
}

ContactComponent.propTypes = {};

export default ContactComponent;
