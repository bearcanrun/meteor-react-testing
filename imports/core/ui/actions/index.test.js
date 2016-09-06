/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import expect from 'chai';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actions as coreActions, CLEAR_MESSAGES } from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('core actions', function () {
  it('should dispatch', function () {
    const initialState = {};
    const clearMessages = CLEAR_MESSAGES;

    const store = mockStore(initialState);
    store.dispatch(coreActions.clearMessages);

    const actions = store.getActions();

    expect(actions).toEqual([clearMessages]);
  });
});
