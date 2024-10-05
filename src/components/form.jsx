// import React from 'react'
import './form.css'
import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({}); 

  const signInHandler = (e) => {
    e.preventDefault();
    const errors = {};
    if (userPassword !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      console.log("Form submitted successfully:", {
        firstName,
        lastName,
        userEmail,
        userPassword,
      });
    }
  };
  return (
    <div className=" d-flex h-100 mt-5 justify-content-center pt-5">
      <main>
        <form
          onSubmit={signInHandler}
          className="formm border border-primary rounded-3 shadow p-5"
        >
          <h2 className="text-center pb-3">
            <i>Please Sign in</i>
          </h2>
          <div>
            <label>First Name</label>
            <input
              className="d-block w-100 px-5 py-1 mb-4 border border-1 rounded-2"
              type="text"
              name="firstName"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              className="d-block w-100 px-5 py-1 mb-4 border border-1 rounded-2"
              type="text"
              name="lastName"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="d-block w-100 px-5 py-1 mb-4 border border-1 rounded-2"
              type="email"
              name="email"
              placeholder="name@gmail.com"
              value={userEmail}
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="d-block w-100 px-5 py-1 mb-4 border border-1 rounded-2"
              type="password"
              name="password"
              value={userPassword}
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              className="d-block w-100 px-5 py-1 mb-4 border border-1 rounded-2"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {formErrors.confirmPassword && (
              <p className="text-danger">{formErrors.confirmPassword}</p>
            )}
          </div>
          <button
            className="px-4 rounded-pill d-block w-75 p-2 bg-primary text-white mx-auto"
            type="submit"
          >
            <i>Submit</i>
          </button>
        </form>
      </main>
    </div>
  );
};

export default Form;