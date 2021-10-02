import PropTypes from 'prop-types';
import { useGetClientRect } from 'common/hooks/use-get-client-rect';
import { useSearchDispatch } from 'application/context/search';
import { setCategory, setItem } from 'application/context/search/actions';
import { ListItem } from './Item.styled';

const Item = ({ category, onClick }) => {
  const {
    rect: { width },
    getItemRect,
  } = useGetClientRect();
  const dispatch = useSearchDispatch();
  const handleClick = () => {
    dispatch(setCategory(category));
    dispatch(setItem(null));
    onClick();
  };

  return (
    <ListItem ref={getItemRect} itemWidth={width} onClick={handleClick}>
      {category}
    </ListItem>
  );
};

Item.propTypes = {
  category: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
};

export default Item;
