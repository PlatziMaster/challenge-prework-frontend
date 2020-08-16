import { Container, Atribution, Icons } from './styles';

export const Footer = () => {
  return (
    <>
      <Container>
        <Atribution>Made by @Diegoalesco95</Atribution>
        <Icons
          href='https://github.com/Diegoalesco95'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='https://img.icons8.com/ios-glyphs/40/000000/github.png'
            alt='github'
          />
        </Icons>
        <Icons
          href='https://twitter.com/Diegoalesco95'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='https://img.icons8.com/android/35/000000/twitter.png'
            alt='twitter'
          />
        </Icons>
        <Icons
          href='https://www.linkedin.com/in/diegoalesco95/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='https://img.icons8.com/android/35/000000/linkedin.png'
            alt='linkedin'
          />
        </Icons>
      </Container>
    </>
  );
};
