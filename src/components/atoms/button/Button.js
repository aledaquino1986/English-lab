import React from "react";

const Button = ({ link, className, text }) => {
  return (
    <>
      <a href={link} className={className}>
        {text}
      </a>
    </>
  );
};

export default Button;
