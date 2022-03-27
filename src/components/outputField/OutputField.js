import React from "react";
import "./outputField.scss";
import { useSelector } from "react-redux";

const OutputField = (props) => {
  const switchText = useSelector((state) => state.entryField.switchText);
  return (
    <div>
      <textarea
        className="fieldOut"
        value={switchText}
        disabled={true}
      ></textarea>
    </div>
  );
};

export default OutputField;
