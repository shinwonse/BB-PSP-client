import styled from 'styled-components';
import CommonLayout from '../../components/layout/CommonLayout';
import { breakpoints } from '../../styles/media';
import { useRecoilValue } from 'recoil';
import { selectedProTeamState } from '../../store/Data/atom';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
    padding-top: 39.6rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
    padding-top: 24.6rem;
  }
  ${breakpoints.small} {
    width: 35rem;
    padding-top: 12.8rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  ${breakpoints.large} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4rem;
    row-gap: 7rem;
    width: 135.5rem;
    height: 62.6rem;
    padding-right: 7.3rem;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.2rem;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
  ${breakpoints.medium} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 4rem;
    width: 80.5rem;
    height: 55.6rem;
    padding-right: 7.3rem;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.2rem;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
  ${breakpoints.small} {
    display: flex;
    flex-direction: column;
    height: 45rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

interface PlayerCardProps {
  name: string;
}

function Team() {
  const router = useRouter();
  console.log(router.query.team);

  return (
    <Wrapper>
      <Container>
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
          return <PlayerCard key={i} />;
        })} */}
      </Container>
    </Wrapper>
  );
}

Team.PageLayout = CommonLayout;

export default Team;
