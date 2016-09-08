import React, { PropTypes as T } from 'react';

const MainPage = ({ welcome }) => (
  <div id="main-page" className="page">
    <h1>{welcome}</h1>
  </div>
);

MainPage.propTypes = {
  welcome: T.string,
};

export default MainPage;
