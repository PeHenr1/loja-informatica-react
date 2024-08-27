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
        value={props.valor} // Usa o valor do estado como value
        onChange={aoDigitado}
      />
    </div>
  );
};

export default CampoTexto;
