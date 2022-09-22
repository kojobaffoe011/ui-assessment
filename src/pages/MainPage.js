import React, { useRef } from "react";
import "../styles/landing-page.css";
import Flex from "../components/layout/Flex";
// impo;
// import Tag from "../components/others/Tag";
import Background from "../assets/images/hero.jpg";
import Background1 from "../assets/images/reward-tag.svg";
import Background2 from "../assets/images/product-medium.jpg";
import Background3 from "../assets/images/country-leagues/champions-league.jpg";
import Background4 from "../assets/images/country-leagues/europa-league.jpg";
import Background5 from "../assets/images/country-leagues/copa-america.jpg";
import Background6 from "../assets/images/country-leagues/asian-cup.jpg";
import Background7 from "../assets/images/country-leagues/caf.jpg";
import Background8 from "../assets/images/other-collections/kids.jpg";
import Background9 from "../assets/images/other-collections/large-sizes.jpg";
import Background10 from "../assets/images/other-collections/goalkeeper.jpg";
import Background11 from "../assets/images/other-collections/pro-player.jpg";
import Background12 from "../assets/images/other-collections/shorts.jpg";
import Background13 from "../assets/images/other-collections/socks.jpg";
import Background14 from "../assets/images/personalization.jpg";
import Background15 from "../assets/images/social-networks.jpg";
import truck from "../assets/icons/svg/truck.svg";
import phone from "../assets/icons/svg/phone.svg";
import check from "../assets/icons/svg/check-badge.svg";
import whatsapp from "../assets/icons/svg/whatsapp.svg";
import right from "../assets/icons/svg/right1.svg";
import left from "../assets/icons/svg/left1.svg";
import bag from "../assets/icons/svg/bag1.svg";
import twitter from "../assets/icons/svg/Social Icon/twitter.svg";
import instagram from "../assets/icons/svg/Social Icon/instagram.svg";
import facebook from "../assets/icons/svg/Social Icon/facebook.svg";
import Grid, { GridItem } from "../components/layout/Grid";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

const RewardTag = () => {
  return (
    <Flex
      stack={false}
      className=" reward-tag"
      style={{
        backgroundImage: `url(${Background1})`,
        backgroundRepeat: "no-repeat",
        paddingBottom: 60,
      }}
    ></Flex>
  );
};

