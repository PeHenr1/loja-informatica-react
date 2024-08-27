// Formulario.js
import React, { useState } from "react";  
import "./Form.css";
import CampoTexto from "../TextField/TextField";
import ListaSuspensaSecao from "../ListaSuspensaSecao/ListaSuspensaSecao";
import ListaSuspensaMarca from "../ListaSuspensaMarca/ListaSuspensaMarca";
import CheckboxEstado from "../CheckboxEstado/CheckboxEstado";
import Botao from "../Botao/Botao";
import ModalErro from "../ModalErro/ModalErro"; // Importa o componente do modal

const Formulario = ({ aoProdCadastrado }) => {
  const secoes = ["Computadores","Acessórios","Impressoras","Games","Gadgets"];
  const marcas = ["HP","Dell","Positivo","Asus","Xing Ling"];

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estado, setEstado] = useState("Novo");
  const [secao, setSecao] = useState("Computadores");
  const [marca, setMarca] = useState("Positivo");
  const [erro, setErro] = useState(false); // Controla o estado do modal de erro

  const aoSalvar = (evento) => {
    evento.preventDefault();

    // Validação
    if (nome.trim() === "" || preco.trim() === "") {
      setErro(true); // Exibe o modal de erro
      return;
    }

    // Limpar a mensagem de erro
    setErro(false);

    aoProdCadastrado({
      nome,
      preco,
      estado,
      secao,
      marca,
    });

    // Limpar os campos após o cadastro
    setNome("");
    setPreco("");
    setEstado("Novo");
    setSecao("Computadores");
    setMarca("Positivo");
  };
  
  const fecharModal = () => {
    setErro(false); // Fecha o modal de erro
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do produto:</h2>
        <ListaSuspensaSecao
          label="Seção"
          itens={secoes}
          aoAlterado={setSecao}
        />
        <ListaSuspensaMarca
          label="Marca"
          itens={marcas}
          aoAlterado={setMarca}
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
