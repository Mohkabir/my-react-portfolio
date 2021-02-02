import React from 'react';
import "./Contact.css";
import { Link } from "react-scroll";

function Contact() {

  const arrow = {
    fontSize: "17px",
    width: "35px",
    padding: "0.5em",
    borderRadius: "20px",
    backgroundColor: "red"
  }
  return (
    <div className="contact" id="contact">
     
        <Link
              to="home"
              smooth={true}
              duration={500}>
              <i className="fa fa-arrow-up" style={arrow}></i>
        </Link>
   
      <h2>CONTACT</h2>
      <h3>How can we help you ?</h3>
      <p className="info">kabirmohammed586686@gmail.com</p>
      <p className="info">+2348135123864</p>
      <a href="https://www.facebook.com/muhammedbest">
      <span className="fa fa-facebook"></span>
      </a>
      <a href="https://twitter.com/home">
      <span className="fa fa-twitter"></span>
      </a>
      <a href="https://github.com/Mohkabir">
      <span className="fa fa-github"></span>
      </a>
      <a href="https://kabirmohammed586686@gmail.com">
      <span className="fa fa-envelope"></span>
      </a>
    </div>
  );
}
export default Contact;
