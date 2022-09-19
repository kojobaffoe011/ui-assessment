import React from "react";
import Button from "./button/Button";
import Flex from "./layout/Flex";
import Grid, { GridItem } from "./layout/Grid";
import search from "../assets/icons/svg/search.svg";
import search1 from "../assets/icons/svg/search-alt.svg";
import cart from "../assets/icons/svg/shopping-cart.svg";
import ham from "../assets/icons/svg/ham.svg";
import user from "../assets/icons/svg/user.svg";
import "../styles/header.css";

const SalesBanner = () => {
  return (
    <Grid className="bg-secondary">
      <GridItem span={1} md={2} sm={3} className="bg-dark-gray">
        <Flex stack={true} style={{ width: "100%" }} jc="center" ai="center">
          <p className="white small">EN</p>
        </Flex>
      </GridItem>

      <GridItem
        style={{
          background: "#111112",
        }}
        span={10}
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

      <GridItem className="bg-success" span={1} md={2} sm={3}>
        <Flex jc="center" ai="center">
          <p className="white small">Chat with us</p>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const TextAndIcon = (props) => {
  return (
    <Flex style={{ padding: "8px 16px" }}>
      <p className={`small bold fw-600 ${props.textClassName}`}>
        {props.children}
      </p>
    </Flex>
  );
};

const SearchBar = () => {
  return (
    <Flex className="  flex-grow">
      <Flex className="flex-grow">
        <input
          className="flex-grow "
          placeholder="What are you looking for?"
          style={{ height: "35px", border: "none" }}
        />
      </Flex>

      <Flex>
        <Button
          backgroundColor={"#F9DC38"}
          padding={0}
          append={
            <Flex
              className="bg-secondary"
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

      <GridItem span={10} md={6}>
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
                All Categories
              </TextAndIcon>
            </Flex>
          </GridItem>

          <GridItem span={10} md={0}>
            <Flex style={{ padding: "12px" }} className="">
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
        span={1}
        md={6}
        className=" bg-white"
        style={{ position: "relative", borderLeft: "1px solid #e5e5e5" }}
      >
        <Flex
          className=""
          style={{ position: "absolute", bottom: "20%", width: "100%" }}
          // jc="center"
          jc="flex-end"
          spacing={30}
        >
          <div className="" style={{ flexBasis: "50%", paddingLeft: "20px" }}>
            <img src={cart} />
          </div>
          <div className=" " style={{ flexBasis: "50%", paddingLeft: "20px" }}>
            <img src={user} />
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
          <TextAndIcon textClassName="gray">TShirts</TextAndIcon>
          <TextAndIcon textClassName="gray">NBA</TextAndIcon>
          <TextAndIcon textClassName="gray">Tracksuit</TextAndIcon>
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
