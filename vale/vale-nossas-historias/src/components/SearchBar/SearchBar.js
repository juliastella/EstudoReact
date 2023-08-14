import React, { useState } from 'react';
import styles from './SearchBar.module.css';

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

  return (
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

      <div className={styles.searchHistoryContainer}>
        <h3>Search History:</h3>
        <ul>
          {searchHistory.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
