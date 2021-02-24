import React from "react";
import FeatureBox from "../atoms/feature-box/FeatureBox";

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <FeatureBox
            icon="fas fa-book"
            cardTitle="Spoken English"
            cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio
        id ducimus assumenda."
          />
        </div>

        <div className="col-1-of-4">
          <FeatureBox
            icon="fas fa-user-graduate"
            cardTitle="Expert teachers"
            cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio
        id ducimus assumenda."
          />
        </div>

        <div className="col-1-of-4">
          <FeatureBox
            icon="fas fa-book-open"
            cardTitle="In-company classes"
            cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio
        id ducimus assumenda."
          />
        </div>

        <div className="col-1-of-4">
          <FeatureBox
            icon="fas fa-chalkboard-teacher"
            cardTitle="In-company classes"
            cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio
        id ducimus assumenda."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
