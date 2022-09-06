import React from 'react';
import './app.css';

import { Navbar } from './components';
import { Footer } from "./components";
import { List } from './containers';
import { Tours } from './containers';
import { Gallery } from './containers';

function App() {
  return (
      <>
      <div className="App">
          <div className="gradient__bg">
              <Navbar />
          </div>
          <List />
          <div className="gradient__bg">
              <Tours />
          </div>
          <Gallery />
      </div>
          <Footer />
      </>
  );
}

export default App;
