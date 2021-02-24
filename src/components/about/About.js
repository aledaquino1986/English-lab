import React from "react";
import SecondaryHeading from "../atoms/h2-heading/SecondaryHeading";
import AboutText from "../atoms/about-text/AboutText";
import CompositionPhotos from "../atoms/composition-photo/CompositionPhoto";

const About = () => {
  return (
    <section className="section-about">
      <SecondaryHeading
        text="Learning English doesn't need to be boring!"
        marginBottom="u-margin-bottom-large"
      />

      <div className="row">
        <div className="col-1-of-2">
          <AboutText
            text1=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam rerum
        minus repellat ducimus ut, voluptate repudiandae nam deserunt
        consequuntur rem consequatur beatae porro facilis asperiores unde ipsa
        fuga dicta. Repellendus?"
            text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam rerum
        minus repellat ducimus ut, voluptate repudiandae nam deserunt
        consequuntur rem."
            buttonText="Learn More"
          />
        </div>
        <div className="col-1-of-2">
          <CompositionPhotos />
        </div>
      </div>
    </section>
  );
};

export default About;
