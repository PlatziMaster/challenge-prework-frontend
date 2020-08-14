import { Card } from 'components/card';
import { Footer } from 'components/Footer';
import { Bubbles } from 'components/Bubbles';
import { Hero1 } from 'components/Hero1';

import { GlobalStyle } from 'styles/Globals';
import { Main, Heading, Cards } from './styles';

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Bubbles
          gc={'1 / 2'}
          b1={'19.5rem'}
          t1={'2.6rem'}
          l1={'-4.8rem'}
          b2={'9.7rem'}
          t2={'1.6rem'}
          l2={'16.2rem'}
        />
        <Heading>Platzi Game</Heading>
        <Bubbles
          gc={'3 / 4'}
          b1={'33.5rem'}
          t1={'-22.2rem'}
          r1={'10.1rem'}
          b2={'4.9rem'}
          t2={'9.9rem'}
          r2={'7.7rem'}
        />
        <Cards>
          <Card bgColor={'#43D8C9'} title={'Player 1'} hero={'Hero 1'}>
            <Hero1 />
          </Card>
          <Card bgColor={'#FFBD11'} title={'Player 2'} hero={'Hero 2'} />
        </Cards>
        <Footer />
      </Main>
    </>
  );
};

export default Home;
