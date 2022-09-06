import React from 'react';
import './listComponent.css';
import './dataList';
import dataList from "./dataList";
import Button from "../button/Button";

function ListComponent() {
    const [list, setList] = React.useState(dataList);

    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
    }

    return (
        <>
            <h3><strong>{list.length}</strong> PEOPLE IN LIST</h3>

            <article className='person__container'>
                    {list.map((item) => (
                        <div className="person__details__container" key={item.id}>
                            <div className="person__details__container-img">
                            <img src={item.image} alt={item.name} />
                            </div>
                            <div className="person__details__container-text">
                            <h4>NAME: {item.name}</h4>
                            <p>AGE: {item.age}</p>
                                <Button
                                    type="button"
                                    buttonStyle="btn--list"
                                    buttonSize="btn--small"
                                    className="list--button" onClick={() => handleRemove(item.id)}>
                                Remove
                            </Button>
                        </div>
                        </div>
                    ))}
                </article>

            <button className="list--clear-button" onClick={() => setList([])}>clear all</button>

        </>
    );
};

export default ListComponent;