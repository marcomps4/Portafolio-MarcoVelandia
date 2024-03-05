import React from 'react';
import './services.css';
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id='services'>
      <h5></h5>
      <h2>Servicios</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI Design</h3>
          </div>
            <ul className='service__list'>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Optimización del estilo visual de sitios web.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Integrar elementos de diseño.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Utilizar habilidades y experiencia para mejorar el proceso de usuario.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Crear la interacción óptima con el cliente desde la navegación.</p>
              </li>
            </ul>
        </article>
        {/*Fin UI/UX*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Desarrollo Web</h3>
          </div>
            <ul className='service__list'>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Construir páginas web y aplicaciones móviles.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Definir la interfaz gráfica.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Escribir códigos para el sitio web.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Integrar gráficos, audios y videos en el sitio web.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Solucionar los problemas del sitio web.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Programar las aplicaciones de un sitio web.</p>
              </li>
            </ul>
        </article>
        {/*Fin Desarrollo Web*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Diseño e-learning</h3>
          </div>
            <ul className='service__list'>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Edición de videos y audio para material educativo.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Manejo de plataforma Lms Moodle.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Creación de contenido interactivo con H5P.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Diseño de pdf creativos con Illustrator.</p>
              </li>
              
            </ul>
        </article>
        {/*Fin Desarrollo Web*/}
      </div>
    </section>
  )
}

export default Services