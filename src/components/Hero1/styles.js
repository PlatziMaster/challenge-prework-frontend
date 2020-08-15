import styled from 'styled-components';
import { heros } from 'styles/variables';
import { colors } from 'styles/variables';

export const Container = styled.div`
  width: 20.9rem;
  height: 17.7rem;
  position: relative;
  margin: 2.7rem auto;
  z-index: 1;
  transform: rotateY(180deg);
`;

export const Body = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 40%;
  z-index: 0;
  background-color: ${heros.color4};
`;

export const Arm = styled.div`
  width: 4rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: #6ec0c4;
  position: absolute;
  &.left {
    transform: rotate(45deg);
    right: 5rem;
    top: 10rem;
    z-index: 8;
  }
  &.right {
    transform: rotate(10deg);
    left: 7rem;
    top: 10rem;
    z-index: -1;
  }
`;

export const Leg = styled.div`
  width: 3rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: ${heros.color4};
  position: absolute;
  &.left {
    transform: rotate(20deg);
    right: 6rem;
    top: 13rem;
    z-index: -2;
    background-color: #25585b;
  }
  &.right {
    transform: rotate(-45deg);
    left: 8rem;
    top: 14rem;
  }
`;

export const Large = styled.div`
  width: 1rem;
  height: 6rem;
  background-color: ${heros.color4};
  position: absolute;
  &.left {
    top: 6rem;
    left: 12rem;
  }
  &.right {
    top: 6rem;
    left: 9rem;
    background-color: #317477;
    z-index: -1;
  }
`;

export const Eye = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${heros.color4};
  position: absolute;
  .center {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 0.8rem auto;
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
    top: 3rem;
    left: 6rem;
  }
  &.right {
    top: 3rem;
    left: 9rem;
    z-index: 3;
  }
`;

export const Weapon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: absolute;
  top: 44%;
  left: 15%;
  background-color: ${heros.color1};
  & .canyon {
    width: 4rem;
    height: 0.5rem;
    position: absolute;
    top: 39%;
    left: -59%;
    background-color: ${heros.color1};
  }
`;

export const LineOne = styled.div`
  width: 0.5rem;
  height: 4rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 45%;
  left: 10%;
  background-color: ${heros.color2};
`;
export const LineTwo = styled.div`
  width: 0.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 48%;
  left: 5%;
  background-color: ${heros.color2};
`;

export const Ball = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 53%;
  left: -3%;
  background-color: ${heros.color1};
`;

export const Floor = styled.div`
  width: 14rem;
  height: 2rem;
  position: absolute;
  background-color: #d4e0e6;
  top: 90%;
  left: 20%;
  border-radius: 1rem;
  z-index: -2;
`;
