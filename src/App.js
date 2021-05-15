import React from "react";
import logo from "./components/images/cw.svg";
import design from "./components/images/design.svg";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div>
      <div className="logo-div">
        <img id="logo" src={logo} alt="" />
      </div>
      <UserCard />
      <div className="design-div">
        <img id="design" src={design} alt="" />
        <span>made by DPALA</span>
      </div>
    </div>
  );
};

export default App;
