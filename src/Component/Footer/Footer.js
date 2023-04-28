import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-btn">Sign in for more access</div>
      <div className="footer-social-media">
        <i className="fa-brands fa-tiktok"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-square-facebook"></i>
      </div>
      <div className="footer-link">
        <a href="#">Get the IMDb app</a>
        <a href="#">Help</a>
        <a href="#">Site index</a>
        <a href="#">IMDb pro</a>
        <a href="#">Box office Mojo</a>
        <a href="#">IMDb Developer</a>
        <br />
        <a href="#">Press Room</a>
        <a href="#">Advertising</a>
        <a href="#">Jobs</a>
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Your Ads Privacy Choices</a>
      </div>
      <div className="owner-company">
        <div className="owner-name">Project By :- Yashit Agrawal</div>
        <div className="owner-copyright">&#169; 2002-* by  Yashit.com Inc</div>
      </div>
    </div>
  );
}
