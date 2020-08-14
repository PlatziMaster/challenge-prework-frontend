import styled from 'styled-components';
import { heros } from 'styles/variables';
import { colors } from 'styles/variables';

export const Container = styled.div`
  width: 20.9rem;
  height: 17.7rem;
  position: relative;
  margin: 2.7rem auto;
  z-index: 1;
`;

export const Body = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
  background-color: ${heros.color4};
`;

export const Arm = styled.div`
  width: 4rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: ${heros.color4};
  position: absolute;
  &.left {
    transform: rotate(45deg);
    right: 3rem;
    top: 7rem;
  }
  &.right {
    transform: rotate(10deg);
    left: 1rem;
    top: 6rem;
  }
`;

export const Leg = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: ${heros.color4};
  position: absolute;
  &.left {
    transform: rotate(20deg);
    right: 4rem;
    top: 11rem;
  }
  &.right {
    transform: rotate(133deg);
    left: 5rem;
    top: 13rem;
  }
`;

export const Eye = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${heros.color4};
  position: absolute;
  .center {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 1.25rem auto;
    background-color: ${colors.white};
    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: ${colors.black};
      position: absolute;
      top: 2rem;
      left: 1.8rem;
    }
  }

  &.left {
    left: 2rem;
    top: 0rem;
  }
  &.right {
    left: 6rem;
    top: 0rem;
    z-index: 3;
  }
`;
