import React from "react";
import "./Button.css";
import { Button, ButtonContainer } from "./ButtonElement";
const ButtonComponent = ({ title, onClickAction }) => {
  return (
    <ButtonContainer>
      <Button className="Button" onClick={onClickAction}>
        {title}
      </Button>
    </ButtonContainer>
  );
};

export default ButtonComponent;
