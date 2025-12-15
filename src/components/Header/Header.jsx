import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo">SHREEJEE</div>

                <div className="desktop-menu">
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#location">Location</a>
                    <button className="btn-book">Book a Table</button>
                </div>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                    <a href="#location" onClick={() => setMobileMenuOpen(false)}>Location</a>
                </div>
            )}
        </nav>
    );
};

export default Header;
