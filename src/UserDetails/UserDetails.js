import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  BioContainer,
  GridItems,
  MiddleContainer,
  UserDetailsContainer,
} from './UserDetails.styled';
import { MediumText, SmallText, Text } from '../Components/Text/Text';
import { BioText } from '../Components/Text/Text';
import SocialInfo from '../Components/SocialInfo/SocialInfo';
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
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching user data</Text>;
  }

  return (
    <UserDetailsContainer>
      <UserDetailsContainer>
        <BioContainer>
          {data.bio ? (
            <SmallText text={data.bio} />
          ) : (
            <SmallText text="No Bio Found" />
          )}
        </BioContainer>
        <MiddleContainer>
          <GridItems>
            <Text>Repos</Text>
            <Text size={sizes.medium} fontWeight={fontWeight.bold}>
              {data.public_repos}
            </Text>
          </GridItems>
          <GridItems>
            <Text>Followers</Text>
            <MediumText text={data.followers} />
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
