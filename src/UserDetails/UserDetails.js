import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  BottomContainer,
  GridItems,
  IconContainer,
  MiddleContainer,
  UserDetailsContainer,
} from './UserDetails.styled';
import { Text } from '../Components/Text/Text';

import { FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

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
            <Text>{data.public_repos}</Text>
          </GridItems>
          <GridItems>
            <Text>Followers</Text>
            <Text>{data.followers}</Text>
          </GridItems>
          <GridItems>
            <Text>Following</Text>
            <Text>{data.following}</Text>
          </GridItems>
        </MiddleContainer>
        <BottomContainer>
          <IconContainer>
            <FaMapMarkerAlt />
            <Text>{data.location}</Text>
          </IconContainer>
          <IconContainer>
            <FaMapMarkerAlt />
            <Text>{data.blog}</Text>
          </IconContainer>
          <IconContainer>
            <FaMapMarkerAlt />
            <Text>{data.location}</Text>
          </IconContainer>
          <IconContainer>
            <FaMapMarkerAlt />
            <Text>{data.blog}</Text>
          </IconContainer>
        </BottomContainer>
      </UserDetailsContainer>
    </UserDetailsContainer>
  );
};

export default UserDetails;
