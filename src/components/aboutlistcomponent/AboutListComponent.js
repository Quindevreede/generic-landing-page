import React from 'react';
import './aboutlistcomponent.css';

function AboutListComponent({ title, text }) {
    return (
        <div className='about-list-component-top__container'>
            <div className='about-list-component-title__container'>
                <h1>{ title }</h1>
                <div />
            </div>
            <div className='about-list-component-text__container'>
                <p>{ text }</p>
            </div>
        </div>
    );
}

export default AboutListComponent;
