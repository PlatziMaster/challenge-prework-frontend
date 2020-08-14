import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.div`
  grid-column: ${(props) => props.gc};
  width: 100%;
  height: 100%;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: ${colors.primary};
  }
  &::before {
    width: ${(props) => props.b1};
    height: ${(props) => props.b1};
    top: ${(props) => props.t1};
    left: ${(props) => props.l1};
    right: ${(props) => props.r1};
  }
  &::after {
    width: ${(props) => props.b2};
    height: ${(props) => props.b2};
    top: ${(props) => props.t2};
    left: ${(props) => props.l2};
    right: ${(props) => props.r1};
  }
`;
