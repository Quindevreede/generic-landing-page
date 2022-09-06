import React from 'react';
import './tours.css';
import SingleTour from './SingleTour';

function MultipleTours({ tours, removeTour }) {
    return (
    <section>
      <div className="title">
        <h2>OUR TOURS</h2>
        <div className="underline"></div>
      </div>
      <div className="tour-container">
        {tours.map((tour) => {
          return <SingleTour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default MultipleTours;
