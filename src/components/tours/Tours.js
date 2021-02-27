import React from "react";
import SecondaryHeading from "../atoms/h2-heading/SecondaryHeading";
import Card from "../atoms/card/Card";

const Tours = () => {
  const lists = ["hola bb", "ola bb1", "ola bb2", "olabbt", "juijui"];

  return (
    <section className="tours-section">
      <SecondaryHeading
        text="Check out all our courses"
        marginBottom="u-margin-bottom-large"
      />

      <div className="row">
        <div className="col-1-of-3">
          {" "}
          <Card
            cardNumber="1"
            text="Native speakers"
            list1="Native teachers"
            list2="British Accent"
            list3="Expert training"
            list4="Business English"
            list5="Pronunciation coaching"
          />
        </div>
        <div className="col-1-of-3">
          {" "}
          <Card
            cardNumber="2"
            text="International Exams"
            list1="International Exams"
            list2="BEC"
            list3="IELTS"
            list4="Toefl"
            list5="Cambridge"
          />
        </div>
        <div className="col-1-of-3">
          {" "}
          <Card
            cardNumber="3"
            text="Business English"
            list1="PrIvate classes"
            list2="In-company training"
            list3="Personalized attention"
            list4="Spanish classes"
            list5="Accent reduction for business"
          />
        </div>
      </div>
    </section>
  );
};

export default Tours;
