import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css";
import empresas1 from "../assets/sedapal.jpeg";
import empresas2 from "../assets/contraloria.jpeg";
import empresas3 from "../assets/ministerio.jpeg";
import empresas4 from "../assets/gitec.jpeg";
import empresas5 from "../assets/acciona.jpeg";
import empresas6 from "../assets/caboverde.jpeg";

export const Empresas = () => {
  return (
    <div className="empresas">
      <h1>NUESTROS CLIENTES</h1>
      <h5 id="innovacion">
        Hemos tenido el privilegio de servir a organizaciones destacadas como ACCIONA AGUA, 
        CONTRALORÍA GENERAL DE LA REPÚBLICA, SEDAPAL, y muchas más. Nuestra capacidad para realizar inspecciones, diagnósticos, limpiezas 
        y mantenimiento en sistemas de alcantarillado, agua potable y obras de gran envergadura 
        ha resultado en una satisfacción constante de nuestros clientes, quienes han confiado en 
        nuestra experiencia técnica y en la eficiencia de nuestras operaciones. Estos proyectos 
        son testimonio de nuestra habilidad para resolver desafíos y contribuir al éxito de nuestros 
        clientes.
      </h5>
      <div className="carousel-container-mobile">
        {/* Carousel para vista móvil */}
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={2000}
          stopOnHover={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          renderThumbsHidden={() => null}
          renderIndicator={() => null}
          axis="horizontal"
        >
          {/* Imágenes aquí */}
          <div>
            <img src={empresas1} alt="Imagen1" />
          </div>
          <div>
            <img src={empresas2} alt="Imagen2" />
          </div>
          <div>
            <img src={empresas3} alt="Imagen3" />
          </div>
          <div>
            <img src={empresas4} alt="Imagen4" />
          </div>
          <div>
            <img src={empresas5} alt="Imagen5" />
          </div>
          <div>
            <img src={empresas6} alt="Imagen6" />
          </div>
        </Carousel>
      </div>
      <div className="carousel-container-desktop">
      <Carousel
          showArrows={true}
          autoPlay={true}
          interval={2000}
          stopOnHover={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          renderThumbsHidden={() => null}
          renderIndicator={() => null}
          axis="horizontal"
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={empresas1} alt="Imagen1" />
            <img src={empresas2} alt="Imagen2" />
            <img src={empresas3} alt="Imagen3" />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={empresas4} alt="Imagen4" />
            <img src={empresas5} alt="Imagen5" />
            <img src={empresas6} alt="Imagen6" />
          </div>
        </Carousel>
        </div>
    </div>
  );
};
