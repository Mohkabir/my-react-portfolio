import React,{useState} from 'react';
import { Link } from "react-scroll";
import './Header.css';


 function Header() {
   const[menubar, setMenubar]= useState(false);

  const handleMenu = () =>{
    setMenubar(!menubar);
   };

  const menu = menubar ? "fa fa-close":"fa fa-bars";

  const nav = menubar ? "navclose":"";
  

  return (
    <header id="home">
      <div>
        <p>Hello i am <span className="name">Mohammed kabir</span></p>
        <p>Frontend Web Developer</p>
        <Link 
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}>
            <div className="view">view my work</div>
        </Link>
      </div>
      <i className={menu}  onClick={handleMenu} id='menu'></i>
      <nav className={nav}>
      <ul>
        <li>
          <Link 
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500} >Home
          </Link>
        </li>

        <li>
          <Link 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500} >About
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500} >Portfolio
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500} >Contact
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  );
}
export default Header;
