export const CLEAR_MESSAGES = 'ACCOUNTS: Clear Messages';
export const SHOW_MESSAGE = 'ACCOUNTS: Show Message';

const actions = {
  clearMessages() {
    return { type: CLEAR_MESSAGES };
  },
  showMessage(message) {
    return { type: SHOW_MESSAGE, message };
  },
};

export default actions;
