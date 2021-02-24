import React from "react";

const SecondaryHeading = ({ text, marginBottom }) => {
  return (
    <div className={`u-center-text ${marginBottom}`}>
      <h2 className="heading-secondary"> {text}</h2>
    </div>
  );
};

export default SecondaryHeading;
