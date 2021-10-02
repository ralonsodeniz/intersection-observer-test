import styled, { css } from 'styled-components';
import { breakPoints, mediaQueries } from 'styles/config/media-queries';
import { ReactComponent as GitHubLogo } from 'assets/svg/github.svg';

const textStyles = css`
  color: ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.typography.footer.small}px;
  ${mediaQueries.portrait} {
    font-size: ${({ theme }) => theme.typography.footer.normal}px;
  }
  ${mediaQueries.smallMobileOnly} {
    font-size: ${({ theme }) => theme.typography.footer.xsmall}px;
  }
`;

export const Root = styled.footer`
  background-color: ${({ theme }) => theme.palette.secondary};
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  ${mediaQueries.portrait} {
    padding: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${breakPoints.bigDesktop}px;
  ${textStyles};
`;

export const Info = styled.div`
  display: flex;
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  ${textStyles};
`;
export const StyledGithubLogo = styled(GitHubLogo)`
  fill: ${({ theme }) => theme.palette.primary};
  width: ${({ theme }) => theme.typography.footer.small}px;
  ${mediaQueries.portrait} {
    width: ${({ theme }) => theme.typography.footer.normal}px;
  }
`;

export const Copyright = styled.div`
  display: flex;
`;
