import React from 'react'
import './list.css';
import { ListComponent } from '../../components';

function List() {

    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
        <main className="list-top">
            <section className='list__container'>
                <h1>A RANDOM LIST :</h1>
                <ListComponent />
            </section>
        </main>
            </div>
        </section>
    )
}

export default List;