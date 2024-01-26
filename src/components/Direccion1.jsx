import React from "react";
import "../css/Direccion1.css";

export function Direccion1() {
  return (
    <div className="contact-container">
      <div className="form-column">
        {/* Agregar el iframe del formulario de Google Forms a la izquierda */}
        <iframe src="https://forms.gle/W9cYru6uTVYHVHEf8"  width="860" height="950" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      </div>
      <div className="map-column">
        {/* Agregar el iframe del mapa de Google Maps a la derecha */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.6423138725163!2d-77.06550682579496!3d-11.999233541015832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf6a59ccb081%3A0x57730b28da49eeed!2sDELIMA%20NORTE%20CONSTRUCCIONES!5e0!3m2!1ses!2spe!4v1698070147515!5m2!1ses!2spe"
          width="100%"
          height="750"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
