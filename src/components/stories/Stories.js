import React from "react";
import SecondaryHeading from "../atoms/h2-heading/SecondaryHeading";
import video from "../../assets/video/classvideo.mp4";
import ceo1 from "../../assets/images/ceo.jpg";
import ceo2 from "../../assets/images/ceo2.jpg";
import Story from "../../components/atoms/story/Story";

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>

      <SecondaryHeading
        text="Read what our students think"
        marginBottom="u-margin-bottom-large"
      />
      <Story
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            animi distinctio, explicabo nesciunt aliquam id molestias quaerat
            consectetur, labore assumenda porro eum quia exercitationem repellat
            aspernatur! Reiciendis quos ipsa perferendis!"
        src={ceo1}
        tertiaryHeadingText="I passed an international exam"
        marginBottom="u-margin-bottom-small"
      />

      <Story
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            animi distinctio, explicabo nesciunt aliquam id molestias quaerat
            consectetur, labore assumenda porro eum quia exercitationem repellat
            aspernatur! Reiciendis quos ipsa perferendis!"
        src={ceo2}
        tertiaryHeadingText="Best teachers ever"
        marginBottom="u-margin-bottom-small"
      />
    </section>
  );
};

export default Stories;
