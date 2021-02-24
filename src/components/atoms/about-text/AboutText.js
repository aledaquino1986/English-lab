import React from "react";
import TertiaryHeading from "../h3-heading/TertiaryHeading";
import SmallButton from "../small-button/SmallButton";

const AboutText = ({ text1, text2, buttonText }) => {
  return (
    <>
      <TertiaryHeading
        text="Dynamic classes for students of all levels"
        marginBottom="u-margin-bottom-small"
      />
      <p className="about-text">{text1}</p>

      <TertiaryHeading
        text="In-company spoken and written English training"
        marginBottom="u-margin-bottom-small"
      />
      <p className="about-text">{text2}</p>
      <SmallButton text={buttonText} />
    </>
  );
};

export default AboutText;
