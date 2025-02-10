import React from "react";
import "./EndChat.css";
import { createUser } from "../../Helper/CreateUser";
import PropTypes from "prop-types";
import ToastNotification, { showToast } from "../ToastNotification/ToastNotification";

export const EndChat = ({ responses, setResponses, isSubmitting, setIsSubmitting }) => { 
    console.log(responses);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (isSubmitting) return; // Prevent multiple submissions

    const userData = {
      name: `${responses.name} `,
      email: responses.email,
      phone: responses.phone,
      gender: responses.gender,
    };

    try {
      const response = await createUser(userData);
      console.log("User created:", response);

      if (!response) {
        throw new Error("User creation failed");
      } else {
        // alert("Your Data is Submitted Successfully", response); 
        showToast( "Your Data is Submitted Successfully" , "success");
        setIsSubmitting(true);

        // Reset form after successful submission
        setResponses({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <div className="end-chat-container">
        <p>
          Thank you for taking the time to answer all our questions! We truly
          value your feedback.
        </p>
        <p>
          If you enjoyed your experience, feel free to share it with your family
          and friends on social media—we’d love to hear from them too!
        </p>
        <button className="end-chat-button" onClick={handleSubmit}>
          {" "}
          Share the feedback{" "}
        </button>
      </div>
    </>
  );
};

EndChat.propTypes = {
  responses: PropTypes.object,
  setResponses: PropTypes.func, 
  isSubmitting: PropTypes.bool,
  setIsSubmitting: PropTypes.func
};

