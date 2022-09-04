import React from 'react';
import './tours.css';
import SingleTour from './SingleTour';

function MultipleTours({ tours, removeTour }) {
    return (

        <section className="outer-content-container">
            <div className="inner-content-container">
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tour-container">
        {tours.map((tour) => {
          return <SingleTour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
            </div>
        </section>
  );
};

export default MultipleTours;
