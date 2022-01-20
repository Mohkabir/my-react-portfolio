import React from 'react';
import "./Portfolio.css";
import thumb from "../../images/thumb.jpg";
import thumb1 from "../../images/thumb1.jpg";
import thumb2 from "../../images/thumb2.jpg";
import thumb3 from "../../images/thumb3.jpg";
import thumb4 from "../../images/hr-react.png";
import thumb5 from "../../images/hr-html1.png";
import thumb6 from "../../images/movie-list.jpg";
import thumb7 from "../../images/mern.jpg";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="img_container">
        <img src={thumb4} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/hr-react1/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/hr-react1">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={thumb5} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/hr-outsourcing-app1/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/hr-outsourcing-app1">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={thumb6} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/movie-list/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/movie-list">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={thumb7} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://projecttwo.mohkabir.xyz/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/memory-app-client">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={thumb} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge3/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge3">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={thumb1} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge4/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge4">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={thumb3} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge5/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge5">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={thumb2} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge2/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge2">CODE</a></span>
        </div>
      </div>
    </div>
  );
}

export default Portfolio ;

