import React from 'react';
import Button from "../button/Button";

function CategoriesComponent({ categories, filterItems }) {
    return (
        <div className="top10-category-btn__container">
            {categories.map((category, index) => {
                return (
                    <Button
                        type="button"
                        buttonStyle='btn--top10-category'
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </Button>
                );
            })}
        </div>
    );
};

export default CategoriesComponent;
