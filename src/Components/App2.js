import React from "react";
import Hero from "./Hero";
import LoginContextProvider from "../Context/LoginContextProvider";
import MainComponent from "./MainComponent";

const App2 = () => {
  return (
    <>
      <Hero text="Create Context" />
      <LoginContextProvider>
        <MainComponent />
      </LoginContextProvider>
    </>
  );
};

export default App2;
