import * as Actions from '../actions/index';

export default function core(state = { message: '' }, action) {
  function clearMessages() {
    return Object.assign({}, state, { message: '' });
  }
  function showMessage(message) {
    return Object.assign({}, state, { view: message });
  }

  switch (action.type) {
    case Actions.CLEAR_MESSAGES:
      return clearMessages(state);
    case Actions.SHOW_MESSAGE:
      return showMessage(state, action.message);
    default:
      return state;
  }
}
