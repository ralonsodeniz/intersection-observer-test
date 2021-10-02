import styled, { keyframes } from 'styled-components';
import { mediaQueries } from 'styles/config/media-queries';

const listAnimationMobile = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const listAnimationDesktop = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Root = styled.div`
  position: absolute;
  display: flex;
  padding: 0 10px;
  margin-bottom: 70px;
  width: 100%;
  animation: ${listAnimationMobile} 500ms forwards;
  &:before {
    content: '';
    position: absolute;
    bottom: -45px;
    left: 0;
    width: 70%;
    height: 5px;
    background-color: ${({ theme }) => theme.palette.primary};
    border-radius: 4px;
    margin-left: 15%;
  }
  ${mediaQueries.portrait} {
    position: relative;
    max-width: 50%;
    animation: ${listAnimationDesktop} 500ms forwards;
    margin-bottom: 0;
    &:before {
      width: 5px;
      height: 70%;
      bottom: auto;
      top: 0;
      margin: 50px 0 0 0;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mediaQueries.portrait} {
    padding: 0 40px;
  }
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.palette.secondary};
  font-size: ${({ theme }) => theme.typography.results.small};
  margin-top: 10px;
  &:first-of-type {
    margin-top: 20px;
  }
  ${mediaQueries.desktop} {
    font-size: ${({ theme }) => theme.typography.results.normal};
  }
`;

export const Title = styled.span`
  font-weight: bold;
`;
