import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.footer`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  width: 100%;
  height: 100%;
  padding: 0 5.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Atribution = styled.span`
  margin: 0 2.6rem;
  font-style: normal;
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 3.6rem;
  color: ${colors.black};
`;

export const Icons = styled.a`
  margin: 0 0.9rem;
`;
