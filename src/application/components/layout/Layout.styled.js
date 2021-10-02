import styled from "styled-components";

const headerOffset = 70;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  position: relative;
  margin-top: -${headerOffset}px;
`;
