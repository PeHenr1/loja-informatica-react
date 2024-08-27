import React, { useState } from "react";  
import "./Form.css";
import CampoTexto from "../TextField/TextField";
import ListaSuspensaSecao from "../ListaSuspensaSecao/ListaSuspensaSecao";
import ListaSuspensaMarca from "../ListaSuspensaMarca/ListaSuspensaMarca";
import CheckboxEstado from "../CheckboxEstado/CheckboxEstado";
import Botao from "../Botao/Botao";

const Formulario = (props) => {
  const secoes = ["Computadores","Acessórios","Impressoras","Games","Gadgets"];
  const marcas = ["HP","Dell","Positivo","Asus","Xing Ling"];

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estado, setEstado] = useState("Novo");
  const [secao, setSecao] = useState("Computadores");
  const [marca, setMarca] = useState("Positivo");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoProdCadastrado({
      nome,
      preco,
      estado,
      secao,
      marca,
    });
  };
  
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do produto:</h2>
        <ListaSuspensaSecao
          label="Seção"
          itens={secoes}
          aoAlterado={(valor) => setSecao(valor)}
        />
        <ListaSuspensaMarca
          label="Marca"
          itens={marcas}
          aoAlterado={(valor) => setMarca(valor)}
        />
        <CampoTexto
          label="Nome"
          placeholder="Digite o produto aqui"
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Preço"
          placeholder="Digite o preço aqui"
          aoAlterado={(valor) => setPreco(valor)}
        />
        <CheckboxEstado
          estado={estado}
          aoAlterado={(valor) => setEstado(valor)}
        />
        <Botao>Inserir Produto</Botao>
      </form>
    </section>
  );
};

export default Formulario;
