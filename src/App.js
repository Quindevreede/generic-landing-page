import React from 'react';
import './app.css';

import { Navbar } from './components';
import { List } from './containers';

function App() {
  return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
        </div>
          <List />
      </div>
  );
}

export default App;
