import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.div`
  width: 46.7rem;
  height: 58.2rem;
  padding: 3.9rem 4.8rem 4.8rem;
  border: 0.3rem solid ${colors.black};
  margin: 0 7.1rem;
  box-sizing: border-box;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.3fr 0.7fr 1fr;
  background-color: ${(props) => props.bgColor};
`;

export const Title = styled.h2`
  grid-column: 1 / 3;
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 5.4rem;
  text-align: center;
  color: ${colors.white};
`;

export const Life = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LifeValue = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 4.5rem;
  color: ${colors.white};
`;

export const LifeBar = styled.div`
  width: 21.5rem;
  height: 5rem;
  border: 0.3rem solid ${colors.black};
  box-sizing: border-box;
  border-radius: 3rem;
  display: flex;
  overflow: hidden;
  & .life-remaining {
    width: ${(props) => props.remaining || '50%'};
    height: 4.4rem;
    background-color: ${colors.cuaternary};
  }
  & .life-eliminated {
    width: ${(props) => props.eliminated || '50%'};
    height: 4.4rem;
    background-color: ${colors.primary};
  }
`;

export const Button = styled.button`
  grid-column: 2 / 3;
  width: 12rem;
  height: 12rem;
  border: 0.3rem solid ${colors.black};
  box-sizing: border-box;
  border-radius: 10rem;
  background-color: ${colors.primary};
  box-shadow: 0.4rem 0.8rem 0rem 0rem ${colors.black};
  & span {
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 5.4rem;
    color: ${colors.white};
  }
`;

export const Character = styled.div`
  grid-column: 1 / 3;
  width: 37rem;
  height: 23.1rem;
  background-color: ${colors.white};
  border: 0.3rem solid ${colors.black};
  box-sizing: border-box;
  border-radius: 2rem;
`;
