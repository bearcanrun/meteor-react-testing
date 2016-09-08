/* eslint-disable react/prefer-stateless-function */
import React, { PropTypes as T } from 'react';

import MainPage from '../components/MainPage.jsx';

export default class App extends React.Component {
  render() {
    const { props } = this.props;

    return (
      <div id="container" className="main">
        <div id="content-container">
          <MainPage welcome={props.welcome} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  props: T.object,      // first simple welcome prop — like 'Hello world!'
};
