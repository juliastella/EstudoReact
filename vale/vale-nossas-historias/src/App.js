import React, { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import CardList from './components/CardList/CardList';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'https://vale.com';

// const ITEMS_PER_PAGE = 3;

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const filteredItems = data.items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container">
      <SearchBar onChange={handleSearchChange} />
      <div className="row">
        <CardList items={filteredItems} imageBaseUrl={API_URL} />
      </div>
    </div>
  );
}
export default App;
