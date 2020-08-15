import { css, keyframes } from 'styled-components';

// Animations

const tada = keyframes`
  to {
    transform: scale(1);
    opacity: 1
  }
`;

const bg = keyframes`
  to {
    z-index: 8;
    opacity: 1
  }
`;

export const tadaAnimation = css`
  animation: ${tada} 100ms linear forwards;
`;

export const bgAnimation = css`
  animation: ${bg} 100ms linear forwards;
`;
