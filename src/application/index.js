import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import Home from 'pages/home';
import { GlobalStyle } from 'styles/GlobalStyle';
import styledTheme from 'styles/theme';
import {swrConfig} from './http/swr';
import Layout from './components/layout';
import SearchProvider from './context/search';

const App = () => (
  <ThemeProvider theme={styledTheme}>
    <SearchProvider>
      <SWRConfig value={swrConfig}>
        <GlobalStyle />
        <Layout>
          <Home />
        </Layout>
      </SWRConfig>
    </SearchProvider>
  </ThemeProvider>
);

export default App;
