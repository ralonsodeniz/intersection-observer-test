import PropTypes from 'prop-types';
import { Item, List, Root, Title } from './SelectedItem.styled';
import { useParseItem } from './hooks/use-parse-item';

const SelectedItem = ({ selectedItem, getItemHeight }) => {
  const parsedItem = useParseItem(selectedItem);
  const hasParsedItem = parsedItem || null;

  return (
    hasParsedItem && (
      <Root ref={getItemHeight}>
        <List>
          {parsedItem.map(property => (
            <Item key={property.attribute}>
              <Title>{property.attribute}:</Title>&nbsp;{property.value}
            </Item>
          ))}
        </List>
      </Root>
    )
  );
};

SelectedItem.propTypes = {
  selectedItem: PropTypes.object,
  getItemHeight: PropTypes.func,
};

export default SelectedItem;
