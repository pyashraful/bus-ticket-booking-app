import React, { useReducer } from "react";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import classes from "../../styles/Contact.module.css";

var initialState = {
  userName: "",
  email: "",
  message: "",
};

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function Contact() {
  const [formData, setFormData] = useReducer(reducer, initialState);

  function hendleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  function hendleChange(event) {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className={classes.contactForm}>
      <div className={classes.contactFormTitle}>
        <h1>Contact Me</h1>
      </div>

      <div className={classes.contactFormBody}>
        <form onSubmit={hendleSubmit}>
          <div className={classes.inputContainer}>
            <label htmlFor="userName">
              <FaUser />
            </label>
            <input
              name="userName"
              type="text"
              id="userName"
              placeholder="User Name"
              onChange={hendleChange}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="email">
              <FaEnvelope />
            </label>
            <input
              onChange={hendleChange}
              name="email"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className={classes.inputContainer}>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Message"
              onChange={hendleChange}
            ></textarea>
          </div>
          <input
            id="submitBtn"
            className="submitBtn"
            type="submit"
            value="Send"
          ></input>
        </form>
      </div>
    </div>
  );
}
