import emailjs from 'emailjs-com';

const EmailForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Substitua pelo ID do serviço
        'YOUR_TEMPLATE_ID', // Substitua pelo ID do template
        e.currentTarget,
        'YOUR_USER_ID' // Substitua pelo ID do usuário
      )
      .then(
        (result) => {
          console.log('E-mail enviado:', result.text);
        },
        (error) => {
          console.error('Erro ao enviar e-mail:', error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Seu Nome" required />
      <input type="email" name="email" placeholder="Seu E-mail" required />
      <textarea name="message" placeholder="Sua Mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default EmailForm;

import React from 'react';

export const Contato = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Entre em Contato</h2>
        <EmailForm />
      </div>
    </section>
  );
};