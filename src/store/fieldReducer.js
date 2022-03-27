const defaultState = {
  text: "",
  switchText: "",
  err: false,
};

const ADD_TEXT = "ADD_TEXT";
const SWITCH_TEXT = "SWITCH_TEXT";
const SWAP_TEXT = "SWAP_TEXT";

export const fieldReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return { ...state, text: action.payload };
    case SWITCH_TEXT:
      return {
        ...state,
        switchText: action.payload.result,
        err: action.payload.err,
      };
    case SWAP_TEXT:
      return {
        ...state,
        switchText: action.payload.text,
        text: action.payload.switchText,
      };

    default:
      return state;
  }
};

export const addTextAction = (payload) => ({ type: ADD_TEXT, payload });
export const addSwitchTextAction = (payload) => ({
  type: SWITCH_TEXT,
  payload,
});
export const swapTextAction = (payload) => ({ type: SWAP_TEXT, payload });
