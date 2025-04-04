import React from 'react';
import './portafolio.css';
import Img1 from '../../assets/portfolio1.jpg';
import Img2 from '../../assets/portfolio2.jpg';
import Img3 from '../../assets/portfolio3.jpg';
import Img4 from '../../assets/portfolio4.jpg';
import Img5 from '../../assets/portfolio5.jpg';

const Portafolio = () => {

  const data = [
    {
      id: 1,
      image: Img1,
      title: 'Sitio web Unihorizonte',
      github: 'https://github.com/marcomps4/Unihorizonte.git',
      demo: 'https://unihorizonte.vercel.app/'
    },
    {
      id: 2,
      image: Img2,
      title: 'Sitio web Activate',
      github: 'https://github.com/marcomps4/Activate.git',
      demo: 'https://activate-theta.vercel.app/'
    },
    {
      id: 3,
      image: Img3,
      title: 'Replica sitio Skandia',
      github: 'https://github.com/marcomps4/skandia.git',
      demo: 'https://skandia.vercel.app/'
    },
    {
      id: 4,
      image: Img4,
      title: 'Sitio web Activate 2024',
      github: 'https://github.com/marcomps4/activate2024.git',
      demo: 'https://activate2024.vercel.app/'
    },
    {
      id: 4,
      image: Img5,
      title: 'Felixfelicis',
      github: 'https://github.com/marcomps4/felixfelicis.git',
      demo: 'https://felixfelicis.vercel.app/'
    },
  ]
  return (
    <section id='portafolio'>
      <h2>Portafolio</h2>
      <div className='container portafolio__container'>
       {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id} className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portafolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
            </div>
          </article>
  
          )
        }
        )
       }
       

       

       
      </div>
    </section>
  )
}

export default Portafolio
