import React from "react";
import "./CheckboxEstado.css";

const CheckboxEstado = ({ estado, aoAlterado }) => {
  return (
    <div className="checkbox-estado">
      <label>
        <input
          type="radio"
          value="Novo"
          checked={estado === "Novo"}
          onChange={(evento) => aoAlterado(evento.target.value)}
        />
        Novo
      </label>
      <label>
        <input
          type="radio"
          value="Usado"
          checked={estado === "Usado"}
          onChange={(evento) => aoAlterado(evento.target.value)}
        />
        Usado
      </label>
    </div>
  );
};

export default CheckboxEstado;
