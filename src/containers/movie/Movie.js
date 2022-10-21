import React, { useState, useEffect } from 'react';
import './movie.css';
import MovieListComponent from '../../components/movielistcomponent/MovieListComponent';
import Alert from './Alert';
import movieImage from '../../assets/movie/crazy4cultv7_web.jpg';
import Button from "../../components/button/Button";

function getLocalStorage() {
    let list = localStorage.getItem('list');
    if (list) {

        return (list = JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
}

function Movie() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) {
            showAlert(true, 'danger', 'please enter value');
        } else if (name && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return {...item, title: name};
                    }
                    return item;
                })
            );
            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'success', 'value changed');
        } else {
            showAlert(true, 'success', 'item added to the list');
            const newItem = { id: new Date().getTime().toString(), title: name };

            setList([...list, newItem]);
            setName('');
        }
    }

    function showAlert(show = false, type = '', msg = '') {
        setAlert({ show, type, msg });
    }

    function clearList() {
        showAlert(true, 'danger', 'empty list');
        setList([]);
    }

    function removeItem(id) {
        showAlert(true, 'danger', 'item removed');
        setList(list.filter((item) => item.id !== id));
    }

    function editItem(id) {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
        }, [list]);

    return (
        <main id='movie'>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="title">
                        <h2>MOVIE</h2>
                        <div className="underline"></div>
                    </div>
                    <div className='movielist-top__container'>
                        <div className='movielist__container'>
                            <div className='movielist__container1'>
                                <div className='movie-img__container'>
                                    <img src={movieImage} alt='movie' />
                                </div>
                            </div>
                            <div className='movielist__container2'>
                                <h4>Fill In The Movies:</h4>
                                <form className='movie-form' onSubmit={handleSubmit}>
                                    {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

                                    <div className='form-control__container'>
                                        <input
                                            type='text'
                                            className='movie-form--input'
                                            placeholder='e.g. ghostbusters'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <Button
                                            type='submit'
                                            buttonStyle='btn--movie-submit'
                                            buttonSize='btn--small'>
                                            {isEditing ? 'EDIT' : 'SUBMIT'}
                                        </Button>
                                    </div>
                                </form>
                                {list.length > 0 && (
                                    <div className='movie--output__container'>
                                        <MovieListComponent items={list} removeItem={removeItem} editItem={editItem} />
                                        <Button
                                            type='button'
                                            buttonStyle='btn--movie-clear'
                                            buttonSize='btn--small'
                                            onClick={clearList}>
                                            CLEAR ITEMS
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Movie;