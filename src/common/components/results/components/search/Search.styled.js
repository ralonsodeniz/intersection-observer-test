import styled, { css } from 'styled-components';
import { mediaQueries } from 'styles/config/media-queries';

const miniLabelStyles = css`
  font-size: 12px;
  top: -25px;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  margin-top: 40px;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
  align-items: flex-end;
  ${mediaQueries.portrait} {
    max-width: 400px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 20px;
  color: ${({ theme }) => theme.palette.gradients.header};
  ${({ miniLabel }) => miniLabel && miniLabelStyles};
  transition: top 250ms ease-in-out, font-size 250ms ease-in-out,
    color 250ms ease-in-out;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.palette.primary};
`;
