import React, { useEffect } from 'react';
import './contact.css';

const Contact = () => {
  useEffect(() => {
    document.body.id = 'contact';
    return () => {
      document.body.id = '';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    console.log('Données du formulaire:', data);
    // Ici vous pouvez ajouter la logique pour envoyer les données
    e.target.reset();
  };

  return (
    <main className="contact-page">
      <h1>Contactez-moi</h1>
      <div className="contact-grid">
        <section className="contact-form">
          <h2>Contactez-moi</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Votre message..."
                required
              ></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </section>

        <section className="contact-details">
          <h2>Mes Coordonnées</h2>
          <div className="details-content">
            <p>Christian Caron</p>
            <p>26 rue des templiers</p>
            <p>75000 Paris</p>
            <p>Téléphone : 06-79-24-32-25</p>
            <p>Email : requindudev@gmail.com</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
