import { describe, it, expect } from 'mocha';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('core actions', () => {
  it('should dispatch', () => {
    const initialState = {};
    const addTodo = { type: 'ADD_TODO' };

    const store = mockStore(initialState);
    store.dispatch(addTodo);

    const actions = store.getActions();

    expect(actions).toEqual([addTodo]);
  });
});
