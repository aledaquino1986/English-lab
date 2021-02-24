import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="text-box">
      <h1 className="heading">
        <span className="heading__primary-main">Learn English</span>
        <span className="heading__primary-sub">Begin your journey</span>
      </h1>
      {children}
    </div>
  );
};

export default Heading;
