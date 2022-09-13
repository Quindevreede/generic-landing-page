import React from 'react'
import './list.css';
import { ListComponent } from '../../components';

function List() {

    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
                <div className='list-title__container'>
                <div className="title">
                    <h2>PEOPLE</h2>
                    <div className="underline"></div>
                </div>
                </div>
        <main className="list-top__container">
            <section className='list-content__container'>
                <ListComponent />
            </section>
        </main>
            </div>
        </section>
    )
}

export default List;