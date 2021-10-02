import { useSearchSelector } from 'application/context/search';
import { selectCategory, selectItem } from 'application/context/search/reducer';
import { useGetClientRect } from 'common/hooks/use-get-client-rect';
import { Title, Root, Info } from './Results.styled';
import List from './components/list';
import { literals } from './literals';
import SelectedItem from './components/selected-item';

const Results = () => {
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
      <Info>
        {hasCategory && (
          <List category={category} selectedItemHeight={height} />
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
