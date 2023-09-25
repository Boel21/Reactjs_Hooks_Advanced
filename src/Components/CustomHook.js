import React from "react";
import Hero from "./Hero";
import useFetch from "../CustomHooks/useFetch";

const CustomHook = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <Hero text="Custom Hook Fetch" />
      {data.map((res) => {
        return (
          <div className="m-4" key={res.id}>
            <h4>
              {res.id} . {res.name}
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default CustomHook;
