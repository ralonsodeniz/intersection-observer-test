import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'common/components/button';
import { CloseContainer, Input, Label, Root, CloseIcon } from './Search.styled';
import { literals } from './literals';

const Search = ({ setSearch }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const hasMiniLabel = value || focused;
  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  const handleSearch = () => setSearch(value);
  const handleFocusIn = () => setFocused(true);
  const handleFocusOut = () => setFocused(false);
  const handleKeyPress = event => {
    const { code } = event;
    if (code === 'NumpadEnter' || code === 'Enter') setSearch(value);
  };
  const handleClearSearch = () => setValue('')

  return (
    <Root>
      <Label htmlFor="search" miniLabel={hasMiniLabel}>
        {literals.label}
      </Label>
      <Input
        id="search"
        value={value}
        onChange={handleChange}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
        onKeyUp={handleKeyPress}
        type="text"
      />
      <CloseContainer onClick={handleClearSearch}>
        <CloseIcon />
      </CloseContainer>
      <Button type="button" onClick={handleSearch} enabled>
        {literals.button}
      </Button>
    </Root>
  );
};

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default Search;
