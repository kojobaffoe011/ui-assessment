import React from "react";
import "../styles/landing-page.css";
import Flex from "../components/layout/Flex";
// import Tag from "../components/others/Tag";
import Background from "../assets/images/hero.jpg";
import Background1 from "../assets/images/reward-tag.svg";
import Background2 from "../assets/images/product-medium.jpg";
import Background3 from "../assets/images/country-leagues/champions-league.jpg";
// import Background4 from "../assets/images/country-leagues/europa-league.jpg";
// import Background5 from "../assets/images/country-leagues/copa-america.jpg";
// import Background6 from "../assets/images/country-leagues/asian-cup.jpg";
// import Background7 from "../assets/images/country-leagues/caf.jpg";
import Background8 from "../assets/images/other-collections/kids.jpg";
// import Background9 from "../assets/images/other-collections/large-sizes.jpg";
// import Background10 from "../assets/images/other-collections/goalkeeper.jpg";
// import Background11 from "../assets/images/other-collections/pro-player.jpg";
// import Background12 from "../assets/images/other-collections/shorts.jpg";
// import Background13 from "../assets/images/other-collections/socks.jpg";
// import Background14 from "../assets/images/personalization.jpg";
// import Background15 from "../assets/images/social-networks.jpg";

import Grid, { GridItem } from "../components/layout/Grid";
import Button from "../components/button/Button";

const RewardTag = () => {
  return (
    <Flex
      stack={false}
      className="bordered reward-tag"
      style={{
        backgroundImage: `url(${Background1})`,
        backgroundRepeat: "no-repeat",
        // width: 140,
        // height: 60,
        paddingBottom: 60,
      }}
    ></Flex>
  );
};

const Enquiries = () => {
  return (
    <Grid span={12} spacing={16} className="enquiries bordered">
      <GridItem className="bordered" span={3} md={6}>
        <Flex
          spacing={12}
          stack={true}
          style={{ padding: "32px" }}
          className="bg-primary-tint"
        >
          <div
            className="bordered bg-primary"
            style={{ width: "30px", height: "30px" }}
          ></div>
          <Flex stack={true} spacing={4}>
            <div className="bordered">
              <p className="small bold">Secure Shipping</p>
            </div>
            <div className="bordered">
              <p className="smallest ">on all orders</p>
            </div>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem className="bordered" span={3} md={6}>
        <Flex
          spacing={12}
          stack={true}
          style={{ padding: "32px" }}
          className="bg-primary-tint"
        >
          <div
            className="bordered bg-primary"
            style={{ width: "30px", height: "30px" }}
          ></div>
          <Flex stack={true} spacing={4}>
            <div className="bordered">
              <p className="small bold">Secure Shipping</p>
            </div>
            <div className="bordered">
              <p className="smallest ">on all orders</p>
            </div>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem className="bordered" span={3} md={6}>
        <Flex
          spacing={12}
          stack={true}
          style={{ padding: "32px" }}
          className="bg-primary-tint"
        >
          <div
            className="bordered bg-primary"
            style={{ width: "30px", height: "30px" }}
          ></div>
          <Flex stack={true} spacing={4}>
            <div className="bordered">
              <p className="small bold">Secure Shipping</p>
            </div>
            <div className="bordered">
              <p className="smallest ">on all orders</p>
            </div>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem className="bordered" span={3} md={6}>
        <Flex
          spacing={12}
          stack={true}
          style={{ padding: "32px" }}
          className="bg-primary-tint"
        >
          <div
            className="bordered bg-primary"
            style={{ width: "30px", height: "30px" }}
          ></div>
          <Flex stack={true} spacing={4}>
            <div className="bordered">
              <p className="small bold">Secure Shipping</p>
            </div>
            <div className="bordered">
              <p className="smallest ">on all orders</p>
            </div>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const LandingBanner = () => {
  return (
    <Flex stack={true} spacing={40} className="landing-banner">
      <div className="banner">
        <img className="banner-photo" src={Background} alt="bannner" />
      </div>
    </Flex>
  );
};

const PopularShirts = () => {
  return (
    <Flex className="bordered popular-shirts" spacing={80} stack={true}>
      <h2>MOST POPULAR T-SHIRTS</h2>
      <Flex spacing={32} className="bordered">
        <Flex spacing={32} className="bordered" style={{ width: "100%" }}>
          <Flex stack={true} className="bordered">
            <img src={Background2} />
            <Flex stack={true} className="card" spacing={16}>
              <p>Manchester United 21-22</p>
              <Flex spacing={8}>
                <p className="bold">€30.00</p>
                <Flex className="bordered" ai="center">
                  <p className="discount">€89.95</p>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const CountryLeagues = () => {
  return (
    <Grid span={12} className="country-leagues">
      <GridItem span={2} md={6} className="bordered">
        <Flex stack={true}>
          <div>
            <img className="country-leagues-img" src={Background3} />
          </div>
          <p>b</p>
        </Flex>
      </GridItem>
      <GridItem span={2} md={6} className="bordered">
        A
      </GridItem>
      <GridItem span={2} md={6} className="bordered">
        A
      </GridItem>
      <GridItem span={2} md={6} className="bordered">
        A
      </GridItem>
      <GridItem span={2} md={6} className="bordered">
        A
      </GridItem>
      <GridItem span={2} md={6} className="bordered">
        A
      </GridItem>
    </Grid>
  );
};

const OtherCollections = () => {
  return (
    <Flex spacing={80} className="bordered other-collections" stack={true}>
      <h2>OTHER COLLECTIONS</h2>
      <Grid span={12}>
        <GridItem className="bordered" span={4} md={6}>
          <div>
            <img src={Background8} />
          </div>
        </GridItem>
        <GridItem className="bordered" span={4} md={6}></GridItem>
        <GridItem className="bordered" span={4} md={6}></GridItem>
        <GridItem className="bordered" span={4} md={6}></GridItem>
        <GridItem className="bordered" span={4} md={6}></GridItem>
        <GridItem className="bordered" span={4} md={6}></GridItem>
      </Grid>
    </Flex>
  );
};

const Advertisment = () => {
  return (
    <Flex spacing={40} className="advert">
      <Grid span={12}>
        <GridItem className="bordered" span={6} md={12}>
          a
        </GridItem>
        <GridItem className="bordered" span={6} md={12}>
          a
        </GridItem>
      </Grid>
    </Flex>
  );
};
const MainPage = () => {
  return (
    <Flex className="bordered" stack={true} spacing={40} md={12}>
      <LandingBanner />
      <Flex stack={true} spacing={28}>
        <Enquiries />
        <RewardTag />
        <PopularShirts />
        <CountryLeagues />
        <OtherCollections />
        <Advertisment />
      </Flex>
    </Flex>
  );
};

export default MainPage;
