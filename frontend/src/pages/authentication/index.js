import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "../components/Footer";

import { UserContext } from "./UserContext";

const Authentication = () => {

  useEffect(() => {
    document.title = "Signup | Login";
  }, []);

  const { logIn } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [buttonText, setButtonText] = useState("Login"); 
  const [btnTextSignup, setBtnTextSignup] = useState("Register");
  const [signUpMessage, setSignUpMessage] = useState("");
  const navigate = useNavigate(); 
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    country: "",
    password: "",
    confirmPassword: "",
  }); 

const blankInputSU = !formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword;

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    }); 
    

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  }; 

  const blankInputLI = loginInfo.email === "" || loginInfo.password === "";

  const handleLogin = async (event) => {
    event.preventDefault();
    setButtonText("Getting your info");

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginInfo.email,
          password: loginInfo.password,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        await logIn(userData);
        setErrorMessage(null);
        navigate("/");
      } else {
        const error = await response.text();
        const message = JSON.parse(error).message;
        setButtonText("Failed to log in");
        setErrorMessage(`Log in failed: ${message}`); 
      }
    } catch (error) {
      setErrorMessage("An error occurred, please try again.");
    }
  };


  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSignup = async (event) => {
    event.preventDefault();
    setBtnTextSignup("Creating your account!");
    try {

      const {
        firstName,
        lastName,
        phone,
        email,
        address,
        city,
        postcode,
        country,
        password,
        confirmPassword,
      } = formData;

      const response = await fetch("/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          address,
          city,
          postcode,
          country,
          password,
          confirmPassword,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        await logIn(userData);
        setSignUpMessage("Your account has been created, you can now login");
        setBtnTextSignup("Done!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          postcode: "",
          country: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        const errorMessage = await response.text();
        setSignUpMessage(`Sign up failed: ${JSON.parse(errorMessage).message}`);
        setBtnTextSignup("Sign up failed!");
      }
    } catch (error) {
      setSignUpMessage("An error occurred, please try again.");
    }
  };

  return (

    <>
      <Navbar />
      <div>
        <Login
          loginInfo={loginInfo}
          handleChange={handleChange}
          blankInputLI={blankInputLI}
          navigate={navigate}
          handleLogin={handleLogin}
          errorMessage={errorMessage}
          buttonText={buttonText}
        />
        <Signup
          formData={formData}
          handleChangeForm={handleChangeForm}
          blankInputSU={blankInputSU}
          handleSignUp={handleSignup}
          signUpMessage={signUpMessage}
          btnTextSignup={btnTextSignup}
        />
      </div>
      <Footer />
    </>
  );
};



export default Authentication;