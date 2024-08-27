import React from "react";
import "./TextField.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.valor} 
        onChange={aoDigitado}
      />
    </div>
  );
};

export default CampoTexto;
