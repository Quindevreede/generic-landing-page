import React, { useState } from 'react';
import './galleryComponent.css';
import art from './dataArt';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from "../button/Button";

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
    };

    function nextPerson() {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    function prevPerson() {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    function randomPerson() {
        let randomNumber = Math.floor(Math.random() * art.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <article className='gallery-top'>
            <div className='art-img__container'>
                <img src={image} alt={title} className='art-img-image' />
                <p>{title}</p>
                <p>{year}</p>
            </div>
            <p className='art--text'>{text}</p>
            <div className='art-button__container'>
                PREV
                <Button
                    buttonStyle="btn--list"
                    buttonSize="btn--small"
                    className="list--button"
                    onClick={prevPerson}>
                    <FaChevronLeft />
                </Button>
                <Button
                    buttonStyle="btn--list"
                    buttonSize="btn--small"
                    className="list--button"
                    onClick={nextPerson}>
                    <FaChevronRight />
                </Button>
                NEXT
            </div>
            <Button
                buttonStyle="btn--list"
                buttonSize="btn--medium"
                className="random--button"
                onClick={randomPerson}>
                RANDOM ARTWORK
            </Button>
        </article>
    );
};

export default GalleryComponent;
