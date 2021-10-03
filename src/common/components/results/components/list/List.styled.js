import styled from 'styled-components';
import { mediaQueries } from 'styles/config/media-queries';
import { StyledButton } from 'common/components/button/Button.styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  flex: 1;
  min-height: ${({ minHeight }) => (minHeight ? '355px' : 'auto')};
  margin-top: ${({ selectedItemHeight }) =>
    selectedItemHeight ? selectedItemHeight + 70 : 0}px;
  transition: margin-top 500ms ease-in-out;
  ${mediaQueries.portrait} {
    min-height: 375px;
    max-width: 50%;
    align-items: center;
    margin-top: 0;
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
    cursor: pointer;
    border-bottom: 2px solid transparent;
    font-size: ${({ theme }) => theme.typography.results.normal};
    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.palette.primary};
    }
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  ${StyledButton} + ${StyledButton} {
    margin-left: 40px;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;
