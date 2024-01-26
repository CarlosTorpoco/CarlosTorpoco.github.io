// import Container from "react-bootstrap/esm/Container"
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import logo1 from "../assets/ineg.jpg";

import React from "react";

export const Us = () => {
  return (
    <div className="nosotros">
      <Row>
        <Col md={6} className="order-md-1">
          <div className="column" id="nosotros">
            <h3 id="dnc">DNC CONSTRUCCIONES</h3>
            <p>
            Destacando la vasta experiencia y la excelencia en servicios que ofrecemos en el campo de la ingeniería civil y sanitaria.
            <br/>
            DNC se enorgullece de ser pioneros en una amplia gama de servicios, incluyendo la inspección televisiva, topografía, geodesia y fotogrametría de vanguardia, así como el saneamiento ambiental integral y el manejo completo de redes de agua potable y alcantarillado.
            Contamos con una trayectoria destacada en la ejecución de proyectos de envergadura para clientes de renombre como SEDAPAL, Contraloría General de la República, Ministerio de Vivienda, Construcción y Saneamiento y diversas entidades gubernamentales.
            </p>
          </div>
        </Col>
        <Col md={6} className="order-md-2">
          <div className="column">
            <img src={logo1} alt="Imagen de la segunda fila" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
