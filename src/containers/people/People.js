import React from 'react'
import './people.css';
import { PeopleComponent } from '../../components';

function People() {

    return (
        <main id='people'>
        <section className="outer-content-container">
            <div className="inner-content-container">
                <div className='people-title__container'>
                <div className="title">
                    <h2>PEOPLE</h2>
                    <div className="underline"></div>
                </div>
                </div>
            <section className='people-content__container'>
                <PeopleComponent />
            </section>
            </div>
        </section>
        </main>
    )
}

export default People;