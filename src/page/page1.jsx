import React, { useEffect} from 'react'
import { Row,Col, Carousel } from "react-bootstrap";
import "./page.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import second from './niranjna/marble coaster.webp'
import second1 from './niranjna/marble pen stand 1.webp'
import second2 from './niranjna/marble plate2.webp'
import second3 from './niranjna/marble pot1.webp'
import second4 from './niranjna/pooja thali1.webp'
import second5 from './niranjna/showpiece wooden elephant.webp'
import second6 from './niranjna/marble coaster.webp'
import second7 from './niranjna/wooden pen stand1.webp'
import { Link } from 'react-router-dom';
import background from "./niranjna/wallpaper.png";


export const Page1 = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 600,
        settings: {

          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2
        }
      },
      
    ]
  };
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    function Welcome(props) {
        return (
          <button>
            <i style={{ paddingRight: 10 }} className= {props.icon}></i>
            {props.txt}
          </button>
        );
      }
      function Image(props) {
        return <img style={{objectFit:"cover"}} className="img" src={props.img} alt=""/>;
      }
    
      function Images(props) {
        return ( <div className='ps'>
        <img style={{objectFit:"cover"}} className="imgs" src={props.imgs} alt=""/>
        
        </div>
        );
      }
      const arr=[
        {
          url:second,
           para:"Coasters",
           link:"/K"
        },
        {
          url:second1,
           para:"Desk Organisers",
           link:"/Wallclock"

        },
        {
          url:second2,
           para:"Marble Plates",
           link:"/Keyholder"

        },
        {
          url:second3,
           para:"Marble Pots",
           link:"/Keyholder"

        },
        
        {
          url:second5,
           para:"Showpiece and Idols",
           link:"/Keyholder"

        },
        
        
        
      ]
  return (
    <div  >

<div data-aos="fade-center" data-aos-duration="800">

          
          <Carousel  controls={false} indicators={false} style={{display:"flex",alignItems:"center"}}>
           
                <Carousel.Item >
              <img
                style={{width:"100vw",height:"62vh",objectFit:"cover"}}
                src={background}
                alt="First slide"
              />
              
              <div className='caption' >
          <h1 >
           SHIVA ARTS
          </h1>
          <p>where artistry meets timeless elegance,  igniting your senses...</p>
          <button className='bt00'>Start Shopping Now →</button>
          
          {/* <Welcome txt="Start Shopping" icon="icon2 fa-solid fa-arrow-right" /> */}
              </div>
            </Carousel.Item>
          
          
          </Carousel>
             
        
      </div>
     
      <p data-aos="fade-right" data-aos-duration="1000" className="f9" style={{cursor:"pointer"}} > Free Shipping For You Till Midnightbr <br /> <i className=" icon1 fa-solid fa-truck-fast"></i></p>
      <div className="f3">
        {/* <Row className="ro1">
          <Col data-aos="fade-right" data-aos-duration="1000" className='c2' >
            
        <Images  imgs={second1}/>
        <div className="btne"> <p className="p" >PlatForm Women's Cloths</p>
         <button className="bt text-light">Shop Now  <i className="fa-solid fa-arrow-right"></i>
         </button></div>
          </Col>
          <Col data-aos="fade-left" data-aos-duration="300" className='c1' >
        <Images imgs={second2}/>
       <div className="btne"> <p className="p"style={{paddingRight:29}} >PlatForm Man's Cloths</p>
         <button className="bt text-light">Shop Now <i className="fa-solid fa-arrow-right"></i></button></div>
          </Col>
        
        </Row> */}
      </div>
     
      <div  className='f4'>
      <h3  style={{width:"100vw",paddingTop:10,textAlign:"center"}}>Product Category</h3> <br />

      <Slider style={{width:"93vw"}} {...settings}>
      {
            arr.map((data, i)=> (
              <div className='box-wrap'>
                <Link style={{textDecoration:"none",textAlign:"center"}} to={data.link}>
                <div className='product'>
                <img src={data.url}  alt=""/>

                <h3 style={{color:"black"}}>{data.para}</h3>
                </div>
                </Link>
              </div>
            ))
          }
   
    </Slider>
      </div>
    </div>
    
  )
}
export default Page1