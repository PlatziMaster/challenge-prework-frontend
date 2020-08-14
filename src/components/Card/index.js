import {
  Container,
  Title,
  Life,
  LifeValue,
  LifeBar,
  Button,
  Character
} from './styles';

export const Card = ({ bgColor, posCol, title, children }) => {
  return (
    <Container bgColor={bgColor} posCol={posCol}>
      <Title>{title}</Title>
      <Life>
        <LifeValue>50%</LifeValue>
        <LifeBar>
          <div remaining='30%' className='life-remaining'></div>
          <div eliminated='70%' className='life-eliminated'></div>
        </LifeBar>
      </Life>
      <Button>
        <span>Play</span>
      </Button>
      <Character>{children}</Character>
    </Container>
  );
};
