import React, { useState } from 'react';
import './top10.css';
import Menu from '../../components/top10component/Top10Component';
import Categories from '../../components/top10component/CategoriesComponent';
import items from '../../components/top10component/DataTop10';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Top10() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main id='top10'>
            <div className="skewer--top"></div>
            <section className="outer-content-container">
                <div className="inner-content-container">
                <div className="title">
                    <h2>TOP 10</h2>
                    <div className="underline"></div>
                </div>
                    <div className='top10-top__container'>
                <Categories categories={categories} filterItems={filterItems} />
                        <div className='top10-content__container'>
                <Menu items={menuItems} />
                    </div>
                </div>
                </div>
            </section>
            <div className="skewer--bottom"></div>
        </main>
    );
}

export default Top10;