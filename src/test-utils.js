import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import SearchProvider from 'application/context/search';
import theme from 'styles/theme';

const mockInterceptionObserver = () => {
  window.IntersectionObserver = jest.fn();
  window.IntersectionObserver.mockImplementation(() => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  }));
}

const customRender = (ui, { customEntries, ...options } = {}) => {
  const AllTheProviders = ({ children }) => (
    <SearchProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SearchProvider>
  );

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render, userEvent, mockInterceptionObserver };
