import {
  Container,
  Body,
  Arm,
  Leg,
  Large,
  Eye,
  Weapon,
  LineOne,
  LineTwo,
  Ball,
  Floor
} from './styles';

export const Hero1 = () => {
  return (
    <Container>
      <Body />
      <Arm className='left' />
      <Arm className='right' />
      <Leg className='left' />
      <Leg className='right' />
      <Large className='left' />
      <Large className='right' />
      <Eye className='left'>
        <div className='center' />
      </Eye>
      <Eye className='right'>
        <div className='center' />
      </Eye>
      <Weapon>
        <div className='canyon'></div>
      </Weapon>
      <LineOne />
      <LineTwo />
      <Ball />
      <Floor />
    </Container>
  );
};
