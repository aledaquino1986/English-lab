import React from "react";

const TertiaryHeading = ({ text, marginBottom }) => {
  return <h3 className={`heading-tertiary ${marginBottom}`}>{text}</h3>;
};

export default TertiaryHeading;
