import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider, createStore, combineReducers, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';
import core from '../../core/ui/reducers/';

// route components
import AppContainer from '../../core/ui/containers/AppContainer.jsx';

const historyMiddleware = routerMiddleware(browserHistory);

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  core,
});

const store = createStore(rootReducer, {}, applyMiddleware(historyMiddleware, ReduxThunk));

const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} />
    </Router>
  </Provider>
);

export default renderRoutes;
