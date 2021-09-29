import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: ${({ aspectRatio }) => aspectRatio || 56.25}%;
  overflow: hidden;
`;

export const Picture = styled.picture`
  display: block;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100%;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  margin: ${({ fullWidth }) => (fullWidth ? 0 : "0 auto")};
`;
