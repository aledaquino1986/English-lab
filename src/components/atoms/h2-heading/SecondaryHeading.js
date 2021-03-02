import React from "react";

const SecondaryHeading = ({
  text,
  marginBottom,
  centerText = "u-center-text"
}) => {
  return (
    <div className={`${centerText} ${marginBottom}`}>
      <h2 className="heading-secondary"> {text}</h2>
    </div>
  );
};

export default SecondaryHeading;
