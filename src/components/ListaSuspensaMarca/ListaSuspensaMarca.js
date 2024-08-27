import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensaMarca = (props) => {

  const aoEscolhido = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select value={props.valor} onChange={aoEscolhido}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default ListaSuspensaMarca;
