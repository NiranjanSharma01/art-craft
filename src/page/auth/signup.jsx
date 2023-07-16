import React, { useState } from "react";
function Login(props) {
  props.setEate(0);
  const [input, setInputs] = useState({});

  const [logoProfile, setLogoProfile] = useState("");
  const [logoCover, setLogoCover] = useState("");

  const Change = (e) => {
    e.preventDefault();
    setInputs({
      ...input,
      [e.target.name]: e.target.value,
    });
    // setLogo(e.target.files[0]);
  };

  const Change1 = (e) => {
    e.preventDefault();
    setLogoProfile(e.target.files[0]);
  };

  const Change2 = (e) => {
    e.preventDefault();
    setLogoCover(e.target.files[0]);
  };

  console.log("Test 1", logoProfile, logoCover, input);

  const formData = new FormData();
  const submitForm = async (e) => {
    e.preventDefault();
    formData.append("email", input.email);
      formData.append("username", input.username);
      formData.append("password", input.password);
      formData.append("phone", input.phone);
      formData.append("usertype", input.usertype);
      
    await fetch("http://localhost:3000/user/signup", {
      method: "POST",
      body: formData,
      mode:"no-cors",
      headers: {
        
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((Res) => {
        alert("Submit");
        console.log("Form submitted", Res);
        alert("Submit");
        console.log(Res);
        setInputs({
          ...input,
          [e.target.name]: e.target.value,
        });
      })

      .catch((err) => console.log("error detected", err.message));
  };
  // console.log(submitForm)
  // console.log(Change)
  // console.log(input);
  return (
    <>
  

      <div className="f21">
      <img style={{position:"absolute",width:"20vw",opacity:0.2,marginTop:58,marginLeft:60}} src="https://th.bing.com/th/id/R.ab652e76aca2bb1596aceebcf51c0a29?rik=4tKBsuKGse6rSw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-lock-picture-lock-2-icon-1600.png&ehk=5bUCk2gxyyG7Z0k6n3F0YYIRoTDMm5tewPGXcT5Ukmw%3d&risl=&pid=ImgRaw&r=0" alt="" />
        
        <form className="name">
          <h1 className="mp">
            Sign Up <i style={{fontSize:30}} class="fa-sharp fa-solid fa-key"></i> <br />
            <h3>Let's create your account</h3>
          </h1>
            
          <div className="name12">
            <label className="">
              First Name :
              <input
                className="in"
                onChange={Change}
                name="username"
                type="string"
              />
            </label>
            <label className="">
              Last name : 
              <input
                className="in"
                onChange={Change}
                name="phone"
                type="number"
              />
            </label>
            <label className="">
              Email id :
              <input
                className="in"
                onChange={Change}
                name="email"
                // value={input.email || ""}
                type="email"
              />
            </label>
            <label className="">
              Password:
              <input
                className="in"
                onChange={Change}
                name="password"
                type="string"
              />
            </label>
            <label className="">
            usertype
              <input
                className="in"
                onChange={Change}
                name="usertype"
                type="string"
              />
            </label>
            

          </div>
          <button style={{marginLeft:"49px",marginTop:"7%",backgroundColor:"rgb(247, 58, 58)",fontSize:"15px",color:"white"}} onClick={submitForm}>Submit</button>

        </form>
      </div>
    </>
  );
}
export default Login;
