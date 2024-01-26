import React from "react";
import "../css/Tele4.css";
import imagen5 from "../assets/tele1.jpg";
import caja from "../assets/tele2.jpg";
export function Tele4() {
  return (
    <div>
      <h1 id="nos-tec"><b>
      ¿Qué tecnología utilizamos?</b>
      </h1>
      <div className="two-columna4">
        <div className="columna4 text-columna4">
          <h1><b>FURGÓN LABORATORIO</b></h1>
          <ul className="tele4-list">
            <li>Fácil Movilidad</li> 
            <li>Equipamiento Completo</li> 
            <li>Control y Grabación en Tiempo Real</li>
          </ul>
          <h1><b>CÁMARAS DE TV NO ROBOTIZADAS</b></h1>
          <ul className="tele4-list">
          <li>Control Manual</li>
            <li>Flexibilidad</li>
            <li>Alta Resolución</li> 
          </ul>
          <h1><b>CÁMARAS DE TV ROBOTIZADAS</b></h1>
          
          <ul className="tele4-list">
            <li>  Control a Distancia</li> 
            <li>
            Grabación de Video en Tiempo Real</li> 
            <li>Movilidad</li>
          </ul>
          <h1><b>PERFILADOR LASER</b></h1>
          
          <ul className="tele4-list">
            <li>Mediciones Precisas</li> 
            <li>Cartografía Tridimensional</li> 
            <li>Detección de Obstrucciones</li>
          </ul>
        </div>
        <div className="columna4 image-columna4">
          <img src={imagen5} alt="Imagen" />
          <img src={caja} alt="Imagen" />
        </div>
      </div>
      <div>
        <h1 id="nos-tec"><b>¿Interesado en nuestra Inspección de Tuberías con cámaras TV?</b></h1>
        <h2 id="nos-tec2">En DNC CONSTRUCCIONES, utilizamos esta tecnología avanzada para garantizar inspecciones de tuberías de saneamiento precisas y completas, 
        lo que nos permite brindar a nuestros clientes informes detallados y soluciones efectivas para mantener sus sistemas de saneamiento en óptimas condiciones.</h2>
      </div>
    </div>
  );
}