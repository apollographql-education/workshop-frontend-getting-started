import React from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});

export default function Loading() {
  return (
    <SpinnerContainer>
      <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
    </SpinnerContainer>
  );
}
