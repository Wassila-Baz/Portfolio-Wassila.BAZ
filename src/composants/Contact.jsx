// ContactForm.jsx
import React, { useState } from 'react';
import "../styles/Contact.scss"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer le formulaire
    console.log('Formulaire soumis avec les données :', formData);
    // Réinitialisez le formulaire après l'envoi
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message :
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
