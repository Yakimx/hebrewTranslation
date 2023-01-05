import React from "react";
import styles from "./translateField.module.scss";
import { useSelector } from "react-redux";

const TranslateField = (props) => {
  const lang = useSelector((state) => state.button.layoutKey);
  const { text, switchText } = useSelector((state) => state.entryField);
  const translateText = lang == "eng" ? switchText : text;
  

  console.log(text);
  return (
    <div className={styles.field}>
      <h1>Translation</h1>
      <textarea value={translateText} disabled={true}></textarea>
    </div>
  );
};

export default TranslateField;
