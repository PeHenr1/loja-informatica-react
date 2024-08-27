import React, { useState } from "react";  
import "./Form.css";
import CampoTexto from "../TextField/TextField";
import ListaSuspensaSecao from "../ListaSuspensaSecao/ListaSuspensaSecao";
import ListaSuspensaMarca from "../ListaSuspensaMarca/ListaSuspensaMarca";
import CheckboxEstado from "../CheckboxEstado/CheckboxEstado";
import Botao from "../Botao/Botao";
import ModalErro from "../ModalErro/ModalErro";

const Formulario = ({ aoProdCadastrado }) => {
  const secoes = ["Computadores","Acessórios","Impressoras","Games","Gadgets"];
  const marcas = ["HP","Dell","Positivo","Asus","Xing Ling"];

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estado, setEstado] = useState("Novo");
  const [secao, setSecao] = useState("Computadores");
  const [marca, setMarca] = useState("Positivo");
  const [erro, setErro] = useState(false);

  const aoSalvar = (evento) => {
    evento.preventDefault();

    if (nome.trim() === "" || preco.trim() === "") {
      setErro(true);
      return;
    }

    setErro(false);

    aoProdCadastrado({
      nome,
      preco,
      estado,
      secao,
      marca,
    });

    setNome("");
    setPreco("");
    setEstado("Novo");
    setSecao("Computadores");
    setMarca("Positivo");
  };
  
  const fecharModal = () => {
    setErro(false);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do produto:</h2>
        <ListaSuspensaSecao
          label="Seção"
          itens={secoes}
          aoAlterado={setSecao}
          valor={secao} 
        />
        <ListaSuspensaMarca
          label="Marca"
          itens={marcas}
          aoAlterado={setMarca}
          valor={marca} 
        />
        <CampoTexto
          label="Nome"
          placeholder="Digite o nome do produto"
          valor={nome} 
          aoAlterado={setNome}
        />
        <CampoTexto
          label="Preço"
          placeholder="Digite o preço do produto"
          valor={preco} 
          aoAlterado={setPreco}
        />
        <CheckboxEstado
          estado={estado}
          aoAlterado={setEstado}
        />
        <Botao>Criar Produto</Botao>
      </form>
      {erro && (
        <ModalErro
          mensagem="Os campos nome e preço são obrigatórios!"
          aoFechar={fecharModal}
        />
      )}
    </section>
  );
};

export default Formulario;
