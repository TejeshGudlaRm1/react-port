import React, { useState } from 'react';

function Contact() {
  const [msg, setMsg] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzK3v7ez_cidEgFC78IczwK1WvpjRV0U-JELDvKENEyDGkGYvNKSqjzhxyxcv5KtIec/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Display alert and send data
    alert('Your Message has been sent successfully!');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        setMsg("Thank You for your Message!");
        setTimeout(() => {
          setMsg("");
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <section className="contact" id="contact">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Get in Touch</h1>
          <p>
            <span className="contact-links">
              <a href="mailto:tejesharyagudla@gmail.com">Email</a>
            </span>
            <i className='bx bx-envelope'></i>: tejesharyagudla@gmail.com
          </p>
          <p>
            <span className="contact-links">
              <a href="tel:9160907215">Mob</a>
            </span>
            <i className='bx bxs-phone'></i>: +91-9160907215
          </p>
          <p>
            <span className="contact-links">
              <a href="https://www.google.com/maps/@17.6858915,83.242391,17.76z/data=!4m4!7m3!1m1!1s106329246967081920620!2e2?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D">Address</a>
            </span>
            <i className='bx bxs-map'></i>: 61-5-15, malkapuram, visakhapatnam<br />530011
          </p>
        </div>
        <div className="contact-right">
          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <input type="text" name="name" autoComplete="off" placeholder="Your Name" required />
            <input type="email" name="email" autoComplete="off" placeholder="Your Email" required />
            <input type="subject" name="subject" autoComplete="off" placeholder="Subject" required />
            <textarea name="message" rows="6" autoComplete="off" placeholder="Your Message"></textarea>
            <button className="btn3" type="submit">Send Message</button>
            <span id="msg">{msg}</span>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;