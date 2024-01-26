import React, { useState } from "react";
import "../css/Uss.css";
export const Uss = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const renderProjects = () => {
    if (activeFilter === "all") {
      return (
        <div >
          <h5 id="innovacion">
            DNC CONSTRUCCIONES ofrece una diversidad de servicios que abarcan desde la topografía y geodesia para la identificación y análisis de terrenos, hasta la ingeniería civil y geotécnica para el diseño y construcción de infraestructuras sólidas. La integración de estas disciplinas permite un enfoque holístico en la planificación, ejecución y supervisión de proyectos, asegurando una gestión integral desde la concepción hasta la implementación.
          </h5>
        </div>
      );
    } else if (activeFilter === "repairs") {
      return (
        <div>
          <h5 id="innovacion">
            DNC CONSTRUCCIONES se destaca por su capacidad de ejecutar proyectos con eficiencia y rapidez. Esto se logra a través de la utilización de metodologías de gestión de proyectos avanzadas, una asignación efectiva de recursos, y la aplicación de tecnología de vanguardia para el monitoreo y seguimiento en tiempo real. 
            La rapidez y la efectividad son medidas clave en cada fase del proyecto, desde la planificación hasta la entrega.
          </h5>
        </div>
      );
    } else {
      return (
        <div>
          <h5 id="innovacion">            
            DNC CONSTRUCCIONES se distingue por su eficiencia en la ejecución de proyectos, lograda a través de avanzadas metodologías de gestión de proyectos, asignación óptima de recursos y tecnología de vanguardia para seguimiento en tiempo real. 
            La rapidez y efectividad son valores clave en todas las etapas del proyecto, desde la planificación hasta la entrega. 
            Contamos con equipos tecnológicamente avanzados, lo que nos permite realizar diversas acciones y servicios de manera eficiente, reduciendo las molestias para el cliente y priorizando la solución de problemas en las redes de saneamiento. 
          </h5>
        </div>
      );
    }
  };

  return (
    <div className="sanitaria">
     
        <div className="sani" id="sani">
          <h3 id="eligen"></h3>
          <h4 id="pioneros"> PIONEROS EN LA INDUSTRIA SANITARIA</h4>
          <div className="filter-buttons">
            {
              <button id="boton1"
                className={activeFilter === "all" ? "active" : ""}
                onClick={() => handleFilterClick("all")}
              >
                SERVICIO INTEGRAL
              </button>
            }
            <br></br>
            {
              <button id="boton2"
                className={activeFilter === "remodeling" ? "active" : ""}
                onClick={() => handleFilterClick("remodeling")}
              >
                RAPIDEZ Y EFECTIVIDAD
              </button>
            }
            {
              <button id="boton3"
                className={activeFilter === "repairs" ? "active" : ""}
                onClick={() => handleFilterClick("repairs")}
              >
               INNOVACION
              </button>
            }
          </div>
          {renderProjects()}
        </div>
    </div>
  );
};
