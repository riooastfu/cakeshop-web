//import liraries
import React, { useEffect } from 'react';
import './menu.css'
import Image from './Image';
import { useState } from 'react';

// create a component
const Menu = () => {

    const [items, setItems] = useState(Image);
    const filterItem = (categoryItem) => {
        const upadatedItems = Image.filter((curElem) => {
          return curElem.category === categoryItem;
        })
    
        setItems(upadatedItems);
      }

    useEffect(() => {
        filterItem("Cakes")
    },[])

    return (
        <section className="menu container section" id='menu'>
            <h2 className="section__title">Menu</h2>
            <h4 className='sub__title'>
                Hard to decide, right? Of course, our cakes are the best you can taste, so choose wisely.
            </h4>

            <div className="menu__filters">
                <span className="menu__item" onClick={() => filterItem("Cakes")}>Cakes</span>
                <span className="menu__item" onClick={() => filterItem("Cupcakes")}>Cupcakes</span>
                <span className="menu__item" onClick={() => filterItem("Others")}>Others</span>
            </div>

            <div className="menu__container grid">
                {items.map((elem) => {
                    const { id, image, title } = elem;
                    return (
                        <div className="menu__card" key={id}>
                            <div className="menu__thumbnail">
                                <img src={image} alt="" className="menu_img" />
                                <div className="menu__mask"></div>
                            </div>

                            <h3 className="menu__title">{title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};
export default Menu;
