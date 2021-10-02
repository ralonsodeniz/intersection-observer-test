import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useGetCategory } from 'application/http/swr/hooks/useGetCategory';
import Spinner from 'common/components/spinner';
import { useSearchDispatch } from 'application/context/search';
import { setItem } from 'application/context/search/actions';
import {
  Item,
  Root,
  Button,
  ButtonsContainer,
  SpinnerContainer,
  ListContainer,
} from './List.styled';
import { literals } from './literals';

const List = ({ category, selectedItemHeight }) => {
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_API_URL}/${category}/?page=1`,
  );
  const dispatch = useSearchDispatch();
  const { data, isLoading } = useGetCategory(url);
  const { results, next, previous } = data || {};
  const hasMoreItems = next || null;
  const hasPreviousItems = previous || null;
  const hasItems = results || null;
  const handleClickNext = () => setUrl(next);
  const handleClickPrevious = () => setUrl(previous);
  const handleSelectItem = id => dispatch(setItem(id));

  useEffect(() => {
    setUrl(`${process.env.REACT_APP_API_URL}/${category}/?page=1`);
  }, [category]);

  return (
    <Root selectedItemHeight={selectedItemHeight}>
      {!isLoading ? (
        <ListContainer>
          {hasItems &&
            results.map(item => (
              <Item
                key={item.name || item.title}
                onClick={() => handleSelectItem(item)}
              >
                {item.name || item.title}
              </Item>
            ))}
        </ListContainer>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      <ButtonsContainer>
        <Button onClick={handleClickPrevious} enabled={hasPreviousItems}>
          {literals.previousButton}
        </Button>
        <Button onClick={handleClickNext} enabled={hasMoreItems}>
          {literals.nextButton}
        </Button>
      </ButtonsContainer>
    </Root>
  );
};

List.propTypes = {
  category: PropTypes.string,
  selectedItemHeight: PropTypes.number,
};

export default List;
