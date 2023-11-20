import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background-color: grey;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-right: 8px;
`;

const SearchButton = styled.button`
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

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
    <SearchForm onSubmit={handleSubmit}>
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
