import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const interiorImage = "/interior.png";

    return (
        <section id="about" className="about-section">
            <div className="container about-container">

                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="frame-top"></div>
                    <img src={interiorImage} alt="Shreejee Interior" className="about-image" />
                    <div className="frame-bottom"></div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-subtitle">The Experience</span>
                    <h2 className="section-title">Royalty on <span className="highlight">Every Plate</span></h2>
                    <p className="about-text">
                        Nestled in the heart of Udaipur, Shreejee offers more than just food; we offer an escape.
                        Our chefs craft every dish with precision, using age-old recipes and the freshest ingredients
                        to bring you the authentic taste of Indian heritage.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>15+</h3>
                            <p>Years of Service</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Pure Vegetarian</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
