import { Container, Body, Arm, Leg, Eye } from './styles';

export const Hero1 = () => {
  return (
    <Container>
      <Body />
      <Arm className='left' />
      <Arm className='right' />
      <Leg className='left' />
      <Leg className='right' />
      <Eye className='left'>
        <div className='center' />
      </Eye>
      <Eye className='right'>
        <div className='center' />
      </Eye>
    </Container>
  );
};

{
  /* <div>
  <div className='body'></div>
  <div className='arm'></div>
  <div className='arm'></div>
  <div className='arm'></div>
  <div className='arm'></div>
  <div className='eye'>
    <div className='large'></div>
    <div className='ball'>
      <div className='point'></div>
    </div>
  </div>
  <div className='eye'>
    <div className='large'></div>
    <div className='ball'>
      <div className='point'></div>
    </div>
  </div>
  <div className='weapon'>
    <div className='body'></div>
    <div className='canyon'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='ball'></div>
    </div>
  </div>
  <div className='floor'></div>
</div>; */
}
