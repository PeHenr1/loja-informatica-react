import React from "react";
import "./Produto.css";

const Produto = ( {nome, marca, preco, estado}) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={marca} alt={nome} /> {/* botar a img marca verificar */}
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{preco}</h5>
        <h6>{estado}</h6>
      </div>
    </div>
  );
};
export default Produto;
