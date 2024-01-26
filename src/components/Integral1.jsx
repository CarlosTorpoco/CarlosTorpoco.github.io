import React from "react";
import ambiental1 from "../assets/manejo1.jpg";
import ambiental2 from "../assets/integral2.jpg";

export function Integral1() {
  return (
    <div>
        <h1 id="ambiental-titulo"><b>MANEJO DE INTEGRAL DE REDES</b></h1>
        <h2 id="sub">
          En DNC CONSTRUCCIONES, comprendemos la importancia de un suministro 
          de agua confiable y un sistema de alcantarillado eficiente. 
          Nuestros servicios abarcan soluciones 
          que garantizan la calidad, la seguridad y la eficiencia en 
          la distribución y gestión del agua.
        </h2>
        <div className="two-ambiental">
          <div className="columna-ambiental">
            <h1><b>NUESTROS SERVICIOS</b></h1>
        <ul className="ambiental-list">
          <li><b>INSTALACIÓN, MANTENIMIENTO Y REPARACIÓN</b></li>
          <h2>
          Nos aseguramos de que estas redes estén en óptimas condiciones, 
          evitando pérdidas y asegurando un flujo constante.
          </h2>
          <li><b>REDES COMPLEMENTARIAS</b></li>
          <h2>
          Diseñamos sistemas de agua y alcantarillado adaptados a las necesidades específicas de edificios multifamiliares.
          </h2>
          <li><b>LIMPIEZA DE CONEXIONES DE DESAGÜE</b></li>
          <h2>Mantenemos las conexiones limpias, evitando obstrucciones y bloqueos.</h2>
          <li><b>MENTENIMIENTO PREVENTIVO Y CORRECTIVO</b></li>
          <h2>Realizamos inspecciones regulares y mantenimiento para evitar problemas costosos y garantizar un funcionamiento óptimo.</h2>
        </ul>
          </div>
          <div className="image-ambiental">
            {/* Mostrar cuatro imágenes en la vista normal */}
            {[ambiental1, ambiental2].map((image, index) => (
              <img
                key={index}
                className={index > 0 ? 'hidden-mobile' : ''}
                src={image}
                alt={`Imagen ${index}`}
              />
            ))}
            </div>
            {/* Mostrar una imagen en dispositivos móviles */}
            <img className="mobile-image" src={ambiental2} alt="Imagen móvil" />
        
        </div>
        <div>
          <h1 id="ambiental-tec"><b>¿ESTÁS INTERESADO EN NUESTROS SERVICIOS DE MANEJO INTEGRAL DE REDES?</b></h1>
          <h2 id="ambiental-tec2">
            En DNC CONSTRUCCIONES, garantizamos que las 
            comunidades tengan acceso a agua de calidad y sistemas de alcantarillado 
            eficientes. Con nuestra experiencia y enfoque, trabajamos incansablemente 
            para asegurarnos de que su suministro de agua sea una fuente de tranquilidad, 
            calidad y eficiencia.
          </h2>
        </div>
    </div>
  );
}

