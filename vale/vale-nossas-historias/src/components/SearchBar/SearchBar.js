import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from './search-icon.svg';

const SearchBar = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const currentSearchTerm = event.target.value;
    setSearchTerm(currentSearchTerm);
    onChange(currentSearchTerm);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      let history = [];
      console.log(history);
    }
  };

  return (
    <div className={`${styles.searchBar} d-flex border-bottom mt-4 mb-5`}>
      <button className={`${styles.searchIcon}`} 
      onClick={handleSearch}>
        <SearchIcon />
      </button>

      <input
        className={`${styles.searchCamp} w-100`}
        type="text"
        placeholder="Click to search"
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBar;
