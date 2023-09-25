import React, { useState, useEffect } from "react";
import Hero from "./Hero";

const StateHook = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });
  const [otherCount, setOtherCount] = useState(5);
  const [time, setTime] = useState(0);

  function increaseCounter() {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  }

  //Use effect with only callback runs every time the details update
  //   useEffect(() => {
  //     document.title = `${details.counter} new messages`;
  //   });

  //If we pass an empty array use effect only runs one, when the document is loades
  //   useEffect(() => {
  //     document.title = `${details.counter} new messages`;
  //   }, []);

  //When you pass a variable inside the array, use effect will run every time this variable change
  //   useEffect(() => {
  //     document.title = `${otherCount} new messages`;
  //   }, [otherCount]);

  useEffect(() => {
    console.log("Run useEffect", time);
    return () => {
      console.log("Clean up", time);
    };
  });

  function changeName(val) {
    setDetails((prev) => ({
      ...prev,
      name: (prev.name = val),
    }));
  }
  return (
    <>
      <Hero text="UseState and UseEffect Hooks" />
      <div className="m-4">
        <input
          className="y-4"
          type="text"
          onChange={(e) => changeName(e.target.value)}
        />
        <h1 className="my-4">
          {details.name} has clicked {details.counter} times.
        </h1>
        <button className="btn btn-primary y-4" onClick={increaseCounter}>
          Increase
        </button>

        <h3 className="my-4">Other count: {otherCount}.</h3>
        <button
          className="btn btn-primary y-4"
          onClick={() => setOtherCount(otherCount + 5)}
        >
          Other Count
        </button>
        <div className="m-4">
          <h3>{time} in seconds</h3>
          <button
            className="btn btn-primary y-4"
            onClick={() => setTime(time + 1)}
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
};

export default StateHook;
