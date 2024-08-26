import React, { useState } from "react";
import Form from "./components/Form/Form";
import Area from "./components/Area/Area";

function App() {
  const areas = [
    {
      nome: "Computadores",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Progr. Web",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Banco de Dados",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Diversos",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
  ];
  const ListaAreas = areas.map(area => area.nome)


  const [professores, setProfessores] = useState([]);

  const adicionaProf = (prof) => {
    const listaNova = professores.slice();
    listaNova.push(prof);
    setProfessores(listaNova);
  };

  return (
    <div>
      <Form areas={ListaAreas} aoProfCadastrado={(prof) => adicionaProf(prof)} />
      {areas.map(area => <Area key={area.nome} 
                               nome={area.nome} 
                               corPrimaria={area.corPrimaria}
                               corSecundaria={area.corSecundaria}
                               professores={professores.filter(prof => prof.area === area.nome)} />)}
    </div>
  );
}

export default App;
