import React, { useState } from 'react';
import './tours.css';

function SingleTour({ id, image, info, name, price, removeTour })  {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p className="read-more">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default SingleTour;
