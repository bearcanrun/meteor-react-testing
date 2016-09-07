/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { chai } from 'meteor/practicalmeteor:chai';
import chaiSubset from 'chai-subset';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

import actions from './index.js';
import * as types from './constants.js';

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

chai.use(chaiSubset);

describe('core redux actions', function () {
  describe('action dispatch clearMessages', function () {
    it('should return function clearMessages', function () {
      chai.assert.isFunction(actions.clearMessages, 'that is a function');
    });

    it('should create action type object', function () {
      const expectedAction = { type: types.CLEAR_MESSAGES };

      chai.expect(actions.clearMessages())
        .to.containSubset(expectedAction, 'clearMessages return object');
    });
  });

  describe('action dispatch showMessage', function () {
    it('should return function showMessages', function () {
      chai.assert.isFunction(actions.showMessage, 'that is a function');
    });
    it('should create action type object with message', function () {
      const message = 'This is a message';

      const expectedAction = {
        type: types.SHOW_MESSAGE,
        message,
      };

      chai.expect(actions.showMessage(message)).to.containSubset(expectedAction);
    });
  });
});
