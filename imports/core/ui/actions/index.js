export const CLEAR_MESSAGES = 'ACCOUNTS: Clear Messages';
export const SHOW_MESSAGE = 'ACCOUNTS: Show Message';

const actions = {
  clearMessages() {
    return { type: CLEAR_MESSAGES };
  },
  showMessage() {
    return { type: SHOW_MESSAGE };
  },
};

export default actions;
