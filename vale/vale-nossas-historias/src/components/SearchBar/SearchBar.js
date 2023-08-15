import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import data from './../../data.json';
import CardList from '../CardList/CardList';

import { ReactComponent as SearchIcon } from './search-icon.svg';

const SearchBar = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleChange = (event) => {
    const currentSearchTerm = event.target.value;
    setSearchTerm(currentSearchTerm);
    onChange(currentSearchTerm);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearchHistory([...searchHistory, searchTerm]);
    }
  };

  const filteredItems = data.items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className={`${styles.searchBar} searchBarContainer`}>
        <button className={styles.searchIcon} onClick={handleSearch}>
          <SearchIcon />
        </button>

        <input
          className={styles.searchCamp}
          type="text"
          placeholder="Click to search"
          onChange={handleChange}
          value={searchTerm}
        />
      </div>
      <div className="list">
        <CardList items={filteredItems} />
      </div>

      <div className={styles.searchHistoryContainer}>
        <h3>Cards:</h3>
        <ul>
          {searchHistory.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
