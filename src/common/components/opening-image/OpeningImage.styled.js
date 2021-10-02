import styled from 'styled-components';
import { mediaQueries } from 'styles/config/media-queries';

export const Root = styled.div`
  overflow: hidden;
  ${mediaQueries.desktop} {
    max-height: 40vh;
    img {
      max-height: 40vh;
    }
  }
`;
