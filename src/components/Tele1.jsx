import React from "react";
import "../css/Tele1.css";
import logo from "../assets/televisiva4.jpg";
export function Tele1() {
  return (
    <div className="two-columna1">
      <div className="columna1 text-columna1">
        <h1><b>Inspeccion de tuberias con cámara de TV</b></h1>
        <h2>
        La inspección de tuberías con cámara de TV es una de las áreas de
        especialización de nuestra empresa. Nos enorgullece ser pioneros 
        en esta tecnología. Nuestra misión es proporcionar 
        soluciones innovadoras y precisas para evaluar y mantener la integridad 
        de las redes de tuberías de agua.
        </h2>
      </div>
      <div className="columna1 image-columna1">
        <img src={logo} alt="Imagen" />
      </div>
    </div>
  );
}