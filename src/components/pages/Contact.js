import React from "react";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function contact() {
  return (
    <div className="contactForm">
      <div className="contactForm__title">
        <h1>Contact Me</h1>
      </div>

      <div className="contactForm__body">
        <form>
          <label htmlFor="userName">
            <FaUser />
          </label>
          <input type="text" id="userName" placeholder="User Name" />
          <label htmlFor="email">
            <FaEnvelope />
          </label>
          <input type="email" id="email" placeholder="Email" />
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Message"
          ></textarea>
        </form>
      </div>
    </div>
  );
}
