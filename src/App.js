import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import GithubApi from './GithubApi';
import SearchBar from './searchbar/searchbar';

import { AppContainer } from './App.styled';

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState('');

  const handleSearch = (searchTerm) => {
    setUsername(searchTerm);
  };

  return (
    <AppContainer className="App">
      <QueryClientProvider client={client}>
        <h1>GitHub User Search</h1>
        <SearchBar onSearch={handleSearch} />
        {username && <GithubApi username={username} />}
      </QueryClientProvider>
    </AppContainer>
  );
}

export default App;
