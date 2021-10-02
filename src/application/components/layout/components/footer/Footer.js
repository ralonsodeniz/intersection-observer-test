import {
  Content,
  Link,
  Root,
  StyledGithubLogo,
  Info,
  Copyright,
} from './Footer.styled';
import { literals, urls } from './literals';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Root>
      <Content>
        <Info>
          <Link target="_blank" rel="noopener noreferrer" href={urls.github}>
            <StyledGithubLogo />
          </Link>
          &nbsp;
          &nbsp;
          {literals.ownership}
          &nbsp;
          <Link target="_blank" rel="noopener noreferrer" href={urls.api}>
            {literals.api}
          </Link>
          &nbsp;
          <Link target="_blank" rel="noopener noreferrer" href={urls.icons}>
            {literals.icons}
          </Link>
        </Info>
        <Copyright>
          &copy; &nbsp;
          {year}
        </Copyright>
      </Content>
    </Root>
  );
};

export default Footer;
