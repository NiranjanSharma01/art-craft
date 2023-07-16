import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import second from './niranjna/shivaarts-removebg-preview.png'
export const Naves = ({ estate, setEstate }) => {
  const [state, setState] = useState("true");
  const [tate, setTate] = useState("true");
  const [teate, setTeate] = useState(true);

  const Click = () => {
    setState(!state);
  };
  const Click1 = () => {
    setTate(!tate);
  };

  return (
    <div
      className="pd"
      style={{ position: "sticky", top: 0, zIndex: 999 }}
      onClick={() => {
        state === true && setState(false);
        tate === true && setTate(false);
      }}
    >
      <div className="nav3">
        <h3 style={{ paddingTop: 12, paddingLeft: 20, width: 200 }}>
        <Link to="/" style={{ color: "unset", textDecoration: "none" }}>
            {" "}
            <div className="App">
              <Typewriter 
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Welcome To")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("ShivaArts")
                    .start();
                }}
              />
            </div>
          </Link>
        </h3>

        <ul
          style={{ display: teate === true ? "none" : "block" }}
          className="nave"
        >
          <li className="ns0">
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(255, 50, 36)",
                fontWeight: "bold",
              }}
              to="/"
            >
              {" "}
              Home
            </Link>
          </li>
          <li className="ns0">About</li>
          {/* <li className="ns0" onClick={Click}>
            Products <i className="fa-solid fa-caret-down"></i>
            {state === true && (
              <div className="ns2">
                <ul>
                  <li>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgba(255, 50, 36)",
                        fontWeight: "bold",
                      }}
                      to="/man"
                    >
                      For Man
                    </Link>{" "}
                  </li>
                  <li>For Women</li>
                </ul>
              </div>
            )}
          </li> */}
          <li className="ns0" onClick={Click1}>
            Theme <i className="fa-solid fa-caret-down"></i>
            {tate === true && (
              <div className="ns2">
                <ul>
                  <li onClick={() => setEstate("Dark")} value="Dark">
                    Dark
                  </li>
                  <li onClick={() => setEstate("Light")} value="Light">
                    Light
                  </li>
                </ul>
              </div>
            )}
          </li>
          <div className="ns">
            <Row>
              <Col>
                <Link className="bt8" to="/login">
                  <i
                    style={{ maxHeight: "35px" }}
                    className=" fa-solid fa-cart-shopping"
                  ></i>
                </Link>
              </Col>
              <Col className="ns">
                <i
                  style={{ maxHeight: "35px" }}
                  className="bt8 fa-solid fa-user"
                ></i>
              </Col>
            </Row>
          </div>
          {/* <div className="ns01">
            <input
              style={{
                paddingLeft: 30,
                borderRadius: 5,
              }}
              type="serach"
            />
            <button
              className="bt5"
              style={{
                backgroundColor: "transparent",
                color: "black",
                border: "none",
                marginTop: -1,
              }}
              type="submit"
            >
              <i className=" fa-solid fa-magnifying-glass"></i>
            </button>
          </div> */}
        </ul>

        <div className="nit">
          <p
            className="bt7"
            style={{ backgroundColor: "transparent", cursor: "pointer" }}
          >
            <i
              onClick={() => setTeate(!teate)}
              className="fa-solid fa-bars "
            ></i>
          </p>
        </div>
      </div>
      <div className="nav31">
        <h3 style={{ paddingTop: 12, paddingLeft: 30, width: 200 }}>
          <Link to="/" style={{ color: "unset", textDecoration: "none" }}>
            {" "}
            <div className="App">
              <img style={{objectFit:"cover",width:"4.5vw"}} src={second} alt="" />
              {/* <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
                onInit={(typewriter) => {
              
                  typewriter
                  
                    .typeString("Welcome To")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("ShivaArts")
                    .pauseFor(1000)
                    .start();}
                }
              /> */}
            </div>
          </Link>
        </h3>
        <ul className="nave1">
          <li className="ns0">
            <Link
              className="bt8"
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="ns0">
            <Link
              className="bt8"
              style={{
                textDecoration: "none",
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          {/* <li className="ns0" onClick={Click}>
            Products <i className="fa-solid fa-caret-down"></i>
            {state === true && (
              <div className="ns2">
                <ul>
                  <li>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgba(255, 50, 36)",
                        color: "white",
                      }}
                      to="/man"
                    >
                      Wall Clock
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgba(255, 50, 36)",
                        color: "white",
                      }}
                      to="/Keyholder"
                    >
                      KeyHolder
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            )}
          </li> */}
          <li className="ns0" onClick={Click1}>
            Theme <i className="fa-solid fa-caret-down"></i>
            {tate === true && (
              <div className="ns2">
                <ul>
                  <li onClick={() => setEstate("Dark")} value="Dark">
                    Dark
                  </li>
                  <li onClick={() => setEstate("Light")} value="Light">
                    Light
                  </li>
                </ul>
              </div>
            )}
          </li>
          <div className="ns01">
            <input
              style={{
                paddingLeft: 30,
                borderRadius: 5,
              }}
              type="serach"
            />
            <button
              className="bt5"
              style={{
                backgroundColor: "transparent",
                color: "black",
                border: "none",
                marginTop: 1,
                
              }}
              type="submit"
            >
              <i className=" fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="ns11" style={{ marginTop: 2 }}>
            <Row>
              <Col>
                <Link className="bt8" to="/login">
                  <i
                    style={{ maxHeight: "35px" }}
                    className=" fa-solid fa-user"
                  ></i>
                </Link>
              </Col>
              <Col style={{ marginLeft: 20 }}>
                <i
                  style={{ maxHeight: "35px" }}
                  className="bt8 fa-solid fa-cart-shopping"
                ></i>
              </Col>
            </Row>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Naves;
