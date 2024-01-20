import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Marco Velandia</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre mi</a></li>
        <li><a href='#experience'>Mi Experiencia</a></li>
        <li><a href='#services'>Servicios</a></li>
        <li><a href='#portafolio'>Portafolio</a></li>
        <li><a href='#testimonials'>Testimonios</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>
     
      <div className="footer__copyright">
        <small>&copy; Marco Velandia Todos los derechos reservados 2024 </small>
      </div>
    </footer>
  )
}

export default Footer