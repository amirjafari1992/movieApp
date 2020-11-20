import React, { Component } from "react";

const Input = ({ name, type, onChange, placeholder, value, label, error }) => {
  return (
    <div className="form-group mr-2">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        aria-describedby="emailHelp"
        placeholder={placeholder}
      />
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default Input;
