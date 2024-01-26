import React from 'react'
import logo from "../assets/carro.jpg";
import "../css/Tele2.css"
export function Tele2() {
  return (
    <div className="two-columna2">
      <div className="columna2 image-columna2">
      <img src={logo} alt="Imagen" />
    </div>
    <div className="columna2 text-columna2">
      <h1><b>¿En qué consiste?</b></h1>
      <h2>
      Es una técnica esencial en topografía e ingeniería civil para evaluar redes de distribución de agua subterráneas. 
      Esta técnica implica la introducción de una cámara de video resistente al agua en las tuberías, permitiendo a los expertos inspeccionar visualmente el estado de las tuberías, 
      identificar daños, obstrucciones, grietas y otros problemas en tiempo real.</h2>
    </div>
  </div>
  )
}