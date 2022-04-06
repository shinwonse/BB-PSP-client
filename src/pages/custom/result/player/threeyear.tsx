import styled from 'styled-components';
import BlackFullLayout from '../../../../components/layout/black/BlackFullLayout';
import PrevButton from '../../../../components/button/PrevButton';
import StatTable from '../../../../components/PlayerInfo/StatTable';
import { breakpoints } from '../../../../styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(39, 39, 39, 0.87) 16.23%,
    rgba(39, 39, 39, 0.433227) 65.57%,
    rgba(39, 39, 39, 0) 100%
  );
  ${breakpoints.large} {
    margin-top: 22.69vh;
  }
  ${breakpoints.medium} {
    margin-top: 10vh;
  }
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  ${breakpoints.large} {
    margin-top: 16.11vh;
    margin-bottom: 6.48vh;
  }
  ${breakpoints.medium} {
    margin-top: 16.11vh;
    margin-bottom: 6.48vh;
  }
`;

const PlayerName = styled.h1`
  position: absolute;
  font-family: 'RobotoBoldItalic';
  color: #fff;
  ${breakpoints.large} {
    font-size: 5.21vw;
    margin-top: 14.07vh;
  }
  ${breakpoints.medium} {
    font-size: 6vw;
    margin-top: 6vh;
  }
`;

const Threeyear = () => {
  return (
    <Wrapper>
      <PlayerName>Jung-hoo Lee #07</PlayerName>
      <ContentsContainer>
        <StatContainer>
          <StatTable />
          <StatTable />
          <StatTable />
        </StatContainer>
        <ButtonContainer>
          <PrevButton />
        </ButtonContainer>
      </ContentsContainer>
    </Wrapper>
  );
};

Threeyear.PageLayout = BlackFullLayout;

export default Threeyear;
