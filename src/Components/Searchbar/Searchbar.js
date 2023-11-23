import React, { useState } from 'react';

import { StyledSearchContainer, StyledSearchInput } from './Searchbar.styled';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <StyledSearchContainer onSubmit={handleSubmit}>
      <StyledSearchInput
        type="text"
        placeholder="Search for a github user"
        value={searchTerm}
        onChange={handleChange}
        data-testid="search-bar"
      />
    </StyledSearchContainer>
  );
};

export default SearchBar;
