import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';


function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Web Designer", "UI/UX Devloper"],
      typeSpeed: 200,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      // Clean up the Typed.js instance when the component unmounts
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi! I'm Tejesh Gudla</h1>
        <div className="change-text">
          <h2>I'm a <span className="auto-type" ref={el}></span></h2>
        </div>
        <p>
          I work to make a better web, one that is fast, easy to use,<br/>
          beautifull and accessable to all.
        </p>

        <div className="container">
          <a href="/Tejesh_07_2025.pdf" download className="btn btn1">Download CV</a>
          <a href="#contact" className="btn btn2">Hire Me!</a>
        </div>
        <div className="social-icons">
          {/* Replace old icon tags with new React-icons components */}
          <a href="https://www.facebook.com/tejesh.arya.5?mibextid=ZbWKwL"><BiLogoFacebook /></a>
          <a href="https://www.instagram.com/tejesh..arya_?igsh=NnJxaWEyM2Q0cnAz"><BiLogoInstagram /></a>
          <a href="https://www.linkedin.com/in/tejesh-gudla-527b81253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><BiLogoLinkedin /></a>
          <a href="https://github.com/TejeshArya"><BiLogoGithub /></a>
        </div>
      </div>

      <div className="design">
        <div className="circle"><img src="/Pic.jpg" alt="Tejesh" id="arya" /></div>
      </div>
    </section>
  );
}

export default Home;