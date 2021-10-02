import styled from 'styled-components';
import { breakPoints, mediaQueries } from 'styles/config/media-queries';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${breakPoints.bigDesktop}px;
  margin: 30px auto 0;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary};
  font-size: ${({ theme }) => theme.typography.results.title.small}px;
  text-decoration: underline;
  text-transform: capitalize;
  text-decoration-color: ${({ theme }) => theme.palette.primary};
  align-self: center;
  ${mediaQueries.portrait} {
    font-size: ${({ theme }) => theme.typography.results.title.normal}px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${mediaQueries.portrait} {
    flex-direction: row;
    margin-top: 20px;
  }
`;
