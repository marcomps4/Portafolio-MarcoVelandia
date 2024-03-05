import React from 'react';
import './contact.css';
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbagjll', 'template_e1hor54', form.current, 'VkGvt6sCClqcAHzX-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h2>Contacto</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineMail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>mavelandiag74@gmail.com</h5>
            <a href='mailto:mavelandiag74@gmail.com' target='_blank'>Enviar mensaje</a>
          </article>

          <article className='contact__option'>
          <FaWhatsapp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <h5>(+57) 3102747554</h5>
            <a href='https://api.whatsapp.com/send?phone=573102747554' target='_blank'>Enviar mensaje</a>
          </article>
        </div>
        {/*fin de las opciones*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required />
          <input type="text" name='email' placeholder='Correo Electrónico' required />
          <textarea name="message" rows="7" placeholder='Mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact