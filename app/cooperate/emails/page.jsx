"use client"
import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();   

    emailjs.sendForm('service_tmjdpv8', 'template_jeu6cvk', e.target, 'TSLBj5UqMbKmMKSe2')
      .then((result) => {
          window.location.reload()  
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <label htmlFor=""> to name</label>
      <input type="text" name="to_name" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="to_email" />
      <label>Subject</label>
      <input type="text" name="message" />
      <label>Message</label>
      <textarea name="html_message" />
      <input type="submit" value="Send" />
    </form>
  );
}