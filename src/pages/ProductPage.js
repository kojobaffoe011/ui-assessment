import React from "react";
import "../styles/product-page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import Background from "../assets/images/product-large.svg";
import Background1 from "../assets/images/product-small.svg";
import Background2 from "../assets/images/reward-tag.svg";
import cart from "../assets/icons/svg/shopping-cart-alt.svg";
import heart from "../assets/icons/svg/heart-outline.svg";
import Button from "../components/button/Button";
import Tag from "../components/others/Tag";
import Input from "../components/others/Input";

const RewardTag = () => {
  return (
    <Flex
      style={{
        backgroundImage: `url(${Background2})`,
        backgroundRepeat: "no-repeat",
        width: 140,
        height: 60,
        paddingBottom: 80,
      }}
    ></Flex>
  );
};

const ProductGallery = () => {
  return (
    <Flex
      spacing={16}
      stack={true}
      className="product-gallery "
      style={{ height: "100%" }}
    >
      <div className="selected-img " style={{ flexBasis: "90%" }}>
        <img style={{ height: "100%" }} src={Background} alt="product" />
      </div>

      <div className="small-image-row flex-grow " style={{ marginTop: "auto" }}>
        <div className="small-image-column">
          <img src={Background} alt="product-gallery" />
        </div>
        <div className="small-image-column">
          <img className="faded" src={Background} alt="product-gallery" />
        </div>
        <div className="small-image-column">
          <img className="faded" src={Background} alt="product-gallery" />
        </div>
        <div className="small-image-column">
          <img className="faded" src={Background} alt="product-gallery" />
        </div>
        <div className="small-image-column">
          <img className="faded" src={Background} alt="product-gallery" />
        </div>
        <div className="small-image-column">
          <img className="faded" src={Background} alt="product-gallery" />
        </div>
      </div>
    </Flex>
  );
};

const ProductDetails = () => {
  return (
    <Flex stack={true} className="product-details  ">
      <Flex spacing={48} stack={true}>
        <Flex stack={true} spacing={16} className="">
          <div className="product-title">
            <h2 className="bold" style={{ fontSize: "24px" }}>
              Manchester United 21-22 Home Shirt
            </h2>
          </div>

          <Flex spacing={78}>
            <Flex className="product-info " jc="space-between" ai="center">
              <Flex ai="center" spacing={16}>
                <h1 className="product-price bold" style={{ fontSize: "40px" }}>
                  €30.00
                </h1>

                <p className="large strike-through orange">€89.95</p>

                <Tag text="Save 67%" />
              </Flex>
              <Flex ai="center"></Flex>
            </Flex>
            <Flex className=" flex-grow" jc="flex-end">
              <Button border={"1px solid #e5e5e5"}>
                <Flex className="" spacing={4}>
                  <img src={heart} />
                  <p>Add to favorites</p>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Flex stack={true}>
          <p className="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec
            ornare, dui vel facilisis luctus, metus mi ttitor erat sapien
            scelerisque nunc. Pellentesque ornare elit tellus... Read More
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

const ProductFormPart = (props) => {
  return (
    <Grid span={12} gap="10px" className="product-form-part ">
      <GridItem span={3} className="product-form-label">
        <Flex stack={true} style={{ height: "100%" }} jc="center">
          <label className="bold small">{props.label}</label>
        </Flex>
      </GridItem>

      <GridItem span={9} className="product-form-children">
        <Flex style={{ height: "100%" }}>{props.children}</Flex>
      </GridItem>
    </Grid>
  );
};

const ProductForm = () => {
  return (
    <Flex stack={true} spacing={16} className="product-form ">
      <Flex stack={true} spacing={40}>
        <Flex stack={true} spacing={16}>
          <ProductFormPart label={"Size"}>
            <Flex spacing={10} className="flex-grow">
              <Flex style={{ flexBasis: "65%" }}>
                <Input type="number" placeholder="Select a shirt size" />
              </Flex>

              <Flex style={{ flexBasis: "35%" }}>
                <Button backgroundColor="#F5F5F6" jc="center">
                  <p className="bold">View Size Chart</p>
                </Button>
              </Flex>
            </Flex>
          </ProductFormPart>

          <ProductFormPart label="Name">
            <Input
              type="text"
              placeholder="What name would you want in the shirt?"
            />
          </ProductFormPart>

          <ProductFormPart label="Number on Shirt">
            <Input type="text" placeholder="Enter a number between 0 and 99" />
          </ProductFormPart>

          <ProductFormPart label="Patch">
            <Input type="text" placeholder="Select a patch" />
          </ProductFormPart>

          <ProductFormPart label="Quantity">
            <Flex style={{ flexBasis: "20%" }}>
              <Input type="number" placeholder="1" />
            </Flex>
          </ProductFormPart>
        </Flex>
        <Button
          padding="18px 12px"
          backgroundColor="#F9DC38"
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
                <img src={cart} />
              </Flex>
            </Flex>
          }
        >
          <p className="medium bold">Add to Cart</p>
        </Button>
      </Flex>
    </Flex>
  );
};

const ProductPage = () => {
  return (
    <Flex stack={true} spacing={20} className="">
      <Flex stack={true} spacing={40} className="product-preview ">
        <div
          className="product-map"
          className=""
          style={{ padding: "16px 0px 0px 0px" }}
        >
          <p className="small">
            <span className="blue-link">Home</span> {">"}{" "}
            <span className="blue-link">England — Premier League</span> {">"}{" "}
            Manchester United 21 - 22 Home Shirt
          </p>
        </div>

        <Grid span={12} className="product-preview-grid " gap="80px">
          <GridItem className="product-preview-grid-child " span={6} md={12}>
            <ProductGallery />
          </GridItem>

          <GridItem className="product-preview-grid-child   " span={6} md={12}>
            <Flex stack={true} style={{ height: "100%" }} spacing={40}>
              <ProductDetails />
              <ProductForm />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      <Flex>
        <RewardTag />
      </Flex>
    </Flex>
  );
};

export default ProductPage;
