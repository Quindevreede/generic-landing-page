import React from 'react';
import './movielistcomponent.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

function MovieListComponent({ items, removeItem, editItem }) {

  return (
      <div className='movie-component__container'>
    <div className='movie-list'>
      {items.map((item) => {
        const { id, title } = item;

        return (
          <article className='movie-item' key={id}>
            <p className='movie--title'>{title}</p>
            <div className='movie-btn-container'>
              <button
                type='button'
                className='movie-edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='movie-delete-btn'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
      </div>
  );
};

export default MovieListComponent;
