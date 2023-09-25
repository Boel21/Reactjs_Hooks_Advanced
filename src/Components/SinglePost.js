import React, { useContext } from "react";
import Hero from "./Hero";
import { LoginContext } from "../Context/LoginContextProvider";

const SinglePost = () => {
  const login = useContext(LoginContext);
  const text = `This is the single post component inside the mainComponent and the passed value is ${login}`;
  return (
    <>
      <Hero text={text} />
    </>
  );
};

export default SinglePost;
