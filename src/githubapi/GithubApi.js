// GithubApi.js
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};

const GithubApi = ({ username }) => {
  const { data, isLoading, isError } = useQuery(['userData', username], () =>
    fetchUserData(username)
  );

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
      <img src={data.avatar_url} alt={`${data.name}'s avatar`} />
    </div>
  );
};

export default GithubApi;
