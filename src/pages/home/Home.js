import Figure from "common/components/figure";
import { images } from "common/enums/images";

const Home = () => {
  return (
    <>
      <Figure
        desktop={images.homeOpening.desktop}
        mobile={images.homeOpening.mobile}
        tablet={images.homeOpening.tablet}
        title={"home-opening"}
        fullWidth
      />
    </>
  );
};

export default Home;
