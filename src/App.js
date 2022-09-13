import React from 'react';
import './app.css';

import { Navbar } from './components';
import { Footer } from "./components";
import { List } from './containers';
import { Tours } from './containers';
import { Gallery } from './containers';
import { Faq } from "./containers";
import { Top10 } from "./containers";

function App() {
  return (
      <>
      <div>
          <div className="gradient__bg">
              <Navbar />
          </div>
          <List />
          <div className="gradient__bg">
              <Tours />
          </div>
          <Gallery />
          <div className="gradient__bg">
          <Top10 />
          </div>
          <Faq />
      </div>
          <Footer />
      </>
  );
}

export default App;
