import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to show toast messages
export const showToast = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "warning":
      toast.warn(message);
      break;
    default:
      toast(message);
  }
};

// ToastContainer component to display notifications
const ToastNotification = () => {
  return <ToastContainer position="top-right" autoClose={3000} hideProgressBar />;
};

export default ToastNotification;
