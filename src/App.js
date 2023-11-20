import React, { useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import GithubApi from './GithubApi';
import SearchBar from './searchbar/searchbar';

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState('');

  const handleSearch = (searchTerm) => {
    setUsername(searchTerm);
  };

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <h1>GitHub User Search</h1>
        <SearchBar onSearch={handleSearch} />
        {username && <GithubApi username={username} />}
      </QueryClientProvider>
    </div>
  );
}

export default App;
