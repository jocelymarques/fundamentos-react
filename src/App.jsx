import "./App.css";
import React from "react";

import Primeiro from "./componentes/Primeiro";
import ComParamento from "./componentes/ComParametro";
import ComFilhos from "./componentes/ComFilhos";
import Card from "./componentes/layout/Card";
import Repeticao from "./componentes/Repeticao";

export default (props) => (
  <div className="App">
    <Card titulo="#04 - Repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="#03 - Componente com filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02 - Componente com paramentros">
      <ComParamento
        titulo="Esse é o Titulos"
        subtitulo="Esse é o Subtitulo"
      ></ComParamento>
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
