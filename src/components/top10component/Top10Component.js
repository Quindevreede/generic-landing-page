import React from 'react';
import './top10component.css';

const Top10Component = ({ items }) => {
    return (
        <div className='top10-top'>
            {items.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem;
                return (
                    <article key={id} className='top10-component__container'>
                        <img src={img} alt={title} className='top10--image' />
                        <div className='videogame-info__container'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Top10Component;