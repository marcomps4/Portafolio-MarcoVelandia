import React from 'react';
import './experience.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Mi Experiencia</h2>

      <div className='container experience__container'>
        <div className="experience__front">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <IoLogoHtml5 className="experience__details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Alto</small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoCss3 className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Medio</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Bajo</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiBootstrap className="experience__details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Medio</small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoReact className="experience__details-icon"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Medio</small>
              </div>
            </article>

          </div>
        </div>
        {/*Final front*/}

        <div className="experience__design">
          <h3>Diseño Digital</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiAdobexd className="experience__details-icon"/>
              <div>
              <h4>Xd</h4>
              <small className='text-light'>Medio</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAdobeillustrator className="experience__details-icon"/>
              <div>
              <h4>Illustrator</h4>
              <small className='text-light'>Medio</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAdobephotoshop className="experience__details-icon"/>
              <div>
              <h4>Photoshop</h4>
              <small className='text-light'>Medio</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAdobepremierepro className="experience__details-icon" />
              <div>
              <h4>Premiere</h4>
              <small className='text-light'>Medio</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAdobeaftereffects className="experience__details-icon"/>
              <div>
              <h4>After Effects</h4>
              <small className='text-light'>Medio</small>
              </div>
            </article>

          </div>

          

        </div>
      </div>
    </section>
  )
}

export default Experience