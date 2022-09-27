import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Submitting } from "../components";

const initialformState = {
  name: "",
  email: "",
  message: "",
};
const successMessage = {
  class: "bg-desaturated-cyan",
  text: "Thanks, I'll be in touch shortly",
};
const errorMessage = {
  class: "bright-red",
  text: "Sorry, there was a problem. Please try again!",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(initialformState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState();
  const [focusname, setFocusName] = useState(false);
  const [focusemail, setFocusEmail] = useState(false);
  const [focusmessage, setFocusMessage] = useState(false);
  const navigate = useNavigate();
  const formId = "CFxKRXF7";
  const formUrl = `https://submit-form.com/${formId}`;

  const postSubmission = async () => {
    const payload = {
      ...formData,
    };
    try {
      const result = await axios.post(formUrl, payload);
      setMessage(successMessage);
      setFormData(initialformState);
      setFocusName(false);
      setFocusEmail(false);
      setFocusMessage(false);
      console.log(result);
    } catch (error) {
      setMessage(errorMessage);
      console.log(error);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);

    navigate("/contact");
  };

  const collectInputData = (e) => {
    const { id, value } = e.target;
    const formKey = id;
    const updatedFormData = { ...formData };
    updatedFormData[formKey] = value;
    setFormData(updatedFormData);
  };
  return (
    <div className="tablet:px-10 laptop:px-48 mt-10 font-IBM py-10">
      <form
        action="https://formspree.io/f/mbjwbvyo"
        method="POST"
        onSubmit={submitForm}
        className="form"
      >
        <header className="mb-6">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="#00aecb"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <hr className="h-two-px w-12 mt-2  text-desaturated-cyan" />
          </span>
        </header>
        {message && (
          <div
            className={` bg-5FB4A2 my-4 text-light-grey flex gap-2 items-center w-fit p-4 ${message.class}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{message.text}</span>
            <button
              onClick={() => setMessage("")}
              className="menu-btn cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                <path
                  fill="rgb(227, 224, 247)"
                  fillRule="evenodd"
                  d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="form-row">
          <label htmlFor="name" className="form-label text-body-4">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            placeholder="Name"
            onChange={collectInputData}
            onBlur={() => setFocusName(true)}
            focusname={focusname.toString()}
            className="form-input focus:outline-none border focus:border-desaturated-cyan focus:ring-desaturated-cyan caret-desaturated-cyan cursor-pointer"
            required
          />
          <small className="form-alert text-body-3 mt-2">
            Please enter your name
          </small>
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label text-body-4">
            Your email
          </label>
          <input
            id="email"
            value={formData.email}
            name="email"
            type="email"
            placeholder="example@email.com"
            onChange={collectInputData}
            onBlur={() => setFocusEmail(true)}
            focusemail={focusemail.toString()}
            className="form-input focus:outline-none border focus:border-desaturated-cyan focus:ring-desaturated-cyan caret-desaturated-cyan cursor-pointer"
            required
          />
          <small className="form-alert text-body-3 mt-2">
            Please enter a valid email
          </small>
        </div>

        <div className="form-row">
          <label htmlFor="name" className="form-label text-body-4">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Enter your message"
            onChange={collectInputData}
            onBlur={() => setFocusMessage(true)}
            focusmessage={focusmessage.toString()}
            className="form-textarea focus:outline-none border focus:border-desaturated-cyan focus:ring-desaturated-cyan caret-desaturated-cyan cursor-pointer"
            value={formData.message}
            required
          />
          <small className="form-alert text-body-3 mt-2">
            Please enter your Message
          </small>
        </div>

        <button
          disabled={submitting}
          className="form-btn uppercase bg-203A4C  hover:bg-00aecb w-48 h-12 flex items-center justify-center
          transition-colors duration-300
          "
          type="submit"
        >
          {submitting ? <Submitting /> : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
