import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addTextAction,
  addSwitchTextAction,
  swapTextAction,
} from "./store/fieldReducer";

import { switchKeyboardAction } from "./store/buttonReducer";
import Layout from "./components/layout/Layout";
import { RateContext } from "./context/ratecontext";

function App() {
  const englayout = `\`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>? \n`;
  const heblayout = `;1234567890-=/'קראטוןםפ][\\שדגכעיחלךף,זסבהנמצתץ.~!@#$%^&*)(_+QWERTYUIOP}{|ASDFGHJKL:"ZXCVBNM><? \n`;

  const dispatch = useDispatch();

  //const layout = useSelector((state) => state.button.layoutKey);
  const text = useSelector((state) => state.entryField.text);
  const switchText = useSelector((state) => state.entryField.switchText);
  const err = useSelector((state) => state.entryField.err);

  const onClickShiftButton = (layout) => {
    let layoutNew = "";
    if (layout == "eng") {
      layoutNew = "heb";
    } else {
      layoutNew = "eng";
    }
    dispatch(switchKeyboardAction(layoutNew));
    if (!err) {
      dispatch(swapTextAction({ text, switchText }));
    } else {
      addSwitchText(layoutNew, text);
    }
  };

  const onChangeEntryField = (layout, text) => {
    dispatch(addTextAction(text));
    addSwitchText(layout, text);
  };

  const addSwitchText = (layout, text) => {
    let payload = {};
    switch (layout) {
      case "eng":
        payload = swapText(text, englayout, heblayout);
        break;
      case "heb":
        payload = swapText(text, heblayout, englayout);
        break;
    }
    dispatch(addSwitchTextAction(payload));
  };

  const swapText = (text, fromLayout, toLayout) => {
    let result = [];
    let err = false;
    text.split("").map((el) => {
      if (fromLayout.indexOf(el) === -1) err = true;
      result.push(toLayout.split("")[fromLayout.indexOf(el)]);
    });
    result = err ? "Ошибка, символ не распознан! " : result.join("");
    return { err, result };
  };

  return (
    <RateContext.Provider
      value={{
        onClickShiftButton: onClickShiftButton,
        onChangeEntryField: onChangeEntryField,
      }}
    >
      <Layout />
    </RateContext.Provider>
  );
}
export default App;
