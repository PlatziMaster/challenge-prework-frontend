import { css, keyframes } from 'styled-components';

// Animations

const tada = keyframes`
  to {
    transform: scale(1);
    opacity: 1
  }
`;

export const tadaAnimation = css`
  animation: ${tada} 100ms linear forwards;
`;
