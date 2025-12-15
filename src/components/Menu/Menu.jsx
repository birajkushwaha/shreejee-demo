import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Menu.css';

const Menu = () => {
    const menuItems = [
        {
            title: "Paneer Angara",
            desc: "Smoked cottage cheese cooked in a rich, spicy tomato gravy.",
            price: "₹380"
        },
        {
            title: "Maharaja Thali",
            desc: "A royal feast featuring 7 curries, breads, rice, and desserts.",
            price: "₹550"
        },
        {
            title: "Mysore Masala Dosa",
            desc: "Crispy crepe smeared with spicy chutney and potato filling.",
            price: "₹240"
        },
        {
            title: "Dal Baati Churma",
            desc: "Traditional Rajasthani dish with lentils and baked wheat balls.",
            price: "₹420"
        },
        {
            title: "Kaju Curry",
            desc: "Rich creamy gravy with roasted cashews and aromatic spices.",
            price: "₹450"
        },
        {
            title: "Vegetable Biryani",
            desc: "Fragrant basmati rice cooked with garden fresh vegetables.",
            price: "₹310"
        }
    ];

    return (
        <section id="menu" className="menu-section">
            <div className="container">

                <div className="menu-header">
                    <span className="section-subtitle gold">Our Masterpieces</span>
                    <h2 className="section-title white">Signature Selections</h2>
                </div>

                <div className="menu-grid">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="menu-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="card-top">
                                <h3 className="dish-title">{item.title}</h3>
                                <span className="dish-price">{item.price}</span>
                            </div>
                            <p className="dish-desc">{item.desc}</p>
                            <button className="btn-order">
                                Order <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="view-all-wrapper">
                    <button className="btn-view-all">View Full Menu</button>
                    <button className="btn-download">
                        <Download size={18} /> Download Menu
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Menu;
