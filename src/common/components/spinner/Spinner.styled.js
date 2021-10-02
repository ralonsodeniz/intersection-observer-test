import styled, { keyframes } from 'styled-components';
import { mediaQueries } from '../../../styles/config/media-queries';

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Root = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ width }) => width || '35px'};
  height: ${({ height }) => height || '35px'};
  ${mediaQueries.portrait} {
    width: ${({ width }) => width || '50px'};
    height: ${({ height }) => height || '50px'};
  }
  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${({borderWidth}) => borderWidth || 4}px solid;
    border-color: ${({ theme }) => theme.palette.primary} transparent
      transparent transparent;
    border-radius: 50%;
    animation: ${spinnerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  & > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & > div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
