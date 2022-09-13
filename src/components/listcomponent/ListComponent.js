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

            <article className='list-component__container'>
                    {list.map((item) => (
                        <div className="list-component-content__container" key={item.id}>
                            <div className="list-component-content--img">
                            <img src={item.image} alt={item.name} />
                            </div>
                            <div className="list-component-content--text">
                            <h4>NAME: {item.name}</h4>
                            <p>AGE: {item.age}</p>
                                <Button
                                    type="button"
                                    buttonStyle="btn--list"
                                    buttonSize="btn--small"
                                    className="list--button" onClick={() => handleRemove(item.id)}>
                                REMOVE
                            </Button>
                        </div>
                        </div>
                    ))}
                </article>

            <button className="btn--list-clear" onClick={() => setList([])}>clear all</button>

        </>
    );
};

export default ListComponent;