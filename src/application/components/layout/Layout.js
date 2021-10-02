import { Main, Wrapper } from './Layout.styled';
import Header from './components/header';
import Footer from './components/footer';

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default Layout;
