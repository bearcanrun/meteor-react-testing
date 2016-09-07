import * as types from './constants.js';

const actions = {
  clearMessages() {
    return { type: types.CLEAR_MESSAGES };
  },
  showMessage(message) {
    return { type: types.SHOW_MESSAGE, message };
  },
};

export default actions;
