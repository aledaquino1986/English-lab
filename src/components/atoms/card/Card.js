import React from "react";

const Card = ({
  cardNumber,

  text,
  list1,
  list2,
  list3,
  list4,
  list5
}) => {
  return (
    <div className="card">
      <div
        className={`card__side card__side--front card__side--front-${cardNumber}`}
      >
        <div className={`card__picture card__picture--${cardNumber}`}>
          &nbsp;
        </div>
        <h4 className="card__heading">
          {" "}
          <span
            className={`card__heading-span card__heading-span--${cardNumber}`}
          >
            {text}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
            <li>{list5}</li>
          </ul>
        </div>
      </div>

      <div
        className={`card__side card__side--back card__side--back-${cardNumber}`}
      >
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">$300</p>
          </div>

          <a href="#" className="btn btn-white">
            Contact us now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
