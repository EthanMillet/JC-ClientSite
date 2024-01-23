import React from "react";

import './pages/styles/nav.css'

function Footer() {
    return (
      <div className="footer-main">

        <div className="footer-title-container">
          <h2 className="footer-title">Find Your Own Joy in Christ</h2>
        </div>


        <div className="footer-sub">

        <div className="footer-left">
            <p className="footer-subtitle">Resources</p>
            <button className="footer-button">Joy In Christ</button>
            <button className="footer-button">LDS.org</button>
            <button className="footer-button">Request a Book of Mormon</button>
            <button className="footer-button">Meet With the Missionaries</button>
            <button className="footer-button">Find a Church Near You</button>
        </div>

        <div className="footer-middle">
            <p className="footer-subtitle">Libraries</p>
            <button className="footer-button">Scriptures</button>
            <button className="footer-button">General Conference</button>
            <button className="footer-button">Come, Follow Me</button>
            <button className="footer-button">Gospel Library</button>
            <button className="footer-button">Inspiration</button>
        </div>

        <div className="footer-right">
            <p className="footer-subtitle">About Us</p>
            <button className="footer-button">Home</button>
            <button className="footer-button">About</button>
            <button className="footer-button">Contact</button>
            <button className="footer-button">Who is Jesus Christ</button>
            <button className="footer-button">What Has Jesus Christ Done</button>
            <button className="footer-button">What is the Doctrine of Christ</button>
        </div>
        </div>

        <div className="footer-copyright">
          <h2>Acessibility Support</h2>
          <h2>&#169; Joy In Christ. All rights reserved.</h2>
        </div>
      </div>
    );
  }
  
  export default Footer;