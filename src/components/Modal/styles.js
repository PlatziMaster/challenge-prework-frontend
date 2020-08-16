import styled from 'styled-components';
import { colors, size } from 'styles/variables';
import { tadaAnimation } from 'styles/animation';

export const Background = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  padding-top: 10rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: ${colors.black}b3;
`;

export const Container = styled.div`
  max-width: 117.7rem;
  width: 90%;
  height: 78rem;
  margin: 0 auto;
  border: 0.3rem solid ${colors.black};
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  background-color: ${colors.white};
  opacity: 0;
  transform: scale(0);
  &.animated {
    ${tadaAnimation}
  }
  @media (min-width: ${size.laptop}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ImageContainer = styled.div`
  width: 56.4rem;
  height: 57.7rem;
  margin: 10.2rem 1rem 10.2rem 10.1rem;
  border: 0.3rem solid ${colors.black};
  box-sizing: border-box;
  border-radius: 0.2rem;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 56.4rem;
  height: 57.7rem;
  margin: 10.2rem 10.2rem 10.1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h2`
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 5.4rem;
`;

export const Winner = styled.p`
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 5.4rem;
`;

export const Button = styled.button`
  width: 27.4rem;
  height: 7.8rem;
  margin: 4.9rem auto;
  background: ${colors.primary};
  border: 3px solid ${colors.black};
  box-sizing: border-box;
  border-radius: 4rem;
  cursor: pointer;
  & span {
    font-weight: bold;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: ${colors.white};
  }
`;
