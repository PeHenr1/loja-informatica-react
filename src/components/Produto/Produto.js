import React from "react";
import "./Produto.css";
import PropTypes from 'prop-types';

const Produto = ({ nome, marca, preco, estado }) => {

  const imagensDeMarca = {
    "HP": "https://brandcentral.hp.com/content/dam/sites/brand-central/elem-logo/images/Logo_1_do.jpeg",
    "Dell": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2048px-Dell_logo_2016.svg.png",
    "Positivo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFfCnFyt-dbtZpJXJvwsy-DMVByNP3uJxrQ&s",
    "Asus": "https://static.vecteezy.com/system/resources/previews/019/767/925/original/asus-logo-asus-icon-transparent-free-png.png",
    "Xing Ling": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDaQCbpdqkbunDcIhxw8b7_f3IqPS_ZDnwA&s",
  };

  const imagemMarca = imagensDeMarca[marca] 

  return (
    <div className="produto">
      <div className="cabecalho">
        <img src={imagemMarca} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{preco}</h5>
        <h6>{estado}</h6>
      </div>
    </div>
  );
};

Produto.propTypes = {
  nome: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
};

export default Produto;
