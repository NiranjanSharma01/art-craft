import React from "react";
import { Row, Col } from "react-bootstrap";
import second from "./niranjna/shivaarts.jpg";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  button,
} from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <div>
      <div className="foot" style={{ width: "90vw" }}>
        <hr />
        <br />
        <Row>
          <Col>
            <h2>
              <img
                style={{ objectFit: "cover", width: "21%" }}
                src={second}
                alt=""
              />
            </h2>{" "}
            <br />
            <p style={{ fontSize: "120%" }}>
              Welcome to SHIVA ARTS, where artistry meets elegance. 🎨✨ Explore
              our stunning collection of handcrafted masterpieces.
            </p>
          </Col>
          <Col sm={12} md={2}>
            <ul className="ul1">
              <h3>Our Products</h3>
              <li>▶ KeyHolder</li>
              <li>▶ WallClock</li>
              <li>▶ Tea Coster</li>
              <li>▶ Others</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <ul className="ul1">
              <h3>Information</h3>
              <li>▶ About Us</li>
              <li>▶ Our Mission</li>
              <li>▶ Vision</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <h3>Contect Us</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            recusandae.
          </Col>
          <Col sm={12} md={3}>
            <h3 style={{ paddingLeft: 10 }}>Social Media</h3>
            <section className="">
              <button
                floating
                className="m-2"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="facebook-f" />
              </button>

              <button
                floating
                className="m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="twitter" />
              </button>

              <a href="https://www.shivaarts.in/">
                <button className="m-1" style={{ backgroundColor: "#dd4b39" }}>
                  <MDBIcon fab icon="google" />
                </button>
              </a>
              <br />
              <a href="https://www.instagram.com/shivaartsjaipur/">

              <button
                className="m-2"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="instagram" />
              </button>
              </a>

              <button
                floating
                className="m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </button>

              <button
                floating
                className="m-1"
                style={{ backgroundColor: "#333333" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </button>
            </section>
          </Col>
        </Row>
      </div>
      <div className="footer1">©2023 Shiva Arts All Rights Reserved </div>
    </div>
  );
};
export default Footer;
