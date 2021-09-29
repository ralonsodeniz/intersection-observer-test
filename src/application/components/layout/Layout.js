import { Main, Wrapper } from "./Layout.styled";
import Header from "./components/header";

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>
      {children}
    </Main>
    <footer>Footer</footer>
  </Wrapper>
);

export default Layout;
