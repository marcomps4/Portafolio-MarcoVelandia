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
            <h3>UI/UX Design</h3>
          </div>
            <ul className='service__list'>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
        </article>
        {/*Fin Desarrollo Web*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Diseño e-lerarning</h3>
          </div>
            <ul className='service__list'>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
        </article>
        {/*Fin Desarrollo Web*/}
      </div>
    </section>
  )
}

export default Services