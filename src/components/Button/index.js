import React from "react";
import "./Button.css";
const ButtonComponent = ({ title, onClickAction }) => {
  return (
    <div id="seventh" className="buttonBox">
      <button onClick={onClickAction}>{title}</button>
    </div>
  );
};

export default ButtonComponent;
