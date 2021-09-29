import { ReactComponent as ReactLogo } from "assets/svg/react-logo.svg";
import { useIsSticky } from "common/hooks/useIsSticky";
import {
  Content,
  Link,
  LinksContainer,
  LogoContainer,
  Root,
  StickySentinel,
} from "./Header.styled";

const Header = () => {
  const { sentinelRef, isSticky } = useIsSticky();

  return (
    <>
      <StickySentinel ref={sentinelRef} />
      <Root isSticky={isSticky}>
        <Content>
          <LogoContainer>
            <ReactLogo />
          </LogoContainer>
          <LinksContainer>
            <Link>More Content</Link>
            <Link>New Item</Link>
          </LinksContainer>
        </Content>
      </Root>
    </>
  );
};

export default Header;
