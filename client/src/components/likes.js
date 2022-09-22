import React from 'react';
import styled from '@emotion/styled';
import { colors, IconLike } from '../styles';

/*
* The Likes component shows the number of likes for a track and
*   sends a mutation to like it when the LikeButton is clicked
*/
export default function Likes({ numberOfLikes, id }) {
  return (
    <div>
      <NumberOfLikes>
        {isNaN(numberOfLikes) ? '???' : numberOfLikes}
        <LikeButton>
          <IconLike />
        </LikeButton>
      </NumberOfLikes>
    </div>
  );
}

const NumberOfLikes = styled.div({
  fontSize: '2em',
  flexDirection: 'row',
  marginBottom: '8px',
});

const LikeButton = styled.button({
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'white',
  color: colors.textSecondary,
  ':hover': {
    color: colors.accent,
  },
});
