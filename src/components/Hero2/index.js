import { Container, Body, Arm, Leg, Face, Mouth, Floor } from './styles';

export const Hero2 = () => {
  return (
    <Container>
      <Body />
      <Face>
        <div className='eye left'></div>
        <div className='eye right'></div>
        <div className='nose right'></div>
      </Face>
      <Mouth />
      <Arm className='left' />
      <Arm className='right' />
      <Leg className='left' />
      <Leg className='right' />
      <Floor />
    </Container>
  );
};
