"use client"
import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c3iq1oc', 'template_reie92s', e.target, 'Fi7oH5GBkC4xZCefW')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>From Email</label>
      <input type="email" name="from_email" required />

      <label>Email</label>
      <input type="email" name="to_email" required />

      <label>Message</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
