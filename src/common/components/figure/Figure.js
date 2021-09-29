import PropTypes from "prop-types";
import { breakPoints } from "styles/config/media-queries";
import { Image, Picture, Root } from "./Figure.styled";

const Figure = ({ mobile, tablet, desktop, title, aspectRatio, fullWidth }) => (
  <Root>
    <Picture aspectRatio={aspectRatio}>
      <source media={`(min-width:${breakPoints.portrait}px)`} srcSet={tablet} />
      <source media={`(min-width:${breakPoints.desktop}px)`} srcSet={desktop} />
      <Image src={mobile} alt={title} fullWidth={fullWidth} />
    </Picture>
  </Root>
);

Figure.propTypes = {
  mobile: PropTypes.string,
  tablet: PropTypes.string,
  desktop: PropTypes.string,
  title: PropTypes.string,
  aspectRatio: PropTypes.number,
  fullWidth: PropTypes.bool,
};

export default Figure;
