import React, { useState } from "react";
import second from "../page/niranjna/02.jpg";
import second1 from "../page/niranjna/02 (2).jpg";
import second2 from "../page/niranjna/02 (3).jpg";
import second3 from "../page/niranjna/03.jpg";
import { Row, Col } from "react-bootstrap";
import Popup from "../page/popup";
export const Wallclock = () => {
  const [open, setOpen] = useState(0);
  const [id, setId] = useState();
  const [data, setData] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.slice(0, 10); // Limit input to 10 characters

    setPhoneNumber(formattedValue);
  };

  function openForm(id) {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("pop").style.opacity = 0.5;
  }
  const handleUpdate = async () => {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("pop").style.opacity = 1;
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [arr, setArr] = useState([
    {
      url: second,
      para: "KeyHolder",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "4.2⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 1,
    },
    {
      url: second1,
      para: "WallClock",
      link: "/Wallclock",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "3.2⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 2,
    },
    {
      url: second2,
      para: "PhoneCover",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "4⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 3,
    },
    {
      url: second3,
      para: "Pantings",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "5.0⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 4,
    },
    {
      url: second2,
      para: "PhoneCover",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "4⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 5,
    },
    {
      url: second3,
      para: "Pantings",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "5.0⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 6,
    },
    {
      url: second,
      para: "KeyHolder",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "4.2⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 7,
    },
    {
      url: second1,
      para: "WallClock",
      link: "/Wallclock",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "3.2⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 8,
    },
    {
      url: second2,
      para: "PhoneCover",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "4⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 9,
    },
    {
      url: second3,
      para: "Pantings",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "5.0⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 10,
    },
    {
      url: second2,
      para: "PhoneCover",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "4⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 11,
    },
    {
      url: second3,
      para: "Pantings",
      link: "/Keyholder",
      p1: "New prime KeyHolder",
      p2: "pack of 1",
      rating: "5.0⭐",
      rateperson: "(154)",
      price: "₹500",
      id: 12,
    },
  ]);
  // const getItemById = (id) => {
  //   return arr.find(item => item.id === id);
  // };

  // const item = getItemById(5);
  return (
    <div>
      <div id="pop">
        <div className="impl_bread_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h1>Wall Clock</h1>
              </div>
              <hr />
              <span style={{ zIndex: "999" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
                ea. <br />
                <p>Lorem ipsum dolor sit amet.</p>
              </span>
            </div>
          </div>
        </div>
        <div>
          <Row>
            {arr.map((data, i) => (
              <Col className="box-wrap" sm={12} md={4} lg={3}>
                <div
                  onClick={() => (setId(data.id), openForm())}
                  className="product1"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "35vh",
                      objectFit: "cover",
                    }}
                    src={data.url}
                    alt=""
                  />
                  <p>
                    <span className="head1">{data.p1} </span> <br />
                    <span
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingBottom: "0.7%",
                        borderRadius: "5px",
                      }}
                    >
                      {data.rating}
                    </span>{" "}
                    {data.rateperson} <br />
                    {data.price}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div style={{ width: "100%", textAlign: "center", marginBottom: "5%" }}>
          <button
            style={{
              backgroundColor: "blue",
            }}
          >
            View More →
          </button>
        </div>
      </div>
      <form
        id="myForm"
        className="form-popup text-center form-container text-dark"
      >
        <Row style={
          {
            // height:"31rem"
          }
        }>
          <Col className="product1" sm={4} md={5}>
            {arr
              .filter((array) => array.id === id)
              .map((data) => (
                <img
                 
                  src={data.url}
                  alt="image"
                />
              ))}
          </Col>
          {open === 0 ? (
            <Col className="fram " sm={6} md={6}>
              <span
                onClick={handleUpdate}
                type="button"
                className="bt12"
              >
                ❌
              </span>
              <div className="newHeadInISQ1 ">
                
                Product Details:
              </div>
              <br />

              <table width="100%">
                <tbody>
                  <tr className="ds6">
                    <td className="ds3 w12_mn">Price</td>
                    <td className="ds3 w15_mn">RS 300/Piece</td>
                  </tr>
                  <tr className="ds6">
                    <td className="ds3 w12_mn">Minimum Order Quantity</td>
                    <td className="ds3 w15_mn">50 Piece</td>
                  </tr>
                  <tr className="ds6">
                    <td className="ds3 w12_mn">Dial Shape</td>
                    <td className="ds3 w15_mn">Rounded</td>
                  </tr>
                  <tr className="ds6">
                    <td className="ds3 w12_mn">Type</td>
                    <td className="ds3 w15_mn">Analog</td>
                  </tr>
                  <tr className="ds6">
                    <td className="ds3 w12_mn">Occasion</td>
                    <td className="ds3 w15_mn">Anniversary</td>
                  </tr>
                  <tr className="ds6">
                    <td className="ds3 w12_mn">Diameter</td>
                    <td className="ds3 w15_mn">12 inch</td>
                  </tr>
                  <tr className="ds6">
                    <td className="ds3 w12_mn">Mounting Type</td>
                    <td className="ds3 w15_mn">Wall Mounted</td>
                  </tr>
                  <tr className="ds6">
                    <td className="ds3 w12_mn">Brand</td>
                    <td className="ds3 w15_mn">Shiva Arts</td>
                  </tr>
                </tbody>
              </table>
              <button
                onClick={() => setOpen(1)}
                style={{
                  marginTop: "5%",
                }}
              >
                Click me ! If You are Intrested
              </button>
              {/* <input
              type="number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength="10"
              placeholder="Phone Number"
              required
            /> */}
            </Col>
          ) : (
            <Col className="fram" sm={6} md={6}>
              <span
                onClick={handleUpdate}
                type="button"
                className="bt12"
              >
                ❌
              </span>
              <div className="newHeadInISQ1  ">
                <br />
                Adding a few details of your requirement can get you quick
                response from the supplier
              </div>
              <br />
             <table>
                <tr>
                  <input
                  
                    type="number"
                    className=""
                    name="Quantity"
                    id="3207816"
                    placeholder="Quantity"
                    />
                    {arr
              .filter((array) => array.id === id)
              .map((data) => (
                <pre> &nbsp; <b> {data.price}/Piece</b></pre>
                ))}    
              </tr>
              <br />
              <tr style={{display:"flex"}}>

                    <input
                    style={{width:"16vw"}}
              type="number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength="10"
              placeholder="Phone Number"
              required
            />  
              </tr>
              <br />
              <tr style={{display:"flex"}}>
                <input style={{width:"16vw"}} type="email" placeholder="E-mail"/>
              </tr>
              <br />
              <tr style={{display:"flex"}}>
                <input style={{width:"16vw"}} type="text" placeholder="Address"/>
              </tr>
                </table>
              

              

              <p
           
            className="bt18"
              style={{
                marginTop: "5%",
              }}
            >
              Submit
            </p>
              
            </Col>
          )}
        </Row>

        {/* <br /> */}
      </form>
    </div>
  );
};
