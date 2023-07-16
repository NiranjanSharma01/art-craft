import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer style={{width:"30vw"}} className="p-3 my-5 d-flex flex-column">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <button
                floating
                className="m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="facebook-f" />
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

              <button className="m-1" style={{ backgroundColor: "#dd4b39" }}>
                  <MDBIcon fab icon="google" />
                </button>

              
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-1 mb-4">
            <MDBCheckbox  name='flexCheck' value='' id='flexCheckDefault' /> <span style={{marginRight:"40%"}}><b>Remember Me</b></span>
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#0d6efd' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#0d6efd' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#0d6efd'}}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#0d6efd' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' /> */}
            {/* <MDBCheckbox  name='flexCheck' value='' id='flexCheckDefault' /> <span style={{marginRight:"43%"}}><b> I have read and agree to the terms</b></span> */}
          
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;