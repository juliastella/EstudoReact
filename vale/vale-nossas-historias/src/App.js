import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import Card from './components/Card/Card.js';

function App() {
  return (
    <section className="App">
      <SearchBar />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
