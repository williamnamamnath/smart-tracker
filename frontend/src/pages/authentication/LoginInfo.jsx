import { createContext, useState } from "react";

export const UserAuthContext = createContext();

const UserAuthProvider = ({ children }) => {

const [loginConfirmed, setLoginConfirmed] = useState(false);
const [signedIn, setSignedIn] = useState({
    _id: "",
    fName: "",
    lName: "",
    email: ""
});


const loggedIn = (userInfo) => {
    setSignedIn(userInfo);
    setLoginConfirmed(true);
};

const signedOut = () => {
    setSignedIn({
    fName: "",
    lName: "",
    email: "",
    phone: ""
    });

    setLoginConfirmed(false);
    window.localStorage.removeItem("loginConfirmed");
};

return (
    <UserAuthContext.Provider value={{ signedIn, loginConfirmed, loggedIn, signedOut }}>
        {children}
    </UserAuthContext.Provider>
    );
};

export default UserAuthProvider;