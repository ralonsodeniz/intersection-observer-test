import styled, { css, keyframes } from 'styled-components';
import { mediaQueries } from 'styles/config/media-queries';
import { desktopContainer } from 'styles/config/variables';
import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';
import { ListItem } from './components/item/Item.styled';

const headerHeight = {
  desktop: 70,
  mobile: 55,
};

const listAnimationOpen = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const listAnimationClose = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const textStyles = css`
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.header.small}px;
  ${mediaQueries.portrait} {
    font-size: ${({ theme }) => theme.typography.header.normal}px;
  }
`;

const stickyStyles = css`
  background-color: ${({ theme }) => theme.palette.secondary};
  top: 0;
  ${mediaQueries.portrait} {
    top: 0;
  }
`;

export const StickySentinel = styled.div`
  background-color: transparent;
  height: calc((100vw * 0.5625) - ${headerHeight.mobile}px);
  width: 100%;
  position: absolute;
  ${mediaQueries.portrait} {
    height: calc((100vw * 0.5625) - ${headerHeight.desktop}px);
  }
  ${mediaQueries.desktop} {
    height: 40vh;
  }
`;

export const Root = styled.header`
  position: sticky;
  z-index: 1;
  transition: background-color ease-in-out 250ms, top ease-in-out 250ms;
  top: 0;
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.gradients.header};
  ${mediaQueries.portrait} {
    top: 0;
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

export const Categories = styled.nav`
  height: 100%;
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ toggleDisabled }) =>
    toggleDisabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${({ toggleDisabled }) => (toggleDisabled ? 'none' : 'auto')};
  z-index: 1;
  ${mediaQueries.portrait} {
    display: none;
  }
`;

export const Text = styled.span`
  ${textStyles};
`;

export const StyledArrow = styled(({ open, toggleDisabled, ...props }) => (
  <Arrow {...props} />
))`
  transition: transform 500ms ease-in-out;
  width: ${({ theme }) => theme.typography.header.small}px;
  fill: ${({ theme }) => theme.palette.primary};
  transform: ${({ open }) => (open ? 'rotateZ(0)' : 'rotateZ(180deg)')};
  margin-left: 5px;
`;

export const ListBackground = styled.div`
  position: fixed;
  top: ${headerHeight.mobile}px;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.gradients.header};
  pointer-events: ${({ toggleDisabled }) => (toggleDisabled ? 'none' : 'auto')};
  ${mediaQueries.portrait} {
    display: none;
  }
`;

export const List = styled.ul`
  display: ${({ showList }) => (showList ? 'flex' : 'none')};
  padding: 10px;
  background-color: ${({ theme }) => theme.palette.secondary};
  position: fixed;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100%;
  min-width: 40%;
  margin-left: auto;
  align-items: flex-end;
  animation: ${({ open }) => (open ? listAnimationOpen : listAnimationClose)}
    500ms forwards;
  transition: background-color ease-in-out 250ms;
  ${ListItem} {
    margin-top: 7px;
    &:first-of-type {
      margin-top: ${headerHeight.mobile}px;
    }
  }
  ${mediaQueries.portrait} {
    display: flex;
    flex-direction: row;
    position: relative;
    top: initial;
    right: initial;
    align-items: center;
    animation: none;
    background-color: transparent;
    ${ListItem} {
      margin-top: 0;
      margin-left: 10px;
      &:first-of-type {
        margin-top: 0;
      }
    }
  }
  ${mediaQueries.mobileOnly} {
    &:before {
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.palette.primary};
      width: 90%;
      top: ${headerHeight.mobile}px;
      left: 0;
      height: 2px;
      margin: 0 5%;
      border-radius: 4px;
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 35px;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.palette.primary};
  }
  ${mediaQueries.portrait} {
    width: 50px;
  }
`;
