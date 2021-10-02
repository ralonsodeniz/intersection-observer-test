import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/svg/darth-vader.svg';
import { useIsSticky } from 'common/hooks/use-is-sticky';
import { useGetCategories } from 'application/http/swr/hooks/useGetCategories';
import Spinner from 'common/components/spinner';
import { useSearchDispatch } from 'application/context/search';
import { setCategory, setItem } from 'application/context/search/actions';
import { literals } from './literals';
import Item from './components/item';
import {
  Content,
  LogoContainer,
  Root,
  StickySentinel,
  SpinnerContainer,
  Categories,
  List,
  Info,
  StyledArrow,
  Text,
  ListBackground,
} from './Header.styled';
import { testIds } from './__test__/test-ids';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showList, setShowList] = useState(false);
  const [toggleDisabled, setToggleDisabled] = useState(false);
  const dispatch = useSearchDispatch();
  const { sentinelRef, isSticky } = useIsSticky();
  const { data, isLoading, error } = useGetCategories();
  const showBackground = open || null;
  const handleToggle = event => {
    event.stopPropagation();
    setOpen(prevState => {
      if (!prevState) setShowList(true);
      return !prevState;
    });
  };
  const handleClose = () => setOpen(false);
  const handleAnimationEnd = () => {
    if (!open) setShowList(false);
    setToggleDisabled(false);
  };
  const handleAnimationStart = () => setToggleDisabled(true);
  const handleClickLogo = () => {
    dispatch(setCategory(null));
    dispatch(setItem(null));
  };
  const handleClickHeader = () => setOpen(prevState => prevState && false);
  const stopPropagation = event => event.stopPropagation();

  return (
    <>
      <StickySentinel ref={sentinelRef} />
      <Root isSticky={isSticky} onClick={handleClickHeader}>
        <Content>
          <LogoContainer onClick={handleClickLogo} data-testid={testIds.logo}>
            <Logo />
          </LogoContainer>
          {!isLoading && !error ? (
            <Categories>
              <Info onClick={handleToggle} toggleDisabled={toggleDisabled}>
                <Text>{literals.categories}</Text>
                <StyledArrow open={open} />
              </Info>
              {showBackground && (
                <ListBackground
                  onClick={handleClose}
                  toggleDisabled={toggleDisabled}
                />
              )}
              <List
                open={open}
                isSticky={isSticky}
                onAnimationEnd={handleAnimationEnd}
                onAnimationStart={handleAnimationStart}
                showList={showList}
                onClick={stopPropagation}
              >
                {Object.entries(data).map(([category, url], index) => (
                  <Item
                    key={index}
                    category={category}
                    url={url}
                    onClick={handleClose}
                  />
                ))}
              </List>
            </Categories>
          ) : (
            <SpinnerContainer data-testid={testIds.spinner}>
              <Spinner />
            </SpinnerContainer>
          )}
        </Content>
      </Root>
    </>
  );
};

export default Header;
