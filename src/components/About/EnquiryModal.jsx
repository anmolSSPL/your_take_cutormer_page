import React, { useState } from "react";
import scenary from "../../assets/scenary.svg";
import phone from "../../assets/phone.svg";
import enquirymail from "../../assets/enquirymail.svg";
import profile from "../../assets/profile.svg";
import { createUser } from "../../Helper/CreateUser";

const EnquiryModal = ({ isOpen, onClose }) => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  console.log(formData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numeric values in phone input
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (name === "email" && !emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else if (name === "email") {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (name === "phone" && (value.length !== 10 || isNaN(value))) {
      setErrors((prev) => ({ ...prev, phone: "Phone must be 10 digits" }));
    } else if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submission
    let validationErrors = {};
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (formData.phone.length !== 10) {
      validationErrors.phone = "Phone must be 10 digits";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const userData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      gender: "Not Specified",
      message: formData.message,
    };

    try {
      const response = await createUser(userData);
      console.log("User created:", response);

      if (!response) {
        throw new Error("User creation failed");
      } else {
        alert("Your Data is Submitted Successfully", response);

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        onClose();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;
  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        style={{ backgroundColor: "#212121B2" }}
      />

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-9">
        <div className="bg-white w-full max-w-2xl relative flex flex-col md:flex-row shadow-lg mt-4 h-auto md:h-[450px] rounded-lg">
          {/* Image Section */}
          <div className="w-full md:w-1/2 bg-[#F5F5F5] flex items-center justify-center h-[200px] md:h-full">
            <img
              src={scenary}
              alt="Scenery"
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between h-full p-4">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="mt-16">
              <h2 className="text-lg font-semibold text-[#9DC93C]">
                SEND INQUIRY
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                24/7 we will answer your questions and problems
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="relative">
                  <img
                    src={profile}
                    alt="Profile Icon"
                    className="absolute left-2 top-2 w-4 h-4"
                  />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                    required
                  />
                </div>
                <div className="relative">
                  <img
                    src={profile}
                    alt="Profile Icon"
                    className="absolute left-2 top-2 w-4 h-4"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <img
                  src={enquirymail}
                  alt="Email Icon"
                  className="absolute left-2 top-2 w-4 h-4"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              <div className="relative">
                <img
                  src={phone}
                  alt="Phone Icon"
                  className="absolute left-2 top-2 w-4 h-4"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full px-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Describe your issue"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0A1628] text-white py-1.5 text-sm rounded hover:bg-opacity-90 transition-colors"
              >
                {loading ? "Submitting..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryModal;
