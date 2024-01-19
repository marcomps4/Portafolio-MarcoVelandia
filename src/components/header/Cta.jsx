import React from 'react';
import CV from '../../assets/hoja_de_vida.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Hablemos</a>
    </div>
  )
}

export default Cta