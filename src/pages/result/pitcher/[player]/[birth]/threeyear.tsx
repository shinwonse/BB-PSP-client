import PrevButton from '@button/PrevButton';
import styled from '@emotion/styled';
import { fetchPitcher, usePitcher } from '@hooks/api/usePitcher';
import BlackFullLayout from '@layout/black/BlackFullLayout';
import PitcherTable from '@PlayerInfo/StatTable/PitcherTable';
import { breakpoints } from '@styles/media';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

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
    margin-top: 20vh;
  }
  ${breakpoints.medium} {
    margin-top: 10vh;
  }
  ${breakpoints.small} {
    margin-top: 5vh;
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
  ${breakpoints.small} {
    margin-bottom: 3vh;
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
  ${breakpoints.small} {
    font-size: 6vw;
    margin-top: 2vh;
  }
`;

const Threeyear = () => {
  const router = useRouter();
  const name = router.query?.player as string;
  const birth = router.query?.birth as string;
  const { isLoading, error, data } = usePitcher(2021, name, birth);
  if (isLoading) return <div>Loading...</div>;
  if (error) console.error(error);
  const pitcher_stat = data?.pitcher_stat;
  return (
    <Wrapper>
      <PlayerName>Jung-hoo Lee #07</PlayerName>
      <ContentsContainer>
        <StatContainer>
          <PitcherTable {...pitcher_stat} />
          <PitcherTable {...pitcher_stat} />
          <PitcherTable {...pitcher_stat} />
        </StatContainer>
        <ButtonContainer>
          <PrevButton />
        </ButtonContainer>
      </ContentsContainer>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.player as string;
  const birth = context.params?.birth as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('pitcher', () =>
    fetchPitcher(2021, name, birth),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

Threeyear.PageLayout = BlackFullLayout;

export default Threeyear;