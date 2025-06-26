import { Container, Card } from "react-bootstrap";
import React, { useEffect, useRef, useState } from 'react';
import { FaPhone, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLine } from "react-icons/si";
import './css/Contact.css';

function Contact() {
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setAnimate(entry.isIntersecting);
    }, { threshold: 0.5 });
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section-contact py-10">
      <Container className="section-container">
        <h1 ref={titleRef} className={`contact-title ${animate ? 'animate' : ''}`}>
          Contact
        </h1>

        {/* Cards Row */}
        <div className="contact-card-row">
          <Card className="contact-card">
            <FaPhone size={28} color="#25aef0" />
            <div className="contact-card-title">PHONE</div>
            <hr />
            <div className="contact-card-info">0968-668-152</div>
          </Card>

          <Card className="contact-card">
            <MdEmail size={28} color="#D44638" />
            <div className="contact-card-title">EMAIL</div>
            <hr />
            <div className="contact-card-info">seanwen2121@gmail.com</div>
          </Card>

          <Card className="contact-card">
            <SiLine size={28} color="#00c300" />
            <div className="contact-card-title">LINE</div>
            <hr />
            <div className="contact-card-info">ID: seanwen56</div>
          </Card>
        </div>

        {/* Social icons row */}
        <div className="social-icons-row">
          <a href="https://www.facebook.com/wen.shao.xiang.372994?locale=zh_TW" target="_blank" rel="noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/_xiang_2112/" target="_blank" rel="noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://github.com/Wen-Sean" target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
