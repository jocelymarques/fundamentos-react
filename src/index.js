import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./componentes/Primeiro";
import ComParamento from "./componentes/ComParametro";

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParamento titulo="Esse Titulos" subtitulo="esse Subtitulo"></ComParamento>
  </div>,
  document.getElementById("root")
);
