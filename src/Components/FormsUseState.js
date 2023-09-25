import React, { useState } from "react";
import Hero from "./Hero";

const FormsUseState = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = () => {
    console.log(details);
  };
  return (
    <>
      <Hero text="Forms with UseState" />
      <form className="m-4" onSubmit={handleSubmit}>
        <h3>Name :</h3>
        <input type="text" name="name" onChange={handleChange} />
        <h3>Email :</h3>
        <input type="email" name="email" onChange={handleChange} />
        <h3>Password :</h3>
        <input type="password" name="password" onChange={handleChange} />
        <h3>Address :</h3>
        <textarea name="address" onChange={handleChange}></textarea>
        <div className="m-4">
          <button className="btn btn-primary btn-lg"> Save</button>
        </div>
      </form>
    </>
  );
};

export default FormsUseState;
