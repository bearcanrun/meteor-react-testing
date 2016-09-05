import React, {PropTypes as T} from 'react';
import { Meteor } from 'meteor/meteor';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      welcome
    } = this.props;

    return (
      <div id="container" className="main">
        <div id="content-container">
          {welcome}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  welcome: T.string,      // first simple welcome prop — like 'Hello world!'
};
