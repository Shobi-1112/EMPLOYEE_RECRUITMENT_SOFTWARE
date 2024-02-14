import React, { useState } from "react";
import "./ResetPassword.scss";
import { ToastContainer, toast } from "react-toastify";

const Resetpassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    errors: {
      currentPasswordError: "",
      newPasswordError: "",
      confirmPasswordError: "",
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [`${name}Error`]: "",
      },
    });
  };

  const handleReset = () => {
    if (validateForm()) {
      toast.success("Reset successful");
      window.location.href = "/";
    }
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formData.currentPassword.trim() === "") {
      toast.error("Please enter valid current password", {
        closeButton: true,
      });
      valid = false;
    }
    if (formData.newPassword.trim() === "") {
      toast.error("Please enter valid new password", {
        closeButton: true,
      });
      valid = false;
    } else if (formData.newPassword.length < 8) {
      toast.error("Please enter valid confirm password", {
        closeButton: true,
      });
      valid = false;
    }
    if (formData.confirmPassword.trim() === "") {
      toast.error("Please confirm your new password", {
        closeButton: true,
      });
      valid = false;
    } else if (formData.confirmPassword !== formData.newPassword) {
      toast.error("Password doesn't match", {
        closeButton: true,
      });
      valid = false;
    }

    setFormData({
      ...formData,
      errors: newErrors,
    });
    return valid;
  };

  return (
    <div className="Resetpasswordbox">
      <ToastContainer className="toast-message" closeButton={false} />
      <h1 className="heading">RESET PASSWORD</h1>
      <div className="Resetpasswordcontent">
        <div className="passwordchange">
          <p className="labelname">CURRENT PASSWORD :</p>
          <input
            type="password"
            placeholder="Current password"
            className="inputbox"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleInputChange}
          />
          {formData.errors.currentPasswordError && (
            <p className="error">{formData.errors.currentPasswordError}</p>
          )}
        </div>
        <div className="newpassword">
          <p className="labelname">NEW PASSWORD :</p>
          <input
            type="password"
            placeholder="New password"
            className="inputbox"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
          {formData.errors.newPasswordError && (
            <p className="error">{formData.errors.newPasswordError}</p>
          )}
        </div>
        <div className="newpassword">
          <p className="labelname">CONFIRM PASSWORD :</p>
          <input
            type="password"
            placeholder="Confirm password"
            className="inputbox"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formData.errors.confirmPasswordError && (
            <p className="error">{formData.errors.confirmPasswordError}</p>
          )}
        </div>
        <button className="Resetbutton" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Resetpassword;
