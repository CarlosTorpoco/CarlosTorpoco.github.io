import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa'; 
import logo from '../assets/dnc.jpg';
import '../css/Navigation.css';

export function Navigation() {
  const numeroWhatsApp = '51989004323';
  const mensaje = 'Estimado, he visitado su página web y estoy interesado en obtener más información acerca de sus servicios. Agradecería su ayuda al respecto'; // Mensaje que se enviará al hacer clic en el enlace

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleFacebookClick = () => {
    openInNewTab('https://www.facebook.com/Dnc.construcciones/');
  };

  const handleInstagramClick = () => {
    openInNewTab('https://www.instagram.com/dnc_construcciones/');
  };

  const handleWhatsAppClick = () => {
    openInNewTab(urlWhatsApp);
  };

  const handleLinkedInClick = () => {
    openInNewTab('https://www.linkedin.com/in/dnc-construcciones-88b4372a2/');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave al principio de la página
  };

  return (
    <div>
      <nav className="nav">
        <div className="logo">
        <a href="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="social-icons">
          <span className="icon" onClick={handleFacebookClick}>
            <FaFacebook />
          </span>
          <span className="icon" onClick={handleInstagramClick}>
            <FaInstagram />
          </span>
          <span className="icon" onClick={handleWhatsAppClick}>
            <FaWhatsapp />
          </span>
          <span className="icon" onClick={handleLinkedInClick}>
            <FaLinkedin />
          </span>
        </div>
      </nav>
    </div>
  );
}
