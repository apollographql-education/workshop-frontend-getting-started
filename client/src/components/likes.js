import React from 'react';
import styled from '@emotion/styled';
import { colors, IconLike } from '../styles';

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
