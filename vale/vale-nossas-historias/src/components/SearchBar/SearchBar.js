import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import data from './../../data.json';
import CardList from '../CardList/CardList';
 //import Card from '../Card';

import { ReactComponent as SearchIcon } from './search-icon.svg';

const SearchBar = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  console.log(data);
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
      <div>
        {data.items
          .filter((item) => {
            if (searchTerm === '') {
              return true;
            } else if (
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((item, index) => (
            <div className="user" key={index}>
              <CardList
              />
            </div>
          ))}
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
