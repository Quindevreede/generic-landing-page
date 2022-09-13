import React from 'react';
import './top10component.css';

const Top10Component = ({ items }) => {
    return (
        <div>
            {items.map((menuItem, index) => {
                const { title, img, desc, category } = menuItem;
                return (
                    index % 2 === 0 ?
                        <article key={index} className='top10-component__container--even'>
                        <img src={img} alt={title} className='top10--image' />
                        <div className='videogame-info__container'>
                            <div className='videogame-info__container--header'>
                                <h4>{index + 1}.   {title} {category}</h4>
                            </div>
                            <p className='item-text'>{desc}</p>
                            <div className='videogame-info__container-dots'></div>
                        </div>
                    </article>
                        :
                        <article key={index} className='top10-component__container--odd'>
                            <img src={img} alt={title} className='top10--image' />
                            <div className='videogame-info__container'>
                                <div className='videogame-info__container--header'>
                                    <h4>{index + 1}.   {title} -- {category}</h4>
                                </div>
                                <p className='item-text'>{desc}</p>
                                <div className='videogame-info__container-dots'></div>
                            </div>
                        </article>
                );
            })}
        </div>
    );
};

export default Top10Component;