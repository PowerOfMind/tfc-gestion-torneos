import React from "react";
import PropTypes from "prop-types";

function ContactComponent(props) {
  return (
    <div>
      <form>
        <input type="text" name="correo" placeholder="Direccion de correo" />
        <input type="text" name="asunto" placeholder="asunto"></input>
        <input type="text" name="cuerpo" placeholder="cuerpo"/>
        <button type="submit">Enviar correo</button>
      </form>
    </div>
  );
}

ContactComponent.propTypes = {};

export default ContactComponent;
