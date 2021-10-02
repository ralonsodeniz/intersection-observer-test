import { images } from 'common/enums/images';
import Figure from 'common/components/figure';
import { Root } from './OpeningImage.styled';

const OpeningImage = () => (
  <Root>
    <Figure
      desktop={images.homeOpening.desktop}
      mobile={images.homeOpening.mobile}
      tablet={images.homeOpening.tablet}
      title={'home-opening'}
      fullWidth
    />
  </Root>
);

export default OpeningImage;
