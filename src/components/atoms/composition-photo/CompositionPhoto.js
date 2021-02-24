import React from "react";
import class1 from "../../../assets/images/class1.jpg";
import class2 from "../../../assets/images/class2.jpg";
import class3 from "../../../assets/images/class3.jpg";
const CompositionPhoto = () => {
  return (
    <div className="composition">
      <img
        src={class1}
        alt="class 1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={class2}
        alt="class 2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={class3}
        alt="class 3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default CompositionPhoto;
