import React from 'react';
import styles from './SearchBar.module.css';

import SearchIcon from './search-icon.svg'; 

const SearchBar = ({ onChange }) => {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    onChange(searchTerm);
  };

  return (
    <div className={`${styles.searchBar} searchBarContainer`}>
      <img src={SearchIcon} alt="Ícone de busca" className={styles.searchIcon} />
      <input
        className={styles.searchCamp}
        type="text"
        placeholder="Click to search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
