import React, { useEffect, useState } from "react";
import "../css/Portada4.css";
import red3 from "../assets/saneamiento1.jpg";
import red2 from "../assets/topo2.jpeg";
import red1 from "../assets/televisiva12.jpg";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap


import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
export const Portada = () => {
  return (
    <div>
    <Carousel className="grupo">
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red1} alt="First slide" />
        <Carousel.Caption>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>INSPECCION TELEVISIVA</Card.Title>
              <Card.Link className=" links" href="/tele">
              <Card.Text>
              Ofrecemos diagnósticos en redes con inspección de sistemas CCTV, inspección de buzones, limpieza de redes con maquinaria especializada, extracción de muestras de tuberías y buzones para análisis detallado, y mediciones de caudal con dataloggers para el control preciso del flujo en colectores y sistemas de drenaje.
              </Card.Text></Card.Link>             
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red2} alt="Second slide" />
        <Carousel.Caption>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>TOPOGRAFIA</Card.Title>
        <Card.Link className=" links" href="/topografia">
        <Card.Text>
        Como pioneros en estos campos, ofrecemos una amplia gama de servicios, incluyendo levantamientos topográficos de alta precisión, datos geodésicos, certificación de puntos de control, levantamientos catastrales, representaciones precisas de proyectos post-construcción y mapas temáticos detallados.
        </Card.Text></Card.Link>
      </Card.Body>
    </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red3} alt="Third slide" />
        <Carousel.Caption>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>SANEAMIENTO AMBIENTAL</Card.Title>
        <Card.Link className=" links" href="/ambiental">
        <Card.Text>
        Con una amplia experiencia, ofrecemos servicios esenciales manteniendo entornos limpios, seguros y saludables, desinfectando instalaciones y construyendo fosas sépticas eficientes. 
        Nuestra larga trayectoria garantiza que las personas vivan y trabajen en espacios libres de contaminantes y riesgos para la salud.
        </Card.Text></Card.Link>
        
      </Card.Body>
    </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};
