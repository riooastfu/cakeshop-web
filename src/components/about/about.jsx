//import liraries
import React from 'react';
import './about.css'
import img1 from '../../assets/img/wheat.jpg'

// create a component
const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Us</h2>
            <div className="about__container grid">
                <img src={img1} className="image" />
                <p>
                    Noah Western Cakes & Desserts is the pioneer in Australian style pastry shop chain in Bali, indonesia. Noah Western Cakes & Desserts steadily delivers promise of good quality and service to its stakeholders.
                    <br/><br/>
                    Noah Western Cakes & Desserts delivers the steady promise of superior product quality, sensational product presentations with inventive packaging and exceptional service standards. Noah Western Cakes & Desserts innovative approach drives the brand to continuously research and develop products, adding artful collaboration in each and every creation, making it a market leader in the business.
                </p>
            </div>
        </section>
    );
};
export default About;
