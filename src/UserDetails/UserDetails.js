// GithubApi.js
import React from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

const UserDetails = ({ username }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userData', username],
    queryFn: () => fetchUserData(username),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching user data</p>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
    </div>
  );
};

export default UserDetails;
