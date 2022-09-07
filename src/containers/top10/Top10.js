import React, { useState } from 'react';
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
        <main>
            <section className="outer-content-container">
                <div className="inner-content-container">
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
                </div>
            </section>
        </main>
    );
}

export default Top10;