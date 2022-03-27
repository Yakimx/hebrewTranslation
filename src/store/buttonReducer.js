const defaultState = {
  layoutKey: "eng",
  err: false,
};

const SWITCH_KEYBOARD = "SWITCH_KEYBOARD";

export const buttonReducder = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_KEYBOARD:
      return { ...state, layoutKey: action.payload };
    default:
      return state;
  }
};

export const switchKeyboardAction = (payload) => ({
  type: SWITCH_KEYBOARD,
  payload,
});
