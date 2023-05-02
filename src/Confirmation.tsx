import React, { useState, useEffect } from "react";
import "./confirmation.css";

const alertClasses = {
  primary: "alert alert-primary",
  secondary: "alert alert-secondary",
  success: "alert alert-success",
  error: "alert alert-danger",
  caution: "alert alert-warning",
  message: "alert alert-info",
  light: "alert alert-light",
  dark: "alert alert-dark",
};
interface IProps {
  message: string;
  type:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "caution"
    | "message"
    | "light"
    | "dark";
  acceptLabel: string;
  declineLabel: string;
  accept: () => void;
  decline: () => void;
}

function Confirmation({
  message,
  type,
  accept,
  decline,
  acceptLabel,
  declineLabel,
}: IProps) {
  const [shouldRender, setShouldRender] = useState(true);

  const onClickHandle = (isCofirmation: boolean) => {
    if (isCofirmation) {
      accept();
    } else {
      decline();
    }
    setShouldRender(false);
  };

  const getClassName = () => {
    if (!type) return alertClasses.message;
    return alertClasses[type];
  };

  if (!shouldRender) return null;

  return (
    <div className={getClassName()}>
      <p>{message}</p>
      <div className="btn-container">
        <div onClick={() => onClickHandle(true)} className="btn btn-primary">
          {acceptLabel}
        </div>
        <div onClick={() => onClickHandle(false)} className="btn btn-danger">
          {declineLabel}
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
