import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment';

import {
  BioContainer,
  GridItems,
  MiddleContainer,
  UserDetailsContainer,
  UserInfo,
} from './UserDetails.styled';
import { Text } from '../Components/Text/Text';
import SocialInfo from '../Components/SocialInfo/SocialInfo';
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
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching user data</Text>;
  }

  const inputDate = moment(data.created_at);
  const formattedDate = inputDate.format('DD MMMM YYYY').toUpperCase();
  console.log(formattedDate);

  return (
    <UserDetailsContainer>
      <UserDetailsContainer>
        <UserInfo>
          <Text>{data.login}</Text>
          <Text>{formattedDate}</Text>
        </UserInfo>

        <BioContainer>
          {data.bio ? <Text>{data.bio}</Text> : <Text>No Bio Found</Text>}
        </BioContainer>
        <MiddleContainer>
          <GridItems>
            <Text>Repos</Text>

            <Text variant="mediumText">{data.public_repos}</Text>
          </GridItems>
          <GridItems>
            <Text>Followers</Text>
            <Text variant="mediumText">{data.followers}</Text>
          </GridItems>
          <GridItems>
            <Text>Following</Text>
            <Text variant="mediumText">{data.following}</Text>
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
