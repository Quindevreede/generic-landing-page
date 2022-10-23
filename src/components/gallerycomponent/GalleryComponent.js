import React, { useState } from 'react';
import './galleryComponent.css';
import art from './dataArt';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from '../button/Button';

function GalleryComponent() {
    const [index, setIndex] = useState(0);
    const { title, year, image, text } = art[index];

    function checkNumber(number) {
        if (number > art.length - 1) {
            return 0;
        }
        if (number < 0) {
            return art.length - 1;
        }
        return number;
    }

    function nextPerson() {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    function prevPerson() {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    function randomPerson() {
        let randomNumber = Math.floor(Math.random() * art.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    return (

        <article className='gallery-component__container'>
            <div className='gallery-img__container'>
                <img src={image} alt={title} className='gallery-img' />
            </div>
            <section className='gallery-component-content__container'>
                <div className='gallery-title__container'>
                    <p>{title}</p>
                    <p>{year}</p>
                </div>
                <p className='gallery--text'>{text}</p>
                <div className='gallery-button__container'>
                    <Button
                        buttonStyle='btn--gallery'
                        buttonSize='btn--medium'
                        className='list--button'
                        onClick={prevPerson}>
                        PREV <FaChevronLeft />
                    </Button>
                    <Button
                        buttonStyle='btn--gallery'
                        buttonSize='btn--medium'
                        className='list--button'
                        onClick={nextPerson}>
                        <FaChevronRight /> NEXT
                    </Button>
                </div>
                <Button
                    buttonStyle='btn--gallery-random'
                    buttonSize='btn--small'
                    className='random--button'
                    onClick={randomPerson}>
                    RANDOM ARTWORK
                </Button>
            </section>
        </article>
    );
}

export default GalleryComponent;
