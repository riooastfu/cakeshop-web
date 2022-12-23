//import liraries
import React from 'react';
import './menu.css'
import Image from './Image';
import { useState } from 'react';

// create a component
const Menu = () => {

    const [items, setItems] = useState(Image);

    return (
        <section className="menu container section" id='menu'>
            <h2 className="section__title">Menu</h2>
            <h4 className='sub__title'>
                Hard to decide, right? Of course, our cakes are the best you can taste, so choose wisely.
            </h4>

            <div className="menu__container grid">
                {items.map((elem) => {
                    const { id, image, title } = elem;
                    return (
                        <div className="menu__card" key={id}>
                            <div className="menu__thumbnail">
                                <img src={image} alt="" className="menu_img" />
                                <div className="menu__mask"></div>
                            </div>

                            <h3 className="work__title">{title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};
export default Menu;
