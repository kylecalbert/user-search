import React from 'react';
import { FaMapMarkerAlt, FaTwitter, FaLink } from 'react-icons/fa';

import { SocialInfoContainer, IconContainer } from './SocialInfo.styled';
import { Text } from '../Text/Text';

const SocialInfo = ({ location, blog, twitter, email }) => {
  return (
    <SocialInfoContainer>
      <IconContainer>
        <FaMapMarkerAlt />
        {location ? (
          <Text>{location}</Text>
        ) : (
          <Text>Location not available</Text>
        )}
      </IconContainer>
      <IconContainer>
        <FaLink />
        {blog ? <Text>{blog}</Text> : <Text>Blog not available</Text>}
      </IconContainer>
      <IconContainer>
        <FaTwitter />
        {twitter ? <Text>{twitter}</Text> : <Text>twitter not available</Text>}
      </IconContainer>
      <IconContainer>
        <FaMapMarkerAlt />
        {email ? <Text>{email}</Text> : <Text>Email not available</Text>}
      </IconContainer>
    </SocialInfoContainer>
  );
};

export default SocialInfo;
