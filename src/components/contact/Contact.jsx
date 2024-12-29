import { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_quyi1ge', 'template_w71vhvo', form.current, {
        publicKey: '5C7Ptgyj7F94AE8un',
      })
      .then(
        () => {
          alert("SUCCESS")
          form.current.reset();
        },
        (error) => {
          alert("FAILED...")
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contact container'>
      <div className="mainTitle">contact us</div>
      <form  ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="mail" name="email" placeholder='Your Email' required />
        <textarea name="massage" rows="7" placeholder='Your Massage' required></textarea>
        <button type='submit' className='btn'>Sned Massage</button>
      </form>
    </div>
  )
}

export default Contact