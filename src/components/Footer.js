import React from "react";
import Flex from "./layout/Flex";
import Grid, { GridItem } from "./layout/Grid";
import Background from "../assets/images/partners.svg";
import facebook from "../assets/icons/svg/facebook-f.svg";
import twitter from "../assets/icons/svg/twitter.svg";
import instagram from "../assets/icons/svg/instagram.svg";
import plane from "../assets/icons/svg/paper-plane.svg";

import "../styles/footer.css";

const Footer = () => {
  return (
    <Flex className="bg-footer app-footer" stack={true}>
      <Grid span={12} className="footer-grid">
        <GridItem span={3} md={12}>
          <Flex className="" jc="center" stack={true} spacing="16px">
            <p>
              <span className="bold">Main Menu</span>
            </p>
            <p>
              <span className="small">Home</span>
            </p>
            <p>
              <span className="small">T-Shirts</span>
            </p>
            <p>
              <span className="small">NBA</span>
            </p>
            <p>
              <span className="small">Tracksuits</span>
            </p>
            <p>
              <span className="small">Products Delivery • 1 - 2 days</span>
            </p>
            <p>
              <span className="small">Contact</span>
            </p>
            <p>
              <span className="small">Reviews</span>
            </p>
          </Flex>
        </GridItem>

        <GridItem span={3} md={12}>
          <Flex className="" stack={true} spacing="16px">
            <p>
              <span className="bold">Secondary Menu</span>
            </p>
            <p>
              <span className="small">Search</span>
            </p>
            <p>
              <span className="small">Privacy Policy</span>
            </p>
            <p>
              <span className="small">Shipping Policy</span>
            </p>
            <p>
              <span className="small">Returns Policy</span>
            </p>
            <p>
              <span className="small">Terms of Service</span>
            </p>
          </Flex>
        </GridItem>

        <GridItem span={3} md={12}>
          <Flex className="" stack={true} spacing="16px">
            <p>
              <span className="bold">Subscribe</span>
            </p>
            <p>
              <span className="small">
                Subscribe to our mailing list to <br /> receive the latest news
              </span>
            </p>
            <Flex>
              <input
                style={{
                  height: "40px",
                  maxWaidth: "200px",
                  border: "2px solid #EAEAEC",
                  padding: "0px 0px 0px 24px",
                }}
                placeholder="Email Address"
              />
              <Flex
                className=" bg-primary "
                style={{ width: "30px", height: "35px", padding: "4px" }}
              >
                <Flex
                  ai="center"
                  jc="center"
                  className=""
                  style={{ width: "100%" }}
                >
                  <img src={plane} className="" />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem span={3} md={12}>
          <Flex className="footer-icons" stack={true} spacing="16px">
            <p>
              <span className="bold">Follow Us</span>
            </p>
            <Flex spacing="8px">
              <Flex
                className=" bg-secondary "
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
                className=" bg-secondary "
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
                className=" bg-secondary "
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

      <Flex jc="space-between" className="footer-bottom">
        <Flex className="tnc">
          <p>
            <span className="small">
              © 2021 Jambulani • All rights reserved
            </span>
          </p>
        </Flex>

        <Flex className="brands">
          <img src={Background} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
