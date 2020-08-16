import styled from 'styled-components';
import { colors, size } from 'styles/variables';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 23rem 1fr 23rem;
  grid-template-rows: 25rem 1fr 12rem;
  align-items: center;
  justify-items: center;
`;

export const Heading = styled.h1`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 36.8rem;
  height: 9rem;
  font-style: normal;
  font-weight: bold;
  font-size: 6rem;
  line-height: 9rem;
  color: ${colors.black};
  text-align: center;
`;

export const Cards = styled.section`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  @media (min-width: ${size.laptop}) {
    flex-direction: row;
  }
`;
