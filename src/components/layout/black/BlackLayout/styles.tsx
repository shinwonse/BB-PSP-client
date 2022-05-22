import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Container = styled.div`
  background-color: #3d3d3d;
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
    height: 100vh;
    background-size: 40vh auto;
  }
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;