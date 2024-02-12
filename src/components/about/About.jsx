import React from 'react';
import './about.css';
import ME from '../../assets/me-about-1.jpg';
import { LiaAwardSolid } from "react-icons/lia";
import { TbUsersPlus } from "react-icons/tb";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <LiaAwardSolid className='about__icon'/>
              <h5>Experiencia</h5>
              <small><strong>1 Año</strong></small>
            </article>

            <article className='about__card'>
              <TbUsersPlus className='about__icon'/>
              <h5>Clientes</h5>
              <small><strong>+10</strong></small>
            </article>

            <article className='about__card'>
              <VscFolderActive className='about__icon'/>
              <h5>Proyectos</h5>
              <small><strong>3</strong></small>
            </article>
          </div>
          <p>
          Productor Multimedia, con experiencia en creación de páginas web y generar contenidos e-learning para instituciones universitarias. Conocimientos sólidos en html5, css3, Bootstrap, habilidades en Javascript, React, Phothoshop, After Effects y premier pro.
          </p>
          <p>
          Gran sentido de responsabilidad, comprometido, con excelentes relaciones interpersonales, fácil adaptación para trabajar en equipo, capacidad creativa e innovadora.
          </p>

          <a href='#contact' className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About