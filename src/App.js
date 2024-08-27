import React, { useState } from "react";
import Formulario from "./components/Form/Form";
import Area from "./components/Area/Area";

function App() {
  const areas = [
    {
      nome: "Computadores",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Acessórios",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Impressoras",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Games",
      corPrimaria: "#B18CE8",
      corSecundaria: "#E1D0FB",
    },
    {
      nome: "Gadgets",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
  ];

  const [produtos, setProdutos] = useState([]);

  const addProduto = (prod) => {
    setProdutos([...produtos, prod]); // Adiciona o novo produto ao estado
  };

  return (
    <div>
      <Formulario 
        aoProdCadastrado={addProduto} 
      />
      {areas.map((area) => (
        <Area
          key={area.nome}
          nome={area.nome}
          corPrimaria={area.corPrimaria}
          corSecundaria={area.corSecundaria}
          produtos={produtos.filter((prod) => prod.secao === area.nome)} 
        />
      ))}
    </div>
  );
}

export default App;
