import React, { useState } from 'react';
import './tour.css';
import Button from '../button/Button';

function SingleTour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
      <article className='single-tour__container'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour--info'>
            <h3>{name}</h3>
            <h4 className='tour--price'>${price}</h4>
          </div>
          <p className='read-more'>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <Button
                type='button'
                buttonStyle='btn--read-more'
                buttonSize='btn--small'
                onClick={() => setReadMore(!readMore)}>
                {readMore ? 'show less' : '  read more'}
            </Button>
          </p>
          <Button
              type='button'
              buttonStyle='btn--tours'
              buttonSize='btn--medium'
              onClick={() => removeTour(id)}>
              not interested
          </Button>
        </footer>
      </article>
  );
}

export default SingleTour;
