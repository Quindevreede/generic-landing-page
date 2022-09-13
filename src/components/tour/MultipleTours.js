import React from 'react';
import './tour.css';
import SingleTour from './SingleTour';

function MultipleTours({ tours, removeTour }) {
    return (
    <section>
      <div className="multiple-tour__container">
        {tours.map((tour) => {
          return <SingleTour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default MultipleTours;
