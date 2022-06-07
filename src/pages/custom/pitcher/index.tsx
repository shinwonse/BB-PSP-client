import styled from '@emotion/styled';
import { useCustomPitcher } from '@hooks/api/useCustomPitcher';
import CommonLayout from '@layout/common/CommonLayout';
import PitcherCard from '@PlayerCard/PitcherCard';
import {
  ageRangeState,
  salaryRangeState,
  selectedTeamState,
} from '@store/Data/atom';
import { IPitcherProps } from '@store/Types';
import { breakpoints } from '@styles/media';
import CommonLoading from 'components/loading/commonLoading';
import NoData from 'components/nodata';
import { useRecoilValue } from 'recoil';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakpoints.medium} {
    padding-top: 10vh;
  }
  ${breakpoints.small} {
    padding-top: 10vh;
  }
`;

const Container = styled.div`
  overflow-x: hidden;
  ${breakpoints.large} {
    position: absolute;
    bottom: 0;
    margin-top: 19.54vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.04vw;
    row-gap: 3.7vh;
    width: 70.94vw;
    height: 63.33vh;
    white-space: nowrap;
    padding-left: 2vw;
    padding-right: 2.6vw;
  }
  ${breakpoints.medium} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85vw;
    height: 60vh;
  }
  ${breakpoints.small} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 80vw;
    height: 60vh;
  }
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #3d3d3d;
    background-clip: padding-box;
    &:hover {
      background: #606060;
    }
  }
`;

const Pitcher = () => {
  const team = useRecoilValue(selectedTeamState);
  const age = useRecoilValue(ageRangeState);
  const salary = useRecoilValue(salaryRangeState);
  const { isLoading, error, data } = useCustomPitcher(
    2021,
    age[0],
    age[1],
    team,
    salary[0] * 10000,
    salary[1] * 10000,
  );
  if (isLoading) return <CommonLoading />;
  if (error) console.error(error);
  if (data.length === 0) return <NoData />;
  return (
    <Wrapper>
      <Container>
        {data.map((player: IPitcherProps) => {
          return <PitcherCard key={player?.player_info?.name} {...player} />;
        })}
      </Container>
    </Wrapper>
  );
};

Pitcher.PageLayout = CommonLayout;

export default Pitcher;
