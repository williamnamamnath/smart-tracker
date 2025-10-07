import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { UserContext } from "./UserContext";

const LoginSignUp = () => {

  useEffect(() => {
    document.title = "Login | Register";
  }, []);

  const { logIn } = useContext(UserContext);

  const [errorMessage, setErrorMessage] = useState(""); 
  const [buttonText, setButtonText] = useState("Login"); 
  const navigate = useNavigate();
  
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
        navigate("/dashboard");
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

  const [btnTextSignup, setBtnTextSignup] = useState("Register");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
    postcode: "",
    country: "",
    password: ""
  });

  const [signUpMessage, setSignUpMessage] = useState("");

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const blankInputSU =!formData.firstName || !formData.lastName || !formData.email || !formData.password;

  const handleSignUp = async (event) => {

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
        province,
        postcode,
        country,
        password
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
          province,
          postcode,
          country,
          password
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
          province: "",
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
      <div className="container my-5">
        <h1 className='my-5 fw-bold fs-1 text-center'>Welcome To SmartTracker</h1>
        <h3 className="mb-5 text-center">Create you account today or log back in to continue saving.</h3>

        <div className="mt-5 py-3 container">
          <div className="row justify-content-center">

            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightgreen" }}>
                <Login
                  loginInfo={loginInfo}
                  handleChange={handleChange}
                  blankInputLI={blankInputLI}
                  navigate={navigate}
                  handleLogin={handleLogin}
                  errorMessage={errorMessage}
                  buttonText={buttonText}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
                <Signup
                  formData={formData}
                  handleChangeForm={handleChangeForm}
                  blankInputSU={blankInputSU}
                  handleSignUp={handleSignUp}
                  signUpMessage={signUpMessage}
                  btnTextSignup={btnTextSignup}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;