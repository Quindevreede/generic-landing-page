import React, { useState } from 'react';
import './duck.css';
import { FaAngleDoubleRight } from 'react-icons/fa'
import dataDucks from './dataDucks';

function Duck() {
    const [value, setValue] = useState(0)
    const [data, setData] = useState(dataDucks)
    const { image, name, fullname, color, quotes } = data[value]

    return (
        <main id='ducklist'>
            <div className='skewer--top'></div>
            <section className='outer-content-container'>
                <div className='inner-content-container'>
                    <div className='title'>
                        <h2>DUCKS</h2>
                        <div className='underline'></div>
                    </div>
                    <div className='ducklist-top__container'>
                        <div className='ducklist__container'>
                            <div className='duck-btn__container'>
                                {data.map((item, index) => {

                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setValue(index)}
                                            className={`duck-btn ${index === value && 'active-btn'}`}
                                        >
                                            {item.color}
                                        </button>
                                    )
                                })}
                            </div>
                            <article className='duck-info'>
                                <div className='duck-info__container'>
                                    <div className='duck__container1'>
                                <div className='ducktales--img' >
                                    <img src={image} alt='ducktales' />
                                </div>
                                <h3>{name}</h3>
                                <h4>{fullname}</h4>
                                    </div>
                                    <div className='duck__container2'>
                                {quotes.map((quote, index) => {
                                    return (
                                        <div key={index} className='duck-desc'>
                                            <FaAngleDoubleRight className='duck-icon'></FaAngleDoubleRight>
                                            <p>{quote}</p>
                                        </div>
                                    )
                                })}
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <div className='skewer--bottom'></div>
        </main>
    );
}

export default Duck;