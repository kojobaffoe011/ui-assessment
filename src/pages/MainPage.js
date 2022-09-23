import React, { useRef } from "react";
import "../styles/landing-page.css";
import Flex from "../components/layout/Flex";
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
import Tag from "../components/others/Tag";

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

const Enquiry = (props) => {
  const { title, subtext, image } = props;

  return (
    <GridItem span={3} md={6} className="enquiry bg-primary-tint">
      <Flex stack spacing={5}>
        <Flex className=" bg-primary enquiry-icon">
          <Flex ai="center" jc="center" className="" style={{ width: "100%" }}>
            <img src={image} className="" />
          </Flex>
        </Flex>
        <Flex stack={true} spacing={4}>
          <div className="">
            <p className="enquiry-text bold">{title}</p>
          </div>
          <div className="">
            <p className="enquiry-desc ">{subtext}</p>
          </div>
        </Flex>
      </Flex>
    </GridItem>
  );
};

const Enquiries = () => {
  return (
    <Grid span={12} gap="8px" className="enquiries ">
      <Enquiry image={truck} title="Secure Shipping" subtext="on all orders" />
      <Enquiry image={phone} title="Telephone" subtext="+1 23 456 7890" />
      <Enquiry
        image={whatsapp}
        title="Chat Whatsapp"
        subtext="Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00"
      />
      <Enquiry
        image={check}
        title="Quality Guarantee"
        subtext="Verified Purchase Reviews"
      />
    </Grid>
  );
};

const PopularShirts = () => {
  const scrollElement = useRef(null);
  const scrollLeft = () => {
    scrollElement.current.scrollLeft = +20;
  };
  return (
    <Flex className=" popular-shirts" spacing={80} stack={true}>
      <Flex className="">
        <h2 style={{ flexBasis: "90%" }}>MOST POPULAR T-SHIRTS</h2>
        <Flex className="flex-grow  " jc="flex-end" spacing={8}>
          <Flex
            onClick={scrollLeft}
            className=""
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
              <img src={left} />
            </Flex>
          </Flex>
          <Flex
            className=""
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
      <Flex
        spacing={32}
        className=""
        style={{ overflowX: "scroll" }}
        ref={scrollElement}
      >
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Flex spacing={32} className="" style={{ width: "100%" }}>
            <Flex stack={true} className="">
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img src={Background2} />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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
              <Flex style={{ position: "relative" }}>
                <img
                  src={Background2}
                  // style={{ height: "100%", width: "100%" }}
                />
                <Tag
                  style={{ position: "absolute", bottom: "16px", left: "16px" }}
                  text="Save 67%"
                ></Tag>
              </Flex>

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

const CountryLeague = (props) => {
  return (
    <Flex stack={true}>
      <div className="">
        <img src={props.image} style={{ width: "100%" }} />
      </div>
      <div className="">
        <p className="bold medium">{props.text}</p>
      </div>
    </Flex>
  );
};

const CountryLeagueRow = () => {
  return (
    <Flex className="country-leagues " spacing={80} stack={true}>
      <div className="">
        <h2>COUNTRY LEAGUES</h2>
      </div>

      <div className="country-league-row ">
        <div className="">
          <CountryLeague text={"Champions League"} image={Background3} />
        </div>
        <div className="">
          <CountryLeague text={"Europa League"} image={Background4} />
        </div>
        <div className="">
          <CountryLeague text={"Copa America"} image={Background5} />
        </div>
        <div className="">
          <CountryLeague text={"Asian Cup"} image={Background6} />
        </div>
        <div className="">
          <CountryLeague text={"African Nations Cup"} image={Background7} />
        </div>
        {/* <div className="">
          <CountryLeague text={"Champions League"} image={Background3} />
        </div> */}
      </div>
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
              <p className="white bold other-text">Kids</p>
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
              <p className="white bold other-text-alt">Large Sizes </p>
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
              <p className="white bold other-text-alt">Goalkeeper</p>
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
              <p className="white bold other-text">Authentic</p>
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
              <p className="white bold other-text">Shorts</p>
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
              <p className="white bold other-text">Socks</p>
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
              className="white advert-position"
              jc="flex-end"
              // style={{ position: "absolute", bottom: "40px", left: "40px" }}
            >
              <h3 className="advert-heading">PERSONALIZATION</h3>
              <p className="other-text-alte">
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
            <h3 className="advert-heading">SOCIAL NETWORKS</h3>
            <p className="other-text-alte">
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
        className="banner-background"
        style={{
          backgroundImage: `linear-gradient(45deg, black, transparent),url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "30vh",
          maxWidth: "100%",
        }}
      >
        <div className="">
          <h2 className="white banner-text">
            Your favorite customized
            <br /> <span className="primary">Club Jerseys.</span>
          </h2>
        </div>
        <Flex style={{ marginTop: "auto" }}>
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
        <CountryLeagueRow />
        <OtherCollections />
        <Advertisment />
      </Flex>
    </Flex>
  );
};

export default MainPage;
