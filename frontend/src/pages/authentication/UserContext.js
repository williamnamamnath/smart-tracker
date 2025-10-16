import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    country: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = (userData) => {
    setLoggedInUser(userData);
    setIsAuthenticated(true);
  };



  const logOut = () => {

    setLoggedInUser({
      _id: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      postcode: "",
      country: "",
    });
    setIsAuthenticated(false);

  };

  return (

    <UserContext.Provider
      value={{ loggedInUser, isAuthenticated, logIn, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;