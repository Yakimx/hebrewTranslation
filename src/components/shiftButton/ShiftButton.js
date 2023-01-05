import React from "react";
import "./shiftButton.scss";
import { useSelector } from "react-redux";

const ShiftButton = (props) => {
  const layout = useSelector((state) => state.button.layoutKey);
  const clickButton = () => {
    props.onClickShiftButton(layout);
  };

  return (
    <div>
      <button className="btn" onClick={clickButton}>
        Switch text
      </button>
    </div>
  );
};

export default ShiftButton;
