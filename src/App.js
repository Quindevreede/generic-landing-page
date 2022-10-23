import React from 'react';
import './app.css';

import { Navbar } from './components';
import { AboutList } from './containers';
import { People } from './containers';
import { Tours } from './containers';
import { Gallery } from './containers';
import { MovieList } from './containers';
import { Ducklist } from './containers';

function App() {
  return (
      <>
      <div>
          <div className='gradient__bg'>
              <Navbar />
          </div>
          <AboutList />
          <People />
          <div className='gradient__bg'>
              <Tours />
          </div>
          <Gallery />
          <div className='gradient__bg'>
          <Ducklist />
          </div>
          <MovieList />
      </div>
      </>
  );
}

export default App;
