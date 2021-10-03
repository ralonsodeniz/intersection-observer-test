import { useState } from 'react';
import { useSearchSelector } from 'application/context/search';
import { selectCategory, selectItem } from 'application/context/search/reducer';
import { useGetClientRect } from 'common/hooks/use-get-client-rect';
import { Title, Root, Info } from './Results.styled';
import List from './components/list';
import { literals } from './literals';
import SelectedItem from './components/selected-item';
import Search from './components/search';

const Results = () => {
  const [search, setSearch] = useState('');
  const category = useSearchSelector(selectCategory);
  const selectedItem = useSearchSelector(selectItem);
  const hasCategory = category || null;
  const hasSelectedItem = selectedItem || null;
  const {
    getItemRect,
    rect: { height },
  } = useGetClientRect(!hasSelectedItem);

  return (
    <Root>
      <Title>{category || literals.title.default}</Title>
      {hasCategory && <Search setSearch={setSearch} />}
      <Info>
        {hasCategory && (
          <List
            category={category}
            selectedItemHeight={height}
            search={search}
          />
        )}
        {hasSelectedItem && (
          <SelectedItem
            selectedItem={selectedItem}
            getItemHeight={getItemRect}
          />
        )}
      </Info>
    </Root>
  );
};

export default Results;
