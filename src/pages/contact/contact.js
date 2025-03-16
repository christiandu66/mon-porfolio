import React, { useEffect } from 'react';
import './contact.css';

const Contact = () => {


    useEffect(() => {
        document.body.id = 'contact';
        return () => {
          document.body.id = '';
        };
      }, []);


  return (
    <div className="contact-container">
      <h1> Contactez - moi </h1>{' '}
      <div className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name"> Nom </label>{' '}
            <input type="text" id="name" name="name" required />
          </div>{' '}
          <div className="form-group">
            <label htmlFor="email"> Email </label>{' '}
            <input type="email" id="email" name="email" required />
          </div>{' '}
          <div className="form-group">
            <label htmlFor="message"> Message </label>{' '}
            <textarea id="message" name="message" rows="5" required>
              {' '}
            </textarea>{' '}
          </div>{' '}
          <button type="submit" className="submit-button">
            {' '}
            Envoyer{' '}
          </button>{' '}
        </form>{' '}
        <div className="contact-info">
          <h2> Informations de contact </h2>{' '}
          <p>
            {' '}
            N 'hésitez pas à me contacter pour toute question ou proposition de
            collaboration.{' '}
          </p>{' '}
          <div className="contact-details">
            <p> 📧email @example.com </p> <p> 📱+33(0) 6 XX XX XX XX </p>{' '}
            <p> 📍Paris, France </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default Contact;
