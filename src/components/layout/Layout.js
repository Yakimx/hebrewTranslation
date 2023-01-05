import React from "react";
import "./layout.scss";
import EntryField from "../../components/entryField/EntryField";
import OutputField from "../../components/outputField/OutputField";
import TranslateField from "../../components/translateField/TranslateField";
import ShiftButton from "../../components/shiftButton/ShiftButton";
import { useContext } from "react";
import { RateContext } from "../../context/ratecontext";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const { onClickShiftButton, onChangeEntryField } = useContext(RateContext);
  const layout = useSelector((state) => state.button.layoutKey);

  return (
    <div>
      <ShiftButton onClickShiftButton={onClickShiftButton} />

      <div className="layout">
        <div>{layout == "eng" ? "English keyboard" : "Hebrew keyboard"}</div>
        <div></div>
        <div>{layout == "eng" ? "Hebrew keyboard" : "English keyboard"}</div>
        <EntryField onChangeEntryField={onChangeEntryField} />
        <div></div>
        <OutputField />
        {/* <TranslateField /> */}
      </div>
    </div>
  );
};

export default Layout;
