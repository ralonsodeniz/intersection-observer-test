import styled, { css } from 'styled-components';

const disabledButtonStyles = css`
  pointer-events: none;
  background-color: ${({ theme }) => theme.palette.gradients.header};
  cursor: not-allowed;
`;

export const StyledButton = styled.button`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.secondary};
  padding: 10px;
  appearance: none;
  border: none;
  width: 100px;
  ${({ enabled }) => !enabled && disabledButtonStyles};
`;
