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
  top: 50%;
  left: 38%;
  z-index: 0;
  background-color: ${heros.color7};
`;

export const Arm = styled.div`
  width: 8rem;
  height: 3.5rem;
  border-radius: 5rem;
  position: absolute;
  z-index: -1;
  background-color: ${heros.color8};
  &.left {
    transform: rotate(330deg);
    top: 8rem;
    right: 0rem;
  }
  &.right {
    top: 11rem;
    left: 2rem;
  }
`;

export const Leg = styled.div`
  width: 2rem;
  height: 4rem;
  border-radius: 5rem;
  position: absolute;
  z-index: -1;
  background-color: ${heros.color1};
  &.left {
    right: 6rem;
    top: 13rem;
  }
  &.right {
    left: 8rem;
    top: 13rem;
    transform: rotate(25deg);
  }
`;

export const Face = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 28%;
  z-index: 1;
  background-color: ${heros.color9};
  &::before,
  &::after {
    content: '';
    width: 1.8rem;
    height: 0.5rem;
    border-radius: 1rem;
    position: absolute;
    background-color: ${heros.color1};
  }
  &::before {
    top: 22%;
    left: 10%;
    transform: rotate(20deg);
  }
  &::after {
    top: 22%;
    left: 52%;
    transform: rotate(-20deg);
  }
  & .eye {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    background-color: ${colors.black};
    &.left {
      top: 30%;
      left: 58%;
    }
    &.right {
      top: 30%;
      left: 12%;
    }
  }
  & .nose {
    width: 2rem;
    height: 3rem;
    border-radius: 2rem;
    position: absolute;
    top: 30%;
    left: 28%;
    z-index: 4;
    background-color: ${heros.color11};
  }
`;

export const Floor = styled.div`
  width: 14rem;
  height: 2rem;
  border-radius: 1rem;
  position: absolute;
  top: 90%;
  left: 20%;
  z-index: -2;
  background-color: #d4e0e6;
`;

export const Mouth = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  background-color: ${colors.black};
  top: 45%;
  left: 45%;
  z-index: 2;
  overflow: hidden;
  &::before {
    content: '';
    width: 3rem;
    height: 1.2rem;
    transform: rotate(-20deg);
    position: absolute;
    top: 1%;
    left: -8%;
    background-color: ${colors.white};
  }
  &::after {
    content: '';
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transform: rotate(-20deg);
    position: absolute;
    top: 62%;
    left: 20%;
    background-color: ${heros.color10};
  }
`;
