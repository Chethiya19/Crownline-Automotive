import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">CROWNLINE  AUTOMOTIVE</h2>
          <p>Your one-stop solution for vehicles — Muscle, SUV, Sedan, Coupe, Pickups & Electric.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-links-grid">
            <ul className="footer-links">
              <li><a href="/vehicles-muscle">Muscle</a></li>
              <li><a href="/vehicles-suv">SUVs</a></li>
              <li><a href="/vehicles-sedan">Sedans</a></li>
            </ul>
            <ul className="footer-links">
              <li><a href="/vehicles-coupe">Coupe</a></li>
              <li><a href="/vehicles-pickups">Pickups</a></li>
              <li><a href="/vehicles-convertible">Convertible</a></li>
            </ul>
            <ul className="footer-links">
              <li><a href="/vehicles-electric">Electric Vehicles</a></li>
              <li><a href="/vehicles-SportCars">Sport Cars</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} CROWNLINE  AUTOMOTIVE. ALL RIGHT RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