const Enquiries = () => {
  return (
    <Grid span={12} spacing={16} className="enquiries ">
      <GridItem className="" span={3} md={6}>
        <Flex
          spacing={12}
          stack={true}
          style={{ padding: "32px" }}
          className="bg-primary-tint"
        >
          <Flex
            className=" bg-primary"
            style={{ width: "30px", height: "30px", padding: "4px" }}
          >
            <Flex
              ai="center"
              jc="center"
              className=""
              style={{ width: "100%" }}
            >
              <img src={truck} className="" />
            </Flex>
          </Flex>
          <Flex stack={true} spacing={4}>
            <div className="">
              <p className="small bold">Secure Shipping</p>
            </div>
            <div className="">
              <p className="smallest ">on all orders</p>
            </div>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem className="" span={3} md={6}>
        <Flex
          spacing={12}
          stack={true}
          style={{ padding: "32px" }}
          className="bg-primary-tint"
        >
          <Flex
            className=" bg-primary"
            style={{ width: "30px", height: "30px", padding: "4px" }}
          >
            <Flex
              ai="center"
              jc="center"
              className=""
              style={{ width: "100%" }}
            >
              <img src={phone} className="" />
            </Flex>
          </Flex>
          <Flex stack={true} spacing={4}>
            <div className="">
              <p className="small bold">Telephone</p>
            </div>
            <div className="">
              <p className="smallest ">+1 23 456 7890</p>
            </div>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem className="" span={3} md={6}>
        <Flex
          spacing={12}
          stack={true}
          style={{ padding: "32px" }}
          className="bg-primary-tint"
        >
          <Flex
            className=" bg-primary"
            style={{ width: "30px", height: "30px", padding: "4px" }}
          >
            <Flex
              ai="center"
              jc="center"
              className=""
              style={{ width: "100%" }}
            >
              <img src={whatsapp} className="" />
            </Flex>
          </Flex>
          <Flex stack={true} spacing={4}>
            <div className="">
              <p className="small bold">Chat WhatsApp</p>
            </div>
            <div className="">
              <p className="too-small ">
                Mon – Fri: 9:00 – 21:00 • Sat – Sun: 9:00 – 17:00
              </p>
            </div>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem className="" span={3} md={6}>
        <Flex
          spacing={12}
          stack={true}
          style={{ padding: "32px" }}
          className="bg-primary-tint"
        >
          <Flex
            className=" bg-primary"
            style={{ width: "30px", height: "30px", padding: "4px" }}
          >
            <Flex
              ai="center"
              jc="center"
              className=""
              style={{ width: "100%" }}
            >
              <img src={check} className="" />
            </Flex>
          </Flex>
          <Flex stack={true} spacing={4}>
            <div className="">
              <p className="small bold">Quality Guarantee</p>
            </div>
            <div className="">
              <p className="smallest ">Verified Purchase Reviews</p>
            </div>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const PopularShirts = () => {
  return (
    <Flex className=" popular-shirts" spacing={80} stack={true}>
      <Flex className="bordered">
        <h2 style={{ flexBasis: "90%" }}>MOST POPULAR T-SHIRTS</h2>
        <Flex className="flex-grow  bordered" jc="flex-end" spacing={8}>
          <Flex
            className="bordered"
            jc="center"
            style={{
              width: "30px",
              height: "30px",
              padding: "4px",
              border: "2px solid #F5F5F6",
            }}
          >
            <Flex
              ai="center"
              jc="center"
              className="bordered"
              style={{ width: "100%" }}
            >
              <img src={left} />
            </Flex>
          </Flex>
          <Flex
            className="bordered"
            jc="center"
            style={{
              width: "30px",
              height: "30px",
              padding: "4px",
              border: "2px solid #F5F5F6",
            }}
          >
            <Flex
              ai="center"
              jc="center"
              className=""
              style={{ width: "100%" }}
            >
              <img src={right} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex spacing={32} className="" style={{ overflowX: "scroll" }}>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <img src={Background2} />
              <Flex
                stack={true}
                className="card"
                spacing={16}
                style={{ border: "2px solid #EAEAEC" }}
              >
                <p className="secondary">Manchester United 21-22</p>
                <Flex spacing={8}>
                  <p className="bold secondary">€30.00</p>
                  <Flex className="" ai="center">
                    <p className="discount">€89.95</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

const CountryLeagues = () => {
  return (
    <Flex className="country-leagues " spacing={80} stack={true}>
      <div className="">
        <h2>COUNTRY LEAGUES</h2>
      </div>
      <Flex className="country-league-img" spacing={16}>
        <Flex stack={true} spacing={16} style={{ flexBasis: "20%" }}>
          <div className="country-league-column">
            <img src={Background3} style={{ width: "100%" }} />
          </div>
          <div>
            <p className="bold">Champions League</p>
          </div>
        </Flex>
        <Flex stack={true} spacing={16} style={{ flexBasis: "20%" }}>
          <div>
            <img src={Background4} style={{ width: "100%" }} />
          </div>
          <div>
            <p className="bold">Europa League</p>
          </div>
        </Flex>
        <Flex stack={true} spacing={16} style={{ flexBasis: "20%" }}>
          <div>
            <img src={Background5} style={{ width: "100%" }} />
          </div>
          <div>
            <p className="bold">Copa America</p>
          </div>
        </Flex>
        <Flex stack={true} spacing={16} style={{ flexBasis: "20%" }}>
          <div>
            <img src={Background6} style={{ width: "100%" }} />
          </div>
          <div>
            <p className="bold">Asian Cup</p>
          </div>
        </Flex>
        <Flex stack={true} spacing={16} style={{ flexBasis: "20%" }}>
          <div>
            <img src={Background7} style={{ width: "100%" }} />
          </div>
          <div>
            <p className="bold">African Nations Cup</p>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

const OtherCollections = () => {
  return (
    <Flex spacing={80} className=" other-collections" stack={true}>
      <h2>OTHER COLLECTIONS</h2>
      <Grid span={12}>
        <GridItem
          className=""
          span={4}
          md={6}
          style={{
            backgroundImage: `url(${Background8})`,
            backgroundSize: "cover",
            height: "30vh",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <div
            className=""
            style={{ position: "absolute", bottom: "0", width: "100%" }}
          >
            <Button
              backgroundColor={"rgba(17, 17, 18, 0.4"}
              backdropFilter={"blur(8px)"}
              padding={"16px"}
              append={
                <Flex
                  className="bg-primary"
                  jc="center"
                  style={{
                    width: "100%",
                    height: "85%",
                    padding: "4px",
                  }}
                >
                  <Flex
                    ai="center"
                    jc="center"
                    className=""
                    style={{ width: "100%" }}
                  >
                    <img src={right} />
                  </Flex>
                </Flex>
              }
            >
              <p className="white bold small">Kids</p>
            </Button>
          </div>
        </GridItem>
        <GridItem
          className=""
          span={4}
          md={6}
          style={{
            backgroundImage: `url(${Background9})`,
            backgroundSize: "cover",
            height: "30vh",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <div
            className=""
            style={{ position: "absolute", bottom: "0", width: "100%" }}
          >
            <Button
              backgroundColor={"rgba(17, 17, 18, 0.4"}
              backdropFilter={"blur(8px)"}
              padding={"16px"}
              append={
                <Flex
                  className="bg-primary"
                  jc="center"
                  style={{
                    width: "100%",
                    height: "85%",
                    padding: "4px",
                  }}
                >
                  <Flex
                    ai="center"
                    jc="center"
                    className=""
                    style={{ width: "100%" }}
                  >
                    <img src={right} />
                  </Flex>
                </Flex>
              }
            >
              <p className="white bold small">Larger Sizes</p>
            </Button>
          </div>
        </GridItem>
        <GridItem
          className=""
          span={4}
          md={6}
          style={{
            backgroundImage: `url(${Background10})`,
            backgroundSize: "cover",
            height: "30vh",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <div
            className=""
            style={{ position: "absolute", bottom: "0", width: "100%" }}
          >
            <Button
              backgroundColor={"rgba(17, 17, 18, 0.4"}
              backdropFilter={"blur(8px)"}
              padding={"16px"}
              append={
                <Flex
                  className="bg-primary"
                  jc="center"
                  style={{
                    width: "100%",
                    height: "85%",
                    padding: "4px",
                  }}
                >
                  <Flex
                    ai="center"
                    jc="center"
                    className=""
                    style={{ width: "100%" }}
                  >
                    <img src={right} />
                  </Flex>
                </Flex>
              }
            >
              <p className="white bold small">Goalkeeper</p>
            </Button>
          </div>
        </GridItem>
        <GridItem
          className=""
          span={4}
          md={6}
          style={{
            backgroundImage: `url(${Background11})`,
            backgroundSize: "cover",
            height: "30vh",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <div
            className=""
            style={{ position: "absolute", bottom: "0", width: "100%" }}
          >
            <Button
              backgroundColor={"rgba(17, 17, 18, 0.4"}
              backdropFilter={"blur(8px)"}
              padding={"16px"}
              append={
                <Flex
                  className="bg-primary"
                  jc="center"
                  style={{
                    width: "100%",
                    height: "85%",
                    padding: "4px",
                  }}
                >
                  <Flex
                    ai="center"
                    jc="center"
                    className=""
                    style={{ width: "100%" }}
                  >
                    <img src={right} />
                  </Flex>
                </Flex>
              }
            >
              <p className="white bold small">Authentic/Pro Player</p>
            </Button>
          </div>
        </GridItem>
        <GridItem
          className=""
          span={4}
          md={6}
          style={{
            backgroundImage: `url(${Background12})`,
            backgroundSize: "cover",
            height: "30vh",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <div
            className=""
            style={{ position: "absolute", bottom: "0", width: "100%" }}
          >
            <Button
              backgroundColor={"rgba(17, 17, 18, 0.4"}
              backdropFilter={"blur(8px)"}
              padding={"16px"}
              append={
                <Flex
                  className="bg-primary"
                  jc="center"
                  style={{
                    width: "100%",
                    height: "85%",
                    padding: "4px",
                  }}
                >
                  <Flex
                    ai="center"
                    jc="center"
                    className=""
                    style={{ width: "100%" }}
                  >
                    <img src={right} />
                  </Flex>
                </Flex>
              }
            >
              <p className="white bold small">Shorts</p>
            </Button>
          </div>
        </GridItem>
        <GridItem
          className=""
          span={4}
          md={6}
          style={{
            backgroundImage: `url(${Background13})`,
            backgroundSize: "cover",
            height: "30vh",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <div
            className=""
            style={{ position: "absolute", bottom: "0", width: "100%" }}
          >
            <Button
              backgroundColor={"rgba(17, 17, 18, 0.4"}
              backdropFilter={"blur(8px)"}
              padding={"16px"}
              append={
                <Flex
                  className="bg-primary"
                  jc="center"
                  style={{
                    width: "100%",
                    height: "85%",
                    padding: "4px",
                  }}
                >
                  <Flex
                    ai="center"
                    jc="center"
                    className=""
                    style={{ width: "100%" }}
                  >
                    <img src={right} />
                  </Flex>
                </Flex>
              }
            >
              <p className="white bold small">Socks</p>
            </Button>
          </div>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const Advertisment = () => {
  return (
    <Flex spacing={40} className="advert">
      <Grid span={12} style={{ width: "100%" }}>
        <GridItem
          span={6}
          md={12}
          style={{
            backgroundImage: `linear-gradient(45deg, black, transparent), url(${Background14})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "40vh",
            width: "100%",
            position: "relative",
          }}
        >
          <Flex stack={true}>
            <Flex
              stack={true}
              spacing={24}
              className="white"
              jc="flex-end"
              style={{ position: "absolute", bottom: "40px", left: "40px" }}
            >
              <h3>PERSONALIZATION</h3>
              <p>
                Put a custom print on the football shirt of your choice with our
                Personalization service. <br /> <br />
                Tell us what name, what number and we put it. FREE!!!
              </p>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          className=""
          span={6}
          md={12}
          style={{
            backgroundImage: `linear-gradient(45deg, black, transparent),url(${Background15})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "40vh",
            width: "100%",
            position: "relative",
          }}
        >
          <Flex
            stack={true}
            spacing={24}
            className="white"
            jc="flex-end"
            style={{ position: "absolute", bottom: "40px", left: "40px" }}
          >
            <h3>SOCIAL NETWORKS</h3>
            <p>
              Share your shirts with us with the #CamisetasFutbolSpainnn <br />{" "}
            </p>
            <Flex spacing="8px">
              <Flex
                className=" bg-white "
                style={{ width: "30px", height: "30px", padding: "4px" }}
              >
                <Flex
                  ai="center"
                  jc="center"
                  className=""
                  style={{ width: "100%" }}
                >
                  <img src={facebook} className="" />
                </Flex>
              </Flex>
              <Flex
                className=" bg-white "
                style={{ width: "30px", height: "30px", padding: "4px" }}
              >
                <Flex
                  ai="center"
                  jc="center"
                  className=""
                  style={{ width: "100%" }}
                >
                  <img src={twitter} className="" />
                </Flex>
              </Flex>
              <Flex
                className=" bg-white "
                style={{ width: "30px", height: "30px", padding: "4px" }}
              >
                <Flex
                  ai="center"
                  jc="center"
                  className=""
                  style={{ width: "100%" }}
                >
                  <img src={instagram} className="" />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const LandingBanner = () => {
  return (
    <Flex
      stack={true}
      // style={{ border: "3px solid red" }}
      className="landing-banner"
    >
      <Flex
        stack={true}
        spacing={105}
        className="banner-background"
        style={{
          backgroundImage: `linear-gradient(45deg, black, transparent),url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "30vh",
          maxWidth: "100%",
          // border: "2px solid green",
        }}
      >
        <div className="">
          <h2 className="white banner-text">
            Your favorite customized
            <br /> <span className="primary">Club Jerseys.</span>
          </h2>
        </div>
        <Flex className="">
          <Flex className="flex-grow" style={{ marginTop: "auto" }} spacing={4}>
            <div className="dash bg-primary"></div>
            <div className="dash bg-white-alt"></div>
            <div className="dash bg-white-alt"></div>
            <div className="dash bg-white-alt"></div>
            <div className="dash bg-white-alt"></div>
          </Flex>
          <Flex style={{ flexBasis: "12%" }} jc="flex-end">
            <Button
              backgroundColor={"transparent"}
              border="1px solid white"
              append={
                <Flex
                  className="bg-white"
                  jc="center"
                  style={{
                    width: "90%",
                    height: "85%",
                    padding: "4px",
                  }}
                >
                  <Flex
                    ai="center"
                    jc="center"
                    className=""
                    style={{ width: "100%" }}
                  >
                    <img src={bag} />
                  </Flex>
                </Flex>
              }
            >
              <p className=" bold white" style={{ fontSize: "9px" }}>
                Shop Now
              </p>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const MainPage = () => {
  return (
    <Flex className="" stack={true} spacing={0} md={12}>
      <LandingBanner />
      <Flex stack={true}>
        <Flex stack={true} spacing={28}>
          <Enquiries />
          <RewardTag />
        </Flex>
        <PopularShirts />
        <CountryLeagues />
        <OtherCollections />
        <Advertisment />
      </Flex>
    </Flex>
  );
};

export default MainPage;
