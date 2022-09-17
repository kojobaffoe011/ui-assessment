import React from "react";
import "../styles/landing-page.css";
import Flex from "../components/layout/Flex";
// import Tag from "../components/others/Tag";
import Background from "../assets/images/hero.jpg";
// import Background1 from "../assets/images/reward-tag.svg";
// import Background2 from "../assets/images/product-medium.jpg";
// import Background3 from "../assets/images/country-leagues/champions-league.jpg";
// import Background4 from "../assets/images/country-leagues/europa-league.jpg";
// import Background5 from "../assets/images/country-leagues/copa-america.jpg";
// import Background6 from "../assets/images/country-leagues/asian-cup.jpg";
// import Background7 from "../assets/images/country-leagues/caf.jpg";
// import Background8 from "../assets/images/other-collections/kids.jpg";
// import Background9 from "../assets/images/other-collections/large-sizes.jpg";
// import Background10 from "../assets/images/other-collections/goalkeeper.jpg";
// import Background11 from "../assets/images/other-collections/pro-player.jpg";
// import Background12 from "../assets/images/other-collections/shorts.jpg";
// import Background13 from "../assets/images/other-collections/socks.jpg";
// import Background14 from "../assets/images/personalization.jpg";
// import Background15 from "../assets/images/social-networks.jpg";

import Grid, { GridItem } from "../components/layout/Grid";
import Button from "../components/button/Button";

const LandingBanner = () => {
  return (
    <Flex stack={true} spacing={40}>
      <div className="banner">
        <img className="banner-photo" src={Background} alt="bannner" />
      </div>
      <Grid span={12} spacing={16} className="bordered">
        <GridItem className="bordered" span={3}>
          <Flex stack={true} style={{ padding: "32px" }}>
            <div className="bordered bg-primary">
              <p className="bordered"></p>
            </div>
            <div>a</div>
          </Flex>
        </GridItem>
        <GridItem className="bordered" span={3}>
          a
        </GridItem>
        <GridItem className="bordered" span={3}>
          a
        </GridItem>
        <GridItem className="bordered" span={3}>
          a
        </GridItem>
      </Grid>
    </Flex>
  );
};

const MainPage = () => {
  return (
    <Flex
      className=" landing-banner bordered"
      stack={true}
      spacing={40}
      md={12}
    >
      <LandingBanner />
    </Flex>
  );
};

export default MainPage;
