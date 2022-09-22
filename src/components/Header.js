import React from "react";
import Button from "./button/Button";
import Flex from "./layout/Flex";
import Grid, { GridItem } from "./layout/Grid";
import search from "../assets/icons/svg/search.svg";
import search1 from "../assets/icons/svg/search-alt.svg";
import cart from "../assets/icons/svg/shopping-cart.svg";
import ham from "../assets/icons/svg/ham.svg";
import user from "../assets/icons/svg/user.svg";
import down from "../assets/icons/svg/down.svg";
import whatsapp from "../assets/icons/svg/whatsapp.svg";
// import down2 from "../assets/icons/svg/down-alt.svg";
import globe from "../assets/icons/svg/globe.svg";
import "../styles/header.css";

const TextAndIcon = (props) => {
  return (
    <Flex style={{ padding: "8px 16px" }}>
      <p className={`small bold fw-600 ${props.textClassName}`}>
        {props.children}
      </p>
    </Flex>
  );
};

const SalesBanner = () => {
  return (
    <Grid className="bg-secondary" gap="0px">
      <GridItem span={1} md={2} sm={3} className="bg-dark-gray">
        <Flex stack={true} style={{ width: "100%" }} jc="center" ai="center">
          {/* <p className="white small">EN</p> */}
          <TextAndIcon textClassName="white small regular">
            <Flex spacing={6}>
              <img src={globe} /> EN <img src={down} />
            </Flex>
          </TextAndIcon>
        </Flex>
      </GridItem>

      <GridItem
        style={{
          background: "#111112",
        }}
        span={9}
        md={8}
        sm={6}
      >
        <Flex jc="center" ai="center">
          <p
            id="sales-promo"
            className="small"
            style={{ color: "rgba(255, 255, 255, 0.8)", textAlign: "center" }}
          >
            SALES BEGIN • FREE ON ALL ORDERS
          </p>
        </Flex>
      </GridItem>

      <GridItem className="bg-success" span={2} md={2} sm={3}>
        <Flex jc="center" ai="center">
          <TextAndIcon textClassName="white small">
            <Flex spacing={8} ai="center">
              <img src={whatsapp} />
              Chat with us
            </Flex>
          </TextAndIcon>
        </Flex>
      </GridItem>
    </Grid>
    // <Grid span={12} gap="0px">
    //   <GridItem span={1} className="">
    //     a
    //   </GridItem>
    //   <GridItem span={10} className="">
    //     a
    //   </GridItem>
    //   <GridItem span={1} className="">
    //     a
    //   </GridItem>
    // </Grid>
  );
};

const SearchBar = () => {
  return (
    <Flex className="  flex-grow ">
      <Flex className="flex-grow">
        <input
          className="flex-grow "
          placeholder="What are you looking for?"
          style={{ height: "35px", border: "none" }}
        />
      </Flex>

      <Flex className="">
        <Button
          backgroundColor={"#F9DC38"}
          padding={0}
          append={
            <Flex
              className="bg-secondary"
              jc="center"
              style={{
                width: "100%",
                height: "79%",
                padding: "4px",
              }}
            >
              <Flex
                ai="center"
                jc="center"
                className=""
                style={{ width: "100%" }}
              >
                <img src={search} />
              </Flex>
            </Flex>
          }
        >
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

const AppHeader = () => {
  return (
    <Grid span={12} gap="0" className=" ">
      <GridItem span={1} md={0} className="bg-primary" />

      <GridItem span={9} md={6}>
        <Grid span={12} gap="0">
          <GridItem
            span={2}
            md={0}
            style={{ borderRight: "1px solid #e5e5e5" }}
          >
            <Flex
              stack={true}
              style={{ height: "100%" }}
              jc="center"
              ai="center"
            >
              <TextAndIcon textClassName="secondary">
                <Flex spacing={8}>
                  All Categories <img src={down} />
                </Flex>
              </TextAndIcon>
            </Flex>
          </GridItem>

          <GridItem span={10} md={0} className="">
            <Flex style={{ padding: "12px 40px 12px 24px" }} className="">
              <Flex className="flex-grow">
                <SearchBar />
              </Flex>
            </Flex>
          </GridItem>

          <GridItem span={0} md={6}>
            <Flex
              spacing={32}
              ai="center"
              // stack={true}
              className=""
              style={{ height: "40px", paddingLeft: "16px" }}
            >
              <div>
                <img src={ham} />
              </div>
              <div>
                <img src={search1} />
              </div>
            </Flex>
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem
        span={2}
        md={6}
        className=" bg-white  "
        style={{ position: "relative", borderLeft: "1px solid #e5e5e5" }}
      >
        <Flex
          className=""
          style={{ height: "100%" }}
          // jc="center"
          // ai="center"
        >
          <div
            className=" cart "
            style={{ flexBasis: "50%", borderRight: "1px solid #e5e5e5" }}
          >
            <img src={cart} />
          </div>
          <div className="flex-grow cart" style={{ flexBasis: "50%" }}>
            <TextAndIcon>
              <Flex spacing={8}>
                <img src={user} />
                <img src={down} />
              </Flex>
            </TextAndIcon>
          </div>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const CategoryHeader = () => {
  return (
    <Grid span={12} gap="0" className="category-header">
      <GridItem span={1} className="bg-primary" style={{ flexBasis: "10%" }} />

      <GridItem span={11}>
        <Flex className="category-header-content  flex-grow">
          <TextAndIcon textClassName="gray">Home</TextAndIcon>
          <TextAndIcon textClassName="gray">
            <Flex spacing={8}>
              T-Shirts <img src={down} />
            </Flex>
          </TextAndIcon>
          <TextAndIcon textClassName="gray">
            <Flex spacing={8}>
              NBA <img src={down} />
            </Flex>
          </TextAndIcon>
          <TextAndIcon textClassName="gray">
            <Flex spacing={8}>
              Tracksuits <img src={down} />
            </Flex>
          </TextAndIcon>
          <TextAndIcon textClassName="gray">
            Products Delivery • 1 - 2 days
          </TextAndIcon>
          <TextAndIcon textClassName="gray">Contact</TextAndIcon>
          <TextAndIcon textClassName="gray">Reviews</TextAndIcon>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const Header = () => {
  return (
    <Flex stack={true}>
      <SalesBanner />
      <AppHeader />
      <CategoryHeader />
    </Flex>
  );
};

export default Header;
