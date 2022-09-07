import React, { useState } from 'react';
import './faqComponent.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function FaqComponent({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
};

export default FaqComponent;