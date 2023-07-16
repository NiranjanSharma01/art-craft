import React from "react";
import { Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";

export const Nav = ({state,setState}) => {
  function Welcome(props) {
    return (
      <button>
        <i style={{ paddingRight: 12 }} className={props.icon}></i>
        {props.txt}
      </button>
    );
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg" variante="dark" style={{padding:10}}>
        <div className="container-fluid ">
          <a style={{color:"rgba(254, 38, 38, 0.9)"}} className="navbar-brand text-" href="#">
            ZustKart
          </a>
          <button
            className="navbar-toggler"
          style={{width:50}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           <i class="fa-solid fa-bars text-dark"></i>
          </button>
          <div style={{width:"100vw"}} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              
              className="navbar-nav me-auto mb-2 mb-lg-0"
              
            >
              <li className="nav-item active">
                <a to="/home" className="nav-link " aria-current="page" href="#">
                 <Link style={{textDecoration: "none",color:"black"}} to="/">Home</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-dark" href="#">
                <Link style={{textDecoration: "none",color:"black"}} to="/about">About</Link> 

                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul  className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      For Man
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      For Women
                    </a>
                  </li>
                  
                 
                </ul>
              </li>
              <li className=" dropdown active">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Theme
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a onClick={()=>setState("Dark")} value="Dark" className="dropdown-item" href="#">
                      Dark
                    </a>
                  </li>
                  <li>
                    <a  onClick={()=>setState("Light")} value="Light" className="dropdown-item" href="#">
                     Light
                    </a>
                  </li>
                  
                  
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  text-dark"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                 <Link  style={{textDecoration: "none",color:"black"}} to="/footer">Contect</Link> 
                </a>
              </li>

              <form
             className="f10"
              >
                <input 
                  style={{ padding:5,width: 170, paddingLeft: 32,borderBottom:"1px solid black",border:"none" }}
                  type="search"
                  aria-label="Search"
                />
                <button
             style={{position:"absolute",backgroundColor:"white",marginTop:2,marginLeft:-6,backgroundColor:"transparent"}}
                  id="b0"
                  type="submit"
                >
                  <i style={{color:"black"}} className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <div style={{width:600}} >
                <Row>
                  <Col style={{marginLeft:"60%",width:100}}>
                  
              <Welcome  icon="fa-solid fa-user" txt="Login" />
              </Col > <Col style={{width:10}}><Welcome
                icon="fa-solid fa-bag-shopping"
                
                txt="Cart"
              /></Col> </Row></div>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    
  );
};
export default Nav;
