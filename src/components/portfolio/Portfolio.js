import React from 'react';
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="img_container">
        <img src={require("../../images/thumb3.jpg")} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge5/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge5">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={require("../../images/thumb2.jpg")} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge2/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge2">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={require("../../images/thumb.jpg")} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge3/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge3">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={require("../../images/thumb1.jpg")} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge4/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge4">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={require("../../images/thumb4.png")} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/oschallenge1/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/oschallenge1">CODE</a></span>
        </div>
      </div>
      <div className="img_container">
        <img src={require("../../images/thumb5.png")} alt="portfolio" />
        <div className="thumbs">
          <span><a href="https://mohkabir.github.io/react-calculator-task/">PREVIEW</a></span>
          <span><a href="https://github.com/Mohkabir/react-calculator-task">CODE</a></span>
        </div>
      </div>
    </div>
  );
}

export default Portfolio ;

