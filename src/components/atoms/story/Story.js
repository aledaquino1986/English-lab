import React from "react";
import TertiaryHeading from "../h3-heading/TertiaryHeading";

const Story = ({ text, src, tertiaryHeadingText, marginBottom }) => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img className="story__img" src={src} alt="ceo" />
          <figcaption className="story__caption">Mark Smith</figcaption>
        </figure>

        <div className="story__text">
          <TertiaryHeading
            text={tertiaryHeadingText}
            marginBottom={marginBottom}
          />

          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
