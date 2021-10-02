import { render, mockInterceptionObserver } from 'test-utils';
import Header from '../Header';
import { server } from './server';
import { findCategories, getLogo, getSpinner, querySpinner } from './selectors';
import { categories as mockedCategories } from './mocks';

const renderComponent = () => render(<Header />);

describe('Header tests', () => {
  beforeAll(() => server.listen());
  beforeEach(() => mockInterceptionObserver());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render Header component', () => {
    const { container } = renderComponent();

    expect(container).not.toBeEmptyDOMElement();
  });

  it('should render the logo', () => {
    renderComponent();
    const logo = getLogo();

    expect(logo).toBeInTheDocument();
  });

  it('should render the spinner while loading categories', () => {
    renderComponent();
    const spinner = getSpinner();

    expect(spinner).toBeInTheDocument();
  });

  it('should render received categories from the api', async () => {
    renderComponent();
    const categories = await findCategories();

    expect(categories.length).toEqual(Object.keys(mockedCategories).length);

    const spinner = querySpinner();

    expect(spinner).toBeNull();
  });
});
