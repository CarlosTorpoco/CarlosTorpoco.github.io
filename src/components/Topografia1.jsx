import React from "react";
import topografia1 from "../assets/topografia1.jpg";
import dron1 from "../assets/fotogrametria1.jpg";
import dron2 from "../assets/rectificacion.jpg";
import dron3 from "../assets/gestion.jpg";

export function Topografia1() {
  return (
    <div>
      <h1 id="topografia1-titulo"><b>SERVICIOS TOPOGRAFICOS</b></h1>
      <h2 id="topografia1-tec3">
        En DNC CONSTRUCCIONES, nuestro equipo de expertos se dedica a ofrecer servicios topográficos avanzados que utilizan tecnología de vanguardia. 
        Nuestra empresa se compromete a proporcionar soluciones de alta calidad a nivel nacional e internacional, 
        aprovechando el vasto conocimiento y experiencia de nuestros profesionales en la ejecución de proyectos. 
        
      </h2>
      <div className="two-topografia1">
        <div className="columna-topografia1">
          <h1><b>FOTOGRAMETRÍA CON DRONES </b></h1>
          <h2>
            Los drones pueden utilizarse para realizar levantamientos
            topográficos de grandes áreas, recogiendo fotografías
            digitales, con puntos de control marcados en el suelo y coordinados.
          </h2>
          <ul className="lista2">
            <li>Reducir tiempo</li>
            <li>Enlace con puntos de control terrestres</li>
            <li>Mayor seguridad</li>
            <li>Accesibilidad</li>
          </ul>
        </div>
        <div className="image-topografia1">
          <img className="imagen" src={dron1} alt="Imagen" />
        </div>
      </div>
      <div className="two-topografia1">
      <div className="image-topografia1">
          <img className="imagen2" src={dron2} alt="Imagen" />
        </div>
        <div className="columna-topografia1">
          <h1><b>RECTIFICACIONES CATASTRALES </b></h1>
          <h2>
          Trabajamos para corregir y 
          actualizar la información catastral de propiedades, 
          garantizando registros precisos y legales. 
          </h2>
          <ul className="lista2">
            <li>Corrección de Errores</li>
            <li>Legalidad y Conformidad</li>
            <li>Protección de Propietarios</li>
            <li>Actualización Precisa</li>
          </ul>
        </div>
      </div>
      <div className="two-topografia1">
        <div className="columna-topografia1">
          <h1><b>GESTIÓN DE TERRENOS </b></h1>
          <h2>
          Ofrecemos un enfoque integral para administrar, desarrollar y optimizar terrenos, brindando 
          soluciones personalizadas para maximizar el valor y el potencial de cada propiedad.
          </h2>
          <ul className="lista2">
            <li>Maximización del Valor del Terreno</li>
            <li>Cumplimiento de Regulaciones Locales</li>
            <li>Optimización del Uso del Suelo</li>
            <li>Estrategias Rentables para Desarrollo</li>
          </ul>
        </div>
        <div className="image-topografia1">
          <img className="imagen3" src={dron3} alt="Imagen" />
        </div>
      </div>
      
      <div>
        <h1 id="topografia1-tec"> <b>¿INTERESADO EN NUESTROS SERVICIOS TOPOGRÁFICOS?</b></h1>
        <h2 id="topografia1-tec2">
        DNC CONSTRUCCIONES
        ofrece una amplia gama de servicios especializados que garantizan la calidad del entorno natural 
        y protegen la salud de las comunidades circundantes. Confía en nuestro equipo de expertos, 
        respaldados por equipos de alta precisión, para brindarte soluciones integrales y precisas 
        en el campo de la topografía y el medio ambiente.
        </h2>
      </div>
    </div>
  );
}