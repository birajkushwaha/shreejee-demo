import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    // Using the local food image
    const heroImage = "/hero.png";

    return (
        <div className="hero">
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="hero-overlay" />

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="hero-subtitle">Pure Vegetarian Fine Dining</span>
                    <h1 className="hero-title">
                        A Symphony of <br /> <span className="text-gold">Flavors</span>
                    </h1>
                    <p className="hero-desc">
                        Experience Udaipur's finest gourmet dining where tradition meets culinary artistry.
                    </p>
                    <a href="#menu" className="btn-explore">Explore Menu</a>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <ChevronDown size={32} color="#fff" />
            </div>
        </div>
    );
};

export default Hero;
