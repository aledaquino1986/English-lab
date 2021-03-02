import React from "react";
import SecondaryHeading from "../atoms/h2-heading/SecondaryHeading";
import SmallButton from "../atoms/small-button/SmallButton";
import Button from "../atoms/button/Button";

const Form = () => {
  return (
    <div className="book__form">
      <form action="#" className="form">
        <SecondaryHeading
          text="Book your class"
          marginBottom="u-margin-bottom-large"
          centerText=""
        />
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Full Name"
            required
            id="name"
          />
          <label htmlFor="name" className="form__label">
            Full Name
          </label>
        </div>

        <div className="form__group">
          <input
            type="email"
            className="form__input"
            placeholder="Email"
            required
            id="email"
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>

        <div class="form__group">
          <div className="form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              placeholder="Email"
              id="small"
              name="size"
            />

            <label htmlFor="small" className="form__radio-label">
              <span class="form__radio-button"></span> Small
            </label>
          </div>

          <div className="form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              placeholder="Email"
              id="large"
              name="size"
            />

            <label htmlFor="large" className="form__radio-label">
              <span class="form__radio-button"></span> Large
            </label>
          </div>

          <div class="form__group">
            <Button
              text="Learn more"
              className="btn u-margin-top-small btn-blue "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
