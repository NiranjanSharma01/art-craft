import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import second from "./niranjna/02.jpg";
import second1 from "./niranjna/02 (2).jpg";
import second2 from "./niranjna/02 (3).jpg";
import second3 from "./niranjna/03.jpg";
// import ExcelReader from "./excel"


export const Page2 = () => {
  function Image(props) {
    return (
      <img style={{ objectFit: "cover",opacity:0.3 }} className="img" src={props.img} />
    );
  }
  const arr = [
    {
      url: second,
      para: "Min. 40% off",
    },
    {
      url: second1,
      para: "Min. 40% off",
    },
    {
      url: second2,
      para: "Min. 40% off",
    },
    {
      url: second3,
      para: "Min. 40% off",
    },
  ];
  return (
    <div>
      <div className="f6">
                <br /> <br />
                <h3 className="ms-3" style={{width:"90vw",paddingTop:10,textAlign:"center"}}>Offers Detail</h3>

        <Carousel
          controls={false}
          indicators
          interval={2500}
          pause={false}
          
          style={{ marginTop: 50, marginBottom: 100 }}
        >
          {arr.map((data, i) => (
            <Carousel.Item style={{}}>
              <Row className="row12" >
            <Col  sm={5} md={6}>
              <img
                 style={{
                  
                }}
                src={data.url}
                alt="First slide"
              />
            </Col>
            <Col className="fram1" sm={6} md={6}>
            
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
                 
                </tbody>
              </table>
            </Col>
              </Row>
              
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div style={{ marginTop: 40,position:"relative" }}>
        <Image img={second2} />
      <div className="thoughts">
      You’re braver than you believe, <br /> and stronger than you seem, <br /> and smarter than you think.
      <br />__ <br />
A.A. Mine
<br /> <p style={{fontWeight:50,fontSize:25}}>
  
Author/Poet
</p>
      </div>
      </div>
    {/* <ExcelReader/> */}

    </div>
  );
};
export default Page2;
