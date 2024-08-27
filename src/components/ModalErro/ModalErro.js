import React from "react";
import "./ModalErro.css";

const ModalErro = ({ mensagem, aoFechar }) => {
  return (
    <div className="modal-erro">
      <div className="modal-erro-content">
        <h3>Erro</h3>
        <p>{mensagem}</p>
        <button onClick={aoFechar}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalErro;
