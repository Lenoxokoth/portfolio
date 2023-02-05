import './Email.css'

import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u2gryub', 'template_2xj8olk', form.current, 'bc6AX7Fnm1ZqOrQg4')

    e.target.reset()
  };
  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="name"></input>

            <label>Email</label>
            <input type="email"></input>

            <label>Subject</label>
            <input type="subject"></input>

            <label>Message</label>
            <textarea name='message' rows="6" placeholder='Type your message here'></textarea>

            <button className='btn'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Email
