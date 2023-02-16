import React from "react";
import { useRef } from "react";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

import './Contact.scss';
import { TextField } from "@mui/material";



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cyt1sgt', 'template_gcbv758', form.current, 'T2Pp5WbueR34C7-R8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent an email!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };



    return (
      <section id="contact">
        <div className='container'>
          <div className="contact">
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} className='vertAlign'>
                <TextField
                  id="outlined-name-input"
                  label="Name"
                  type="text"
                  size="small"
                  variant="filled"
                  name="name"
                  className=''
                />
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  name="email"
                  className=''
                />
                <TextField
                  id="outlined-password-input"
                  label="Message"
                  type="textarea"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  className=''
                />
                <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                  <div component='span'> Send Message</div>
                </button>
              </form>
            </div>
            <h1 className="contact_msg">
              <div>"Let's connect. Feel free to send a message."</div>
            </h1>
          </div>
        </div>
      </section>
  );
};

export default Contact;