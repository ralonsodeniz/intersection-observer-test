import styled, { css } from "styled-components";
import { mediaQueries } from "styles/config/media-queries";
import { desktopContainer } from "styles/config/variables";

const stickyThreshold = {
  desktop: 35,
  mobile: 25,
};

const stickyStyles = css`
  background-color: blanchedalmond;
  top: 0;
  ${mediaQueries.portrait} {
    top: 0;
  }
`;

export const StickySentinel = styled.div`
  background-color: transparent;
  height: ${stickyThreshold.mobile}px;
  width: 100%;
  position: absolute;
  ${mediaQueries.portrait} {
    height: ${stickyThreshold.desktop}px;
  }
`;

export const Root = styled.header`
  position: sticky;
  z-index: 1;
  transition: background-color ease-in-out 0.5s, top ease-in-out 0.5s;
  top: -${stickyThreshold.mobile}px;
  padding: 10px;
  width: 100%;
  background-color: transparent;
  ${mediaQueries.portrait} {
    top: -${stickyThreshold.desktop}px;
  }
  ${({ isSticky }) => isSticky && stickyStyles}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  ${mediaQueries.bigDesktop} {
    margin: 0 auto;
    width: ${desktopContainer}px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: cornflowerblue;
  cursor: pointer;
`;

export const LinksContainer = styled.nav`
  height: 100%;
  display: flex;
  margin-left: auto;
  align-items: center;
  ${Link} + ${Link} {
    margin-left: 10px;
  }
`;

export const LogoContainer = styled.div`
  width: 50px;
`;
