import React from "react";
import "./entryField.scss";
import { useSelector } from "react-redux";

const EntryField = (props) => {
  const text = useSelector((state) => state.entryField.text);
  const layout = useSelector((state) => state.button.layoutKey);
  const newText = (e) => {
    props.onChangeEntryField(layout, e.target.value);
  };

  return (
    <div>
      <textarea
        className="field"
        onChange={newText}
        placeholder="Введите текст"
        value={text}
      ></textarea>
    </div>
  );
};

export default EntryField;
