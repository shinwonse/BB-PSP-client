import CommonHeader from '@layout/common/CommonHeader';
import { breakpoints } from '@styles/media';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/image/baseball/baseball_gradationmask.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  ${breakpoints.large} {
    min-height: 70rem;
    background-size: 54.5vw auto;
  }
  ${breakpoints.medium} {
    background-size: 60vh auto;
  }
  ${breakpoints.small} {
    background-size: 40vh auto;
  }
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <CommonHeader />
      {children}
    </Container>
  );
}
