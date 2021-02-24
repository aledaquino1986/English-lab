import React from "react";
import SecondaryHeading from "../atoms/h2-heading/SecondaryHeading";
import TertiaryHeading from "../atoms/h3-heading/TertiaryHeading";
import SmallButton from "../atoms/small-button/SmallButton";
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
          <TertiaryHeading
            text="Dynamic classes for students of all levels"
            marginBottom="u-margin-bottom-small"
          />
          <p className="about-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            rerum minus repellat ducimus ut, voluptate repudiandae nam deserunt
            consequuntur rem consequatur beatae porro facilis asperiores unde
            ipsa fuga dicta. Repellendus?
          </p>

          <TertiaryHeading
            text="In-company spoken and written English training"
            marginBottom="u-margin-bottom-small"
          />
          <p className="about-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            rerum minus repellat ducimus ut, voluptate repudiandae nam deserunt
            consequuntur rem.
          </p>
          <SmallButton text={"Learn More"} />
        </div>
        <div className="col-1-of-2">
          <CompositionPhotos />
        </div>
      </div>
    </section>
  );
};

export default About;
