import React from "react";
import "../css/Ambiental1.css";
import ambiental1 from "../assets/sana2.jpg";
import ambiental2 from "../assets/sana.jpg";
export function Ambiental1() {
  return (
    <div>
      <h1 id="ambiental-titulo"><b>SANEAMIENTO AMBIENTAL</b></h1>

      <div className="two-ambiental">
        <div className="columna-ambiental">
          <h1 id="titulo-grande"><b>INSPECCIÓN, EVALUACIÓN Y CONTROL</b></h1>
          <h2>
            
            Valoramos la influencia de las comunidades en el 
            entorno y nos preocupamos por cuestiones como la contaminación del agua, la 
            propagación de enfermedades y la gestión de residuos. 
            
          </h2>
          
          <h1 id="titulo-grande"><b>¿QUÉ ENFOQUE ADOPTAMOS?</b></h1>
          <ul className="ambiental-list">
            <li><b>CONTROL DE PLAGAS</b></li>
            <h2>
              Mitigar el incremento de roedores e insectos, los cuales tienen el potencial de causar
              graves daños a la salud humana.
            </h2>
            <li><b>MANEJO DE AGUAS NEGRAS Y DESAGÜE</b></li>
            <h2>
              Reducir la aparición de enfermedades por el consumo de agua
              contaminada en casas y espacios públicos.
            </h2>
            <li><b>LIMPIEZA Y DESINFECCIÓN DE RESERVORIOS DE AGUA</b></li>
            <h2>Proceso de eliminar suciedad, sedimentos y organismos potencialmente dañinos.</h2>
          </ul>
        </div>
        <div id="image-ambiental">
          <img src={ambiental1} alt="Imagen" />
          <img src={ambiental2} alt="Imagen" />
         
        </div>
      </div>

      <div>
        <h1 id="ambiental-tec"><b>¿ESTÁS INTERESADO EN NUESTROS SERVICIOS DE SANEAMIENTO AMBIENTAL?</b></h1>
        <h2 id="ambiental-tec2">
        Si necesitas evaluar o mantener sistemas de saneamiento ambiental, desde la gestión de 
        aguas residuales hasta la preservación de ecosistemas naturales, 
        DNC CONSTRUCCIONES es tu socio experto.
        Confía en nosotros para garantizar la calidad del entorno natural y la salud 
        de las comunidades que lo rodean.
        </h2>
      </div>
    </div>
  );
}