import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={12} className="footer-info">
            <h4><b>CONTACTO</b></h4>
            <p>Calle Isaac Newton 7109, Urb. Sol de Oro - Los Olivos - Lima</p>
            <p>telf: 989004323</p>
            <p>construccionesdnc@gmail.com</p>

            <div className="social-links pt-3">
              <a
                href="https://www.facebook.com/Dnc.construcciones"
                target="_blank"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/?lang=es"
                target="_blank"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/dnc_construcciones/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pe.linkedin.com/"
                target="_blank"
                className="social-icon"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          <Col md={4} sm={12} className="footer-links">
            <h4><b>SERVICIOS</b></h4>
            <p>MANEJO DE INTEGRAL DE REDES</p>
            <p>INSPECCIÓN TELEVISIVA</p>
            <p>SANEAMIENTO AMBIENTAL</p>
            <p>TOPOGRAFÍA, GEODESIA y FOTOGRAMETRÍA</p>
          </Col>

          <Col md={4} sm={12} className="footer-contact">
            <h4><b>DNC CONSTRUCCIONES</b></h4>
            <p className="text-center">
              Es una empresa comprometida con el desarrollo ético y sostenible de su actividad principal: Consultoría y Construcción
            </p>
          </Col>
        </Row>
      </Container>

      <div className="container py-1">
        <div className="text-center">
          <p className="company-name text-center">© DNC CONSTRUCCIONES</p>
        </div>
      </div>
    </footer>
  );
};
