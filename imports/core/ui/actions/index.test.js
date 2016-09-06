import { describe, it, expect } from 'mocha';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actions as coreActions } from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('core actions', () => {
  it('should dispatch', () => {
    const initialState = {};
    const clearMessages = coreActions.clearMessages;

    const store = mockStore(initialState);
    store.dispatch(clearMessages);

    const actions = store.getActions();

    expect(actions).toEqual([clearMessages]);
  });
});
