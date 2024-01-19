import React from 'react';
import './header.css';
import CTA from './Cta';
import ME from '../../assets/me.png';
import HeaderRedes from './HeaderRedes'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola Mi nomnbre es</h5>
        <h1>Marco Velandia</h1>
        <h5 className="text-light">Diseñador Web</h5>
        <CTA/>
        <HeaderRedes/>
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header