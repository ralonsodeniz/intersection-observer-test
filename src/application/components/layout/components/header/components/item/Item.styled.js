import styled from 'styled-components';
import { mediaQueries } from 'styles/config/media-queries';

export const ListItem = styled.li`
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.header.small}px;
  ${mediaQueries.portrait} {
    font-size: ${({ theme }) => theme.typography.header.normal}px;
  }
  ${mediaQueries.desktop} {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 3px;
      height: 2px;
      width: 0;
      transition: width 250ms ease-in-out;
      background-color: ${({ theme }) => theme.palette.primary};
      pointer-events: none;
    }
    &:hover {
      &:after {
        width: ${({ itemWidth }) => itemWidth}px;
      }
    }
  }
`;
