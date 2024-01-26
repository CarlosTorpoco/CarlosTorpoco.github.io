import React from "react";
import "../css/Proyect.css";
import foto1 from "../assets/1.jpg"
import foto2 from "../assets/2.gif"
import foto3 from "../assets/3.jpg"
import foto4 from "../assets/4.png"
import foto5 from "../assets/5.jpg"
import foto6 from "../assets/6.jpg"
import foto7 from "../assets/7.jpg"
import foto8 from "../assets/8.jpeg";
import foto9 from "../assets/9.jpg"
import foto10 from "../assets/10.webp"
import foto11 from "../assets/11.jpg"
import { Container } from "react-bootstrap";

export const Proyect = () => {
  const cardsData = [
    { id: 1, image: foto1, text: "ACCIONA AGUA S.A.", description: "Mantenimiento Preventivo de Colectores de Alcantarillado" },
    { id: 2, image: foto2, text: "CONTRALORIA GENERAL DE LA REPUBLICA", description: "Mejoramiento de los Sistemas de Agua Potable y Alcantarillado" },
    { id: 3, image: foto3, text: "CONTRALORIA GENERAL DE LA REPUBLICA", description: "Sectorización del sistema de Agua Potable y Alcantarillado" },
    { id: 4, image: foto4, text: "CABO VERDE S.A", description: "Inspección Televisiva y Diagnostico en las tuberías de HDPE de 630 mm – 1200 mm" },
    { id: 5, image: foto5, text: "CONSORCIO SANEAMIENTO LIMA NORTE LOTE 03", description: "Limpieza de Colectores con Maquina de balde, Inspección Televisiva y Diagnostico" },
    { id: 6, image: foto6, text: "CONSORCIO LIMA NORTE LOTE 2", description: " Limpieza y Mantenimiento con máquinade balde tipo arrastre para red de alcantarillado" },
    { id: 7, image: foto7, text: "CONSORCIO JULIACA", description: "Limpieza de colectores con Maquina de Balde e Inspección Televisiva de Redes para Diagnostico del Expediente" },
    { id: 8, image: foto8, text: "GITEC CONSULT GMBH", description: "Limpieza de Colectores con maquina e Inspección Televisiva para Diagnostico de redes del Expediente" },
    { id: 9, image: foto9, text: "CONSORCIO PUCALLPA", description: "Limpieza de Colectores con maquina e Inspección Televisiva para Diagnostico de redes del Expediente" },
    { id: 10, image: foto10, text: "CADUCEO", description: "Limpieza de Colectores con máquina de balde hidráulica e Inspección Televisiva para Diagnostico de redes de alcantarillado" },
    { id: 11, image: foto11, text: "TECNICAS Y PROYECTOS S.A", description: "Inspección Televisiva para Diagnostico de redes de Agua Potable y Alcantarillado" },
  ];

  return (
    <Container>
      <h1 className="proyectos-title">Proyectos Realizados</h1>
      <div className="cardp-grid">
        {cardsData.map((card) => (
          <div className="cardp" key={card.id}>
            <div className="image-container">
              <img src={card.image} alt={`Imagen ${card.id}`} />
              <div className="text-overlay">
                <h2 className="project-title">{card.text}</h2>
                <p className="project-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
