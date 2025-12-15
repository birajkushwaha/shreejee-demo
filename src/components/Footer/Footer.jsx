import React from 'react';
import { MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="location" className="footer">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand">
                        <h2 className="footer-logo">SHREEJEE</h2>
                        <p className="footer-desc">
                            Redefining the art of vegetarian dining with elegance, tradition, and impeccable taste.
                        </p>
                        <div className="social-icons">
                            <div className="icon-box"><Facebook size={20} /></div>
                            <div className="icon-box"><Instagram size={20} /></div>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <MapPin className="gold-icon" size={20} />
                            <p>Shreejee Multi-cuisine Fine Dining Restaurant, Udaipur, Rajasthan</p>
                        </div>
                        <div className="contact-item">
                            <Phone className="gold-icon" size={20} />
                            <p>+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="footer-hours">
                        <h3>Opening Hours</h3>
                        <div className="hours-row">
                            <span>Mon - Sun</span>
                            <span>11:00 AM - 11:00 PM</span>
                        </div>
                        <p className="happy-hours"><span className="gold-text">Happy Hours:</span> 4 PM - 7 PM</p>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Shreejee Restaurant. All rights reserved.</p>
                    <p className="credit">Designed by Antigravity</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
