import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
function App() {
  const handleChange = (SearchTerm) => {
    console.log('Search term:', SearchTerm);
  };

  return (
    <section className="App">
      <SearchBar onChange={handleChange} />
    </section>
  );
}

export default App;
