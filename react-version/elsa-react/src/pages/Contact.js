import React from 'react';
import {
  container,
  banner,
  form_heading,
  contact_form,
  input_container,
  send_message,
} from "../styles/contact.module.scss";


function Signup() {
    return (
        <div className={container}>
            <div className={banner}>
            </div>
         
            <div className={contact_form}>
            <form >
            <p className={form_heading}>Send us a message</p>

           
            <div className={input_container}>
              <label htmlFor="name">Name</label>
              <input type="text"  id="name" required />
            </div>

            <div className={input_container}>
              <label htmlFor="email" >Email</label>
              <input type="text" id="email" required />
            </div>

            <div className={input_container}>
              <label htmlFor="message">message</label>
              <input type="text" id="message" />
            </div>

            <button className={send_message}>
              Submit
            </button>

          </form>
            </div>
        </div>
    )
}

export default Signup
