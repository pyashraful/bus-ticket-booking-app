import React from "react";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import classes from "../../styles/Contact.module.css";

export default function contact() {
  return (
    <div className={classes.contactForm}>
      <div className={classes.contactFormTitle}>
        <h1>Contact Me</h1>
      </div>

      <div className={classes.contactFormBody}>
        <form>
          <div className={classes.inputContainer}>
            <label htmlFor="userName">
              <FaUser />
            </label>
            <input type="text" id="userName" placeholder="User Name" />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="email">
              <FaEnvelope />
            </label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className={classes.inputContainer}>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <input
            id="submitBtn"
            class="submitBtn"
            type="submit"
            value="Send"
          ></input>
        </form>
      </div>
    </div>
  );
}
