import React from "react";
import red1 from "../assets/televisiva12.jpg";
import red3 from "../assets/manejo-int.jpg";
export function Destacados() {
  return (
    <div>
      <div className="eligen">
        <h1>SERVICIOS DESTACADOS</h1>
      </div>
      <div className="card-group">
        <div className="card">
          <a href="/tele">
            <img src={red1} alt="Tarjeta 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-titlem">INSPECCION TELEVISIVA</h3>
              <p className="card-description">
              Realizamos diagnósticos en redes 
              con inspección de sistemas de circuito cerrado de televisión (CCTV),
              la inspección de buzones y la limpieza de redes utilizando maquinaria 
              especializada de balde. También llevamos a cabo la extracción de 
              muestras de tuberías y buzones, permitiendo un análisis detallado 
              de la calidad y el estado de las infraestructuras. Realizamos 
              mediciones de caudal con dataloggers, permitiendo un control preciso 
              del flujo en colectores y el correcto funcionamiento de los sistemas 
              de drenaje.
              </p>
            </div>
          </a>
        </div>

        <div className="card">
        <a href="/integral">
          <img src={red3} alt="Tarjeta 2" className="card-image" />
          <div className="card-content">
            
              <h3 className="card-titlem">MANEJO DE INTEGRAL DE REDES</h3>
           
            <p className="card-description">
            Nos enfocamos en soluciones completas para garantizar la calidad, 
            seguridad y eficiencia, ofreciendo instalación, mantenimiento y reparación de 
            redes secundarias, implementación de redes complementarias para edificaciones 
            multifamiliares, limpieza de conexiones de desagüe y mantenimiento 
            tanto preventivo como correctivo. Esencialmente, se trata de un enfoque 
            holístico que abarca desde la instalación hasta el mantenimiento para 
            asegurar un suministro confiable y un sistema eficiente de alcantarillado.
            </p>
          </div>
          </a>
        </div> 
      </div>
    </div>
  );
}
