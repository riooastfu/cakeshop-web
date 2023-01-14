import React from 'react';
import './home.css'

// import img
import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'

//import component
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="home__container grid">
                <img src={img1} alt="" className="home__img" />
                <div className="home__bg1">
                    <h1>Noah Western Cakes & Desserts</h1>
                    <p>Premium quality cakes & desserts that made with love and passion.</p>
                </div>
                <img src={img2} alt="" className="home__img" />
            </div>
            <ScrollDown/>
            
        </section>
    );
};
export default Home;
