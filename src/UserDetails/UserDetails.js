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
  userInfo,
} from './UserDetails.styled';
import {
  LargeText,
  MediumText,
  SmallText,
  Text,
} from '../Components/Text/Text';
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
          <LargeText text={data.login} />
          <SmallText text={formattedDate} />
        </UserInfo>

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

            <MediumText text={data.public_repos} />
          </GridItems>
          <GridItems>
            <Text>Followers</Text>
            <MediumText text={data.followers} />
          </GridItems>
          <GridItems>
            <Text>Following</Text>

            <MediumText text={data.following} />
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
