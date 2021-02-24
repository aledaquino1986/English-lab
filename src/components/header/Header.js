import React from "react";
import logo from "../../assets/icon/logo.png";
import Button from "../atoms/button/Button";
import Heading from "../atoms/h1-heading/Heading";

const Header = () => {
  return (
    <header>
      <div className="logo-box">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <Heading>
        <Button
          link="#"
          className="btn btn-white btn-animated u-margin-top-medium"
          text="Learn more about our classes"
        />
      </Heading>
    </header>
  );
};

export default Header;
