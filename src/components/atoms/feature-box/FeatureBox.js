import React from "react";

const FeatureBox = ({ icon, cardTitle, cardText }) => {
  return (
    <div className="feature-box">
      <i className={`feature-box__icon ${icon}`}></i>
      <h3 className="heading-tertiary u-margin-bottom-small">{cardTitle}</h3>
      <p class="feature-box__text">{cardText}</p>
    </div>
  );
};

export default FeatureBox;
