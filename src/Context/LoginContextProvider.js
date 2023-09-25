import React, { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(true);
  useEffect(() => {
    setUserDetails(false);
  }, []);
  return (
    <LoginContext.Provider value={userDetails}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
