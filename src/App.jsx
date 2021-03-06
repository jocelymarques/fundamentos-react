import "./App.css";
import React from "react";

import Primeiro from "./componentes/basicos/Primeiro";
import ComParamento from "./componentes/basicos/ComParametro";
import ComFilhos from "./componentes/basicos/ComFilhos";
import Card from "./componentes/layout/Card";
import Repeticao from "./componentes/basicos/Repeticao";
import Condicional from "./componentes/basicos/Condicional";
import CondicionalComIf from "./componentes/basicos/CondicionalComIf";

export default (props) => (
  <div className="App">
    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={4}></CondicionalComIf>
    </Card>

    <Card titulo="#05 - Condicional v1">
      <Condicional numero={5}></Condicional>
    </Card>

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
