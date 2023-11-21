import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  GridItems,
  MiddleContainer,
  UserDetailsContainer,
} from './UserDetails.styled';
import { Text } from '../Components/Text/Text';

import SocialInfo from './SocialInfo';
import { fontWeight, sizes } from '../constants/sizes';

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
    <UserDetailsContainer>
      <UserDetailsContainer>
        <MiddleContainer>
          <GridItems>
            <Text>Repos</Text>
            <Text size={sizes.medium} fontWeight={fontWeight.bold}>
              {data.public_repos}
            </Text>
          </GridItems>
          <GridItems>
            <Text>Followers</Text>
            <Text size={sizes.medium} fontWeight={fontWeight.bold}>
              {data.followers}
            </Text>
          </GridItems>
          <GridItems>
            <Text>Following</Text>
            <Text size={sizes.medium} fontWeight={fontWeight.bold}>
              {data.following}
            </Text>
          </GridItems>
        </MiddleContainer>
        <SocialInfo
          blog={data.blog}
          location={data.location}
          twitter={data.twitter_username}
          email={data.email}
        />
      </UserDetailsContainer>
    </UserDetailsContainer>
  );
};

export default UserDetails;
