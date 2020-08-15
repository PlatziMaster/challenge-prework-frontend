import styled from 'styled-components';
import { colors } from 'styles/variables';
import { tadaAnimation, bgAnimation } from 'styles/animation';

export const Background = styled.div`
  width: 100vw;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -9;
  background-color: ${colors.black}b3;
  &.animated {
    ${bgAnimation}
  }
`;

export const Container = styled.div`
  width: 117.7rem;
  height: 78rem;
  border: 0.3rem solid ${colors.black};
  box-sizing: border-box;
  border-radius: 20px;
  opacity: 0;
  display: flex;
  position: absolute;
  z-index: 9;
  background-color: ${colors.white};
  transform: scale(0);
  &.animated {
    ${tadaAnimation}
  }
`;

export const ImageContainer = styled.div`
  width: 56.4rem;
  height: 57.7rem;
  margin: 10.2rem 0 10.2rem 10.1rem;
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
  margin: 10.2rem 10.2rem 10.1rem 0;
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
