import { GlobalStyle } from '../styles/GlobalStyle';
import Home from "pages/home";
import Layout from './components/layout';

const App = () => (
  <>
    <GlobalStyle />
    <Layout>
        <Home />
    </Layout>
  </>
);

export default App;
