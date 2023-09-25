import React from "react";
import Hero from "./Hero";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero text="Welcome to React 201" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                The new tire is built with the company Eco-Safety Design which
                allows for “better grip in wet and dry conditions and reduces
                rolling resistance,” according to officials. It is also designed
                for light off-road use and snow driving.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
