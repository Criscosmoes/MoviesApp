import "./Button.module.css";
import React from "react";

const Button = () => {
  return (
    <div>
      <button
        type="button"
        // Note how the "error" class is accessed as a property on the imported
        // `styles` object.
        className="error"
      >
        Destroy
      </button>
    </div>
  );
};

export default Button;
