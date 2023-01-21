import React, { useRef,useEffect } from "react";
import "./contact.css";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


const Contact = () => {
  const formRef = useRef(null);
 
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
   
    gsap.to(formRef.current, {  opacity: 0 });

    const t = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "20% center",
      },
    });


   

    t.to(formRef.current, { opacity: 1});
  }, []);

  return (
    <div className="contact-wrapper" ref={containerRef}>
      <div className="contact" ref={formRef}>
        <h2 className="contact-title">CONTACT US</h2>
        <form className="contact-form">
          <label className="contact-label">Name</label>
          <input type="text" name="user_name" className="contact-input" />
          <label className="contact-label">Email</label>
          <input type="email" name="user_email" className="contact-input" />
          <label className="contact-label">Message</label>
          <textarea name="message" className="contact-textarea" />
          <input type="submit" value="SUBMIT" className="contact-submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

// Styles
