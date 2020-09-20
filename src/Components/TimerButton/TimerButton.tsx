import React from "react";
import PropTypes from "prop-types";
import "./TimerButton.css";

type TimerButtonProps = {
  buttonAction: () => void;
  buttonValue: string;
};

const TimerButton = ({ buttonAction, buttonValue }: TimerButtonProps) => (
  <div className="button-container" onClick={buttonAction}>
    <p className="button-value">{buttonValue}</p>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;